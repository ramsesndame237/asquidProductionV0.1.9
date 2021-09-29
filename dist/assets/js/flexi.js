var app = new Vue({
    el: '#flexiSquid',
    data: {
    ChoseItemList: [],
      designChooseList: [],
    quantityChooseList:[],
    resumeChooseList:[],
    index: 0,
      indx: 0,
      dropChoose: false,
    YourFlexisize:"",
    YourFlexiDesign:"",
      chooseDesign: "",
      yourSizePrice: 0,
    designPrice:0,
      YourFlexiTotalAmount: 0,
      YourFlexiQuantity: "1 Flexi Squid",
      itemToShow: "",
      initialQuatity:'1',
     kitQuantity: [
        {
          id:'1',quantity:'1 Flexi Squid',value:"1"
        },
         {
          id:'2',quantity:'2 Flexi Squid',value:"2"
        },
          {
          id:'3',quantity:'3 Flexi Squid',value:"3"
        },
           {
          id:'4',quantity:'4 Flexi Squid',value:"4"
        },
        {
          id:'5',quantity:'5 Flexi Squid',value:"5"
        },

      ]
    },
  methods: {
      removeItem(itemId, value) {
          this.YourFlexiQuantity = itemId
        if (JSON.parse(localStorage.getItem('oldTotalFlexi') != 'null' && localStorage.getItem('oldTotalFlexi')).length > 0) {
          let oldValue = JSON.parse(localStorage.getItem('oldTotalFlexi'))
          this.YourFlexiTotalAmount = this.YourFlexiTotalAmount / parseInt(oldValue)
          setTimeout(() => {
            this.YourFlexiTotalAmount = this.YourFlexiTotalAmount * parseInt(value)
            localStorage.setItem("oldTotalFlexi", JSON.stringify(value))
          }, 300);
        } else {
          this.YourFlexiTotalAmount = this.YourFlexiTotalAmount * parseInt(value)
          localStorage.setItem("oldTotalFlexi", JSON.stringify(value))
        }
            this.dropChoose = false
      },
      customiseZer(){
        let data ="Flexi Squid"
        localStorage.setItem("CustomiseTitle", data)

        let commande= {
          nameProduct: data,
          sizeProduct: this.YourFlexisize,
          designProduct: this.YourFlexiDesign,
          quantityProduct: this.YourFlexiQuantity,
          totalAmountProduct:this.YourFlexiTotalAmount
        }

        if (commande.sizeProduct != '' && commande.totalAmountProduct != '') {
          window.location = "../../../customiser2.html"
        } else {
          alert("Veillez selectionner une taille")
        }
        localStorage.setItem('commande',JSON.stringify(commande))
      },
      ShowActive(n) {
        this.FlexiShowActive((this.index = n));
        console.log(n);
      },
      FlexiShowActive(n) {
        this.removeItem(this.kitQuantity[0].quantity,this.kitQuantity[0].value)
        for (var i = 0; i < this.ChoseItemList.length; i++) {
          this.ChoseItemList[i].classList.remove("Acitve")
        }
        this.YourFlexiTotalAmount = this.YourFlexiTotalAmount - parseInt(this.yourSizePrice)
        if (n == 0) {
          console.log(n)
          this.YourFlexisize ='Size M "800 x 250 mm"  '
          let dataSize={
            width:"800",
            height:"250"
          }
          this.yourSizePrice = 159
          localStorage.setItem("customizerSize",JSON.stringify(dataSize))
        }else if(n == 1){
          console.log(n)
          this.YourFlexisize ='Size L "950 x 300 mm"  '
          let dataSize={
            width:"950",
            height:"300"
          }
          this.yourSizePrice = 199
          localStorage.setItem("customizerSize",JSON.stringify(dataSize))
        }
        
        this.ChoseItemList[n].classList.add("Acitve");
        this.YourFlexiTotalAmount = this.YourFlexiTotalAmount + parseInt(this.yourSizePrice)
        this.FlexiDesignShowActive(0)
      },
      DesignChoose(n) {
        this.FlexiDesignShowActive(this.indx = n);
        console.log(n)
      },

      FlexiDesignShowActive(n) {
        for (let i = 0; i < this.designChooseList.length; i++) {
          if (this.designChooseList[i].classList.contains("Acitve")) {
            this.designChooseList[i].classList.remove("Acitve")
          } else {
            console.log("ok on verifie ici")
          }
        }
        this.YourFlexiTotalAmount = this.YourFlexiTotalAmount - parseInt(this.designPrice)
        if (n == 0) {
          console.log(n)
            this.designPrice = 0
          this.YourFlexiDesign ='None'
        }else if(n == 1){
          this.YourFlexiDesign = 'Graphic design'
          this.designPrice = 45
          setTimeout(() => {
            let graphic = document.querySelector(".messageDesignChoose")
            console.log(graphic)
            if (graphic.classList.contains("animate__fadeOutDown")) {
              graphic.classList.add("animate__fadeOutDown")
            } else {
              graphic.classList.remove("animate__fadeInDown")
            }
              graphic.classList.add("animate__fadeOutDown")
          }, 2500);
        }
        this.designChooseList[n].classList.add("Acitve")
        this.YourFlexiTotalAmount = this.YourFlexiTotalAmount + parseInt(this.designPrice)
      },
      resumeChoose(n){
          this.resumeShowActive(this.indx = n)
          console.log(n)
      },
      resumeShowActive(n){
          for (var i = 0; i < this.resumeChooseList.length; i++) {
            this.resumeChooseList[i].classList.remove("active")
          }

          this.resumeChooseList[n].classList.add("active")
      },
  },
    mounted() {
      this.ChoseItemList = document.querySelectorAll(".flexiSizeDimension");
      this.designChooseList = document.querySelectorAll('.desingFlexi')
      console.log(document.querySelector(".select-box__current"))
      localStorage.setItem('oldTotalFlexi',JSON.stringify(this.initialQuatity))
      console.log(this.designChooseList)
      this.quantityChooseList = document.querySelectorAll(".select-box__input")
      console.log(this.quantityChooseList)

      console.log(this.ChoseItemList)
       this.resumeChooseList = document.querySelectorAll(".contentLinkItem")
      this.resumeShowActive(this.index =0)
      this.itemToShow = 'overview'
   }
  })
