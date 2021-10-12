var app = new Vue({
    el: '#flexiSquid',
    data: {
    ChoseItemList: [],
    designChooseList: [],
    quantityChooseList:[],
      resumeChooseList: [],
    infoDesign:[],
    index: 0,
      indx: 0,
      dropChoose: false,
      visuel: false,
      proposition: false,
      grapic:false,
      YourFlexisize: "",
      sizeC: '',
      quantite:'1',
      kitSize: [
          {
         id:"0",nomSize:'M',dimension:'800 x 200',image:'../dist/assets/images/Car_Stickers_Flexisquid_800.png'
        },
           {
         id:"1",nomSize:'L',dimension:'950 x 300',image:'../dist/assets/images/Car_Stickers_Flexisquid_950.png'
        },
      ],
       KitDesign: [
        {
          id:'0',nomDesign:'None',image:'#'
        },
        {
          id:'1',nomDesign:'Graphic support',image:'../dist/assets/images/Page produit/Design_assist.png'
        }
      ],
    YourFlexiDesign:"",
      chooseDesign: "",
      YourSizePrice: 0,
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
        console.log(itemId)
        console.log(value)
          this.YourFlexiQuantity = itemId
        if (JSON.parse(localStorage.getItem('oldTotal') != 'null' && localStorage.getItem('oldTotal')).length > 0) {
          let oldValue = JSON.parse(localStorage.getItem('oldTotal'))
          this.YourFlexiTotalAmount = this.YourFlexiTotalAmount / parseInt(oldValue)
          setTimeout(() => {
            this.YourFlexiTotalAmount = this.YourFlexiTotalAmount * parseInt(value)
            localStorage.setItem("oldTotal", JSON.stringify(value))
          }, 300);
        } else {
          this.YourFlexiTotalAmount = this.YourFlexiTotalAmount * parseInt(value)
          localStorage.setItem("oldTotal", JSON.stringify(value))
        }
        this.dropChoose = false
        this.quatite = value
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
       sizeChooseSquid(n) {
        this.sizeShowActive(index = 0)
        console.log(n)
      },
      sizeShowActive(n) {
        for (let i = 0; i < this.ChoseItemList.length; i++) {
          this.ChoseItemList[i].classList.remove("actived")
        }
         if (n == 0) {
           this.YourFlexisize = 'Size XS "800 x 200 mm"'
           this.sizeC = "800 x 200 mm"
           this.YourSizePrice = 159
            let dataSize={
              width:"800",
              height:"200"
            }
            localStorage.setItem("customizerSize",JSON.stringify(dataSize))
          }else if(n == 1){
           this.YourFlexisize = 'Size S "950 x 300 mm"'
           this.YourSizePrice =199
            let dataSize={
              width:"950",
              height:"300"
            }
            localStorage.setItem("customizerSize",JSON.stringify(dataSize))
          }
          
        this.YourFlexiTotalAmount = this.YourFlexiTotalAmount + this.YourSizePrice
        this.ChoseItemList[n].classList.add("actived")
        this.designShowActive(0)
    },
      designChooseSquid(n) {
        this.designShowActive(index = n)
        console.log(n)
      },
      designShowActive(n) {
        this.YourFlexiTotalAmount = this.YourFlexiTotalAmount -this.designPrice
        for (let i = 0; i < this.designChooseList.length; i++) {
          this.designChooseList[i].classList.remove("actived")
          this.infoDesign[0].classList.remove("actived")
        }
        this.designChooseList[n].classList.add("actived")
        if (n == 0) {
          this.designPrice = 0
          this.YourFlexiDesign = 'None'
        }
        if (n == 1) {
          this.grapic=true
             // Get the modal
        var modal = document.getElementById("myModal");
        // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            
            // When the user clicks the button, open the modal 
            console.log(modal)
            modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
          this.infoDesign[0].classList.add("actived")
          this.designPrice = 45
          this.YourFlexiDesign = 'Graphic support'
        }
        this.YourFlexiTotalAmount = this.YourFlexiTotalAmount + this.designPrice
    },
    saveCommande() {
      this.proposition = true
      this.visuel = false,
        this.grapic = false
          let data ="Flexi"
        localStorage.setItem("CustomiseTitle", data)

        let commande= {
          nameProduct: data,
          sizeProduct: this.YourFlexisize,
          designProduct: this.YourFlexiDesign,
          cutProduct:"",
          quantityProduct: this.YourFlexiQuantity,
          extraProduct:"",
          totalAmountProduct:this.YourFlexiTotalAmount
        }

        if (commande.sizeProduct != '' && commande.totalAmountProduct != '') {
           // Get the modal
        var modal = document.getElementById("myModal");
        // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            
            // When the user clicks the button, open the modal 
            console.log(modal)
            modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
      } else {
        alert("Veillez selectionner une taille")
      }
      localStorage.setItem('commande',JSON.stringify(commande))
    },
    startNew() {
         window.location = "../../../customiser2.html"
      },
    useAgain() {
      this.visuel = true
      this.proposition=false
    }
  },
    mounted() {
      this.ChoseItemList = document.querySelectorAll(".sizeKitContainer");
      console.log(this.ChoseItemList)
      this.designChooseList = document.querySelectorAll('.designKitContainer')
      console.log(document.querySelector(".select-box__current"))
      localStorage.setItem('oldTotalFlexi',JSON.stringify(this.initialQuatity))
      console.log(this.designChooseList)
      this.quantityChooseList = document.querySelectorAll(".select-box__input")
      console.log(this.quantityChooseList)
      this.infoDesign = document.querySelectorAll(".infoDesign")
      localStorage.setItem('oldTotal',JSON.stringify(this.initialQuatity))
      console.log(this.infoDesign)
       this.resumeChooseList = document.querySelectorAll(".contentLinkItem")
      this.resumeShowActive(this.index =0)
      this.itemToShow = 'overview'
   }
  })
