var app = new Vue({
    el: '#flexiSquid',
    data: {
    ChoseItemList: [],
      designChooseList: [],
    quantityChooseList:[],
    resumeChooseList:[],
    index: 0,
    indx:0,
    YourFlexisize:"",
    YourFlexiDesign:"",
      YourFlexiQuantity: "",
    chooseDesign:"",
    YourFlexiTotalAmount:0,
    itemToShow:"",
    },
  methods: {
      customiseZer(){
            let data ="Flexi Squid"
            localStorage.setItem("CustomiseTitle",data)
        },
      ShowActive(n) {
        this.FlexiShowActive((this.index = n));
        console.log(n);
      },
      FlexiShowActive(n) {
        for (var i = 0; i < this.ChoseItemList.length; i++) {
          this.ChoseItemList[i].classList.remove("Acitve")
        }
        if (n == 0) {
          console.log(n)
          this.YourFlexisize ='Size M "800 x 250 mm"  '
          let dataSize={
            width:"800",
            height:"250"
          }
          localStorage.setItem("customizerSize",JSON.stringify(dataSize))
        }else if(n == 1){
          console.log(n)
            this.YourFlexisize ='Size L "950 x 300 mm"  '
            let dataSize={
              width:"950",
              height:"300"
            }
            localStorage.setItem("customizerSize",JSON.stringify(dataSize))
        }

        this.ChoseItemList[n].classList.add("Acitve");
        this.FlexiDesignShowActive(0)
      this.quantityChooseFlexi(4)
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
        if (n == 0) {
          console.log(n)
          this.YourFlexiDesign ='None'
        }else if(n == 1){
          this.YourFlexiDesign = 'Graphic design'
          setTimeout(() => {
            let graphic = document.querySelector(".messageDesignChoose")
            console.log(graphic)
            if (graphic.classList.contains("animate__fadeOutDown")) {
              graphic.classList.add("animate__fadeOutDown")
            } else {
              graphic.classList.remove("animate__fadeInDown")
            }
              graphic.classList.add("animate__fadeOutDown")
          }, 1000);
        }
        this.designChooseList[n].classList.add("Acitve")
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
      quantityChooseFlexi(n) {
        console.log(this.quantityChooseList[n].value)
        this.YourFlexiQuantity = this.quantityChooseList[n].value + "FlexiSquid"
      }
  },
    mounted() {
      this.ChoseItemList = document.querySelectorAll(".flexiSizeDimension");
      this.designChooseList = document.querySelectorAll('.desingFlexi')
      console.log(document.querySelector(".select-box__current"))
      console.log(this.designChooseList)
      this.quantityChooseList = document.querySelectorAll(".select-box__input")
      console.log(this.quantityChooseList)

      console.log(this.ChoseItemList)
       this.resumeChooseList = document.querySelectorAll(".contentLinkItem")
      this.resumeShowActive(this.index =0)
      this.itemToShow = 'overview'
   }
  })
