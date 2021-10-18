var app = new Vue({
    el: '#flexiSquid',
    data: {
    ChoseItemList: [],
    designChooseList: [],
    quantityChooseList:[],
      resumeChooseList: [],
      infoDesign: [],
      YearList:[],
    index: 0,
      indx: 0,
      dropChoose: false,
      visuel: false,
      proposition: false,
      reset:false,
      YeardropChoose: false,
      dropModelChoose: false,
      // baseUri:'https://adsquid.herokuapp.com/api/',
      baseUri:'http:0.0.0.0:8080/api/',
      grapic:false,
      YourFlexisize: "",
       YourCarColor: "",
      YourCarModel: "",
      YourBrandChoose: '',
      YourYearChoose:'',
      MoreInfo:"",
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
          brandChooseList: [
            {id:'1',value:"Mercedes-Benz"},
            {id:'2',value:"Peugeot"},
            {id: '3', value:"Citroen"},
            {id:'4',value:"Jeep"},
            {id:'5',value:"Nissan"},
            {id:'6',value:"Suzuki"},
            {id:'7',value:"Hundai"},
            {id:'8',value:"Audi"},
            {id:'9',value:"Opel"},
            {id: '10',value: "Toyota" },
            {id:'11',value:"Holden"}
      ],
        colorChooseList: [
            {id:'0',value:"#000000"},
            {id:'1',value:"#696969 "},
            {id: '2', value:"#c0c0c0"},
            {id:'3',value:"#778899"},
            {id:'4',value:"#ffffff"},
            {id:'5',value:"#000080"},
            {id:'6',value:"#ff0000"},
            {id:'7',value:"#f5f5dc"},
            {id:'8',value:"#8b4513"},
            {id: '9',value: "#556b2f" },
            {id:'10',value:"#ffff00"},
          { id: '11', value: "#800080" },
            {id:'12',value:"#ffa500"}
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
      this.quantite = value
      dropModelChoose: false,
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
     chooseColor(itemId) {
        console.log(itemId)
        this.YourCarColor = itemId.value
        document.querySelector(".colorToChoose").style.background = itemId.value
        for (let i = 0; i < this.YourColorSelectContainer.length; i++) {
          this.YourColorSelectContainer[i].classList.remove("selectedColor")
        }
        this.YourColorSelectContainer[itemId.id].classList.add("selectedColor")
        this.dropModelChoose = false
    },
       brandItem(itemId, value) {
        console.log(itemId)
        console.log(value)
            this.YourBrandChoose = itemId
            this.dropChoose = false
    },
        YearItem(itemId) {
        this.YourYearChoose = itemId
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
      this.reset = true
        this.YourFlexiTotalAmount = this.YourFlexiTotalAmount - this.YourSizePrice
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
          this.grapic = false
        }
        if (n == 1) {
            this.grapic=true
              // Get the modal
          var modal = document.getElementById("myModal");
          // Get the <span> element that closes the modal
              var span = document.querySelector(".close");
              
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
      if (window.localStorage.getItem("userInfomation") != null && window.localStorage.getItem("userInfomation").length > 0) {
        if (commande.sizeProduct != '' && commande.totalAmountProduct != '') {
           // Get the modal
        var modal = document.getElementById("myModal");
        // Get the <span> element that closes the modal
            var span = document.querySelector("close");
            
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
      } else {
                if (commande.sizeProduct != '' && commande.totalAmountProduct != '') {
                  this.startNew()
          } else {
            alert("Veillez selectionner une taille")
          }
      }

        
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
      this.YourColorSelectContainer = document.querySelectorAll(".colorToSelect")
      console.log(this.YearList)
      let currentYear = new Date().getFullYear();
            let earliestYear = 1990;

        while (currentYear >= earliestYear) {
                this.YearList.push(currentYear)
                currentYear -= 1;
            }
      
      for (let i = 0; i < this.YourColorSelectContainer.length; i++) {
        this.YourColorSelectContainer[i].style.background = this.colorChooseList[i].value
      }
   }
  })
