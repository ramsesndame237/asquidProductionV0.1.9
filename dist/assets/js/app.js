var app = new Vue({
    el: '#kitSquid',
  data: {
      messageReceive:0,
    ChoseItemList: [],
    choseCutList:[],
    extraChooseList:[],
    designChooseList:[],
    resumeChooseList: [],
    // baseUri:'https://adsquid.herokuapp.com/api/',
    baseUri:'http:0.0.0.0:8800/api/',
    info: [],
      infoCut: [],
    infoDesign:[],
    index: 0,
      indx: 0,
      dropChoose: false,
      numberOfProduct: '0',
      dropModelChoose: false,

      YeardropChoose:false,
      tmp: false,
      ToShow: false,
      extratoshow:false,
      cutLettering: false,
      proposition: false,
      reset: false,
      grapic:false,
      visuel:false,
      NoExtra: true,
      largeExtraPrice: 0,
      oneWayPrice: 0,
      hoodPrice:0,
      CutPrice: 0,
      extraPrice: 0,
      designPrice: 0,
      sizePrice:0,
      Yoursize: "",
      YourCarColor: "",
      YourCarModel: "",
      MoreInfo:"",
    dimensionKit: "600 x 200",
    houdSize: "",
    rearLargeSize: "",
    oneWaySize:"",
      YourCut:"Rectangular",
        YourExtra: [],
        YourExtraToSave:[],
        YourColorSelectContainer:[],
      NoneExtra:'None',
      YourDesign:"Normal",
        YourQuantity: "1 kit Squid",
      YourYearChoose:'',
      YourBrandChoose: '',
      initialQuatity:'1',
      YearList:[],
      YourTotal:0,
      itemToShow: "",
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
      kitSize: [
        {
         id:"0",nomSize:'XS',dimension:'600 x 200',image:'../dist/assets/images/Size/Car_Stickers_XS.png'
        },
         {
         id:"1",nomSize:'S',dimension:'900 x 300',image:'../dist/assets/images/Size/Car_Stickers_S.png'
        },
          {
         id:"2",nomSize:'M',dimension:'1,200 x 400',image:'../dist/assets/images/Size/Car_Stickers_M.png'
        },
           {
         id:"3",nomSize:'L',dimension:'1,500 x 500',image:'../dist/assets/images/Size/Car_Stickers_L.png'
        },
            {
         id:"4",nomSize:'XL',dimension:'2,000 x 600',image:'../dist/assets/images/Size/Car_Stickers_XL.png'
        },
     ],
   kitCut:[],
      KitExtra: [],
      KitDesign: [
        {
          id:'0',nomDesign:'Normal',image:'../dist/assets/images/Page produit/Design_normal.png'
        },
        {
          id:'1',nomDesign:'Symmetric',image:'../dist/assets/images/Page produit/Design_symmetric.png'
        },
        {
          id:'2',nomDesign:'Graphic support',image:'../dist/assets/images/Page produit/Design_assist.png'
        }
      ],
      kitQuantity: [
        {
          id:'1',quantity:'1 kit Squid',value:"1"
        },
         {
          id:'2',quantity:'2 kit Squid',value:"2"
        },
          {
          id:'3',quantity:'3 kit Squid',value:"3"
        },
           {
          id:'4',quantity:'4 kit Squid',value:"4"
        },
        {
          id:'5',quantity:'5 kit Squid',value:"5"
        },

      ],
      theQuantitySticker:2,
      product: {
        photoProduit: "",
        tagProduit: "",
        description: "",
        price:""
      }
  },
    methods: {
      removeItem(itemId, value) {
        console.log(itemId)
        console.log(value)
        this.theQuantitySticker = value * 2
        this.initialQuatity = value
          this.YourQuantity = itemId
        if (JSON.parse(localStorage.getItem('oldTotal') != 'null' && localStorage.getItem('oldTotal')).length > 0) {
          let oldValue = JSON.parse(localStorage.getItem('oldTotal'))
          this.YourTotal = this.YourTotal / parseInt(oldValue)
          setTimeout(() => {
            this.YourTotal = this.YourTotal * parseInt(value)
            localStorage.setItem("oldTotal", JSON.stringify(value))
          }, 300);
        } else {
          this.YourTotal = this.YourTotal * parseInt(value)
          localStorage.setItem("oldTotal", JSON.stringify(value))
        }
            this.dropChoose = false
      },
      brandItem(itemId, value) {
        console.log(itemId)
        console.log(value)
            this.YourBrandChoose = itemId
            this.dropChoose = false
      },
      chooseColor(itemId) {
        this.YourCarColor = itemId.value
        console.log(itemId)

        if (this.ToShow) {
          document.querySelector(".colorToChoose").style.background = itemId.value
          for (let i = 0; i < this.YourColorSelectContainer.length; i++) {
            this.YourColorSelectContainer[i].classList.remove("selectedColor")
          }
          this.YourColorSelectContainer[itemId.id].classList.add("selectedColor")
          
        } else {
          document.querySelector(".YourColorGraphic").style.background = itemId.value

          for (let i = 0; i < this.YourColorSelectContainerGraphic.length; i++) {
            this.YourColorSelectContainerGraphic[i].classList.remove("selectedColor")
          }
            this.YourColorSelectContainerGraphic[itemId.id].classList.add("selectedColor")

        }
        this.dropModelChoose = false
      },
      YearItem(itemId) {
        this.YourYearChoose = itemId
      },
      resumeChoose(n) {
            this.resumeShowActive(this.indx = n)
            console.log(n)
      },
      resumeShowActive(n) {
            for (var i = 0; i < this.resumeChooseList.length; i++) {
                this.resumeChooseList[i].classList.remove("active")
            }

            this.resumeChooseList[n].classList.add("active")
      },
      noneExtraChoose(n) {
          this.noneExtraShowActive(this.index = n)
      },
      noneExtraShowActive(n) {
            this.ToShow=false
        for (let i = 0; i < this.extraChooseList.length; i++) {
            this.extraChooseList[i].classList.remove("actived")
        }
        if (this.reset) {
          console.log("ookay")
        } else {
          if (this.largeExtraPrice > 0 || this.hoodPrice > 0 || this.extraPrice > 0) {
             this.YourTotal = this.YourTotal - (this.largeExtraPrice + this.hoodPrice + this.oneWayPrice)
            console.log((this.largeExtraPrice + this.hoodPrice + this.extraPrice))
            this.largeExtraPrice = 0
            this.hoodPrice = 0
            this.oneWayPrice = 0
          } else {
            this.YourTotal = this.YourTotal +  this.largeExtraPrice + this.hoodPrice + this.oneWayPrice 
          }
        }
        // for (let index = 0; index < this.noneExtra.length; index++) {
        //     this.nomExtra[index].classList.remove("actived")
        // }
        if (this.noneExtra[n].classList.contains("actived")) {
          this.noneExtra[n].classList.remove("actived")
        }
        this.noneExtra[n].classList.add("actived")
        this.YourExtra = []
        this.YourExtraToSave = []
        this.NoExtra = true
        this.extraPrice =0
      },
      withExtraChoone(n) {
        this.withExtraShowActive(index =n)
        console.log(n)
      },
      withExtraShowActive(n, item) {
        this.NoExtra = false
        this.reset = false
        this.noneExtra[0].classList.remove("actived")
        if (this.extraChooseList[n].classList.contains("actived")) {
            this.info[n].classList.remove("actived")
          var id = item.id
          
          this.YourExtra = this.YourExtra.filter(x => {
            return x.id != id;
          })
          if (this.YourExtra.length > 1) {
            this.tmp = true
            for (let i = 0; i < this.YourExtra.length; i++) {
              this.YourExtraToSave = []
              this.YourExtraToSave.push(this.YourExtra[i].nomExtra)
            }
          } else {
            console.log(this.YourExtra)
            this.YourExtraToSave = []
            if (this.YourExtra.length > 0) {
              this.YourExtraToSave.push(this.YourExtra[0].nomExtra)
            } else {
              this.YourExtraToSave = []
              this.noneExtra[0].classList.add("actived")
              this.YourExtra = []
              this.NoExtra = true
              this.extraPrice = 0
            }
            this.tmp = false
            console.log(this.YourExtraToSave)
          }
          this.extraChooseList[n].classList.remove("actived")
          this.info[n].classList.remove("actived")
          if (n == 0) {
            if (this.Yoursize == 'Size XS "600 x 200 mm"' || this.Yoursize == 'Size S "900 x 300 mm"') {
                  this.largeExtraPrice = -25
                  this.YourTotal = this.YourTotal + this.largeExtraPrice
              
            } else if (this.Yoursize == 'Size L "1,500 x 500 mm"' || this.Yoursize == 'Size XL "2,000 x 600 mm"') {
              this.largeExtraPrice = -89
            this.YourTotal = this.YourTotal + this.largeExtraPrice
            } else if (this.Yoursize == 'Size M "1,200 x 400 mm') {
              this.largeExtraPrice= -49
              this.YourTotal = this.YourTotal + this.largeExtraPrice
            }
          } else if (n == 1) {
            this.oneWayPrice = -199
            this.YourTotal = this.YourTotal + this.oneWayPrice
            this.ToShow=false
          } else if (n == 2) {
            if (this.Yoursize == 'Size XS "600 x 200 mm"' || this.Yoursize == 'Size S "900 x 300 mm"' || this.Yoursize == 'Size M "1,200 x 400 mm') {
                  this.hoodPrice = -25
                  this.YourTotal = this.YourTotal + this.hoodPrice
            } else if (this.Yoursize == 'Size L "1,500 x 500 mm"' || this.Yoursize == 'Size XL "2,000 x 600 mm"') {
              this.hoodPrice=-49
              this.YourTotal = this.YourTotal + this.hoodPrice
                  
            } 
            
          }
          // this.YourTotal = this.YourTotal + this.extraPrice
        } else {
            this.extraChooseList[n].classList.add("actived")
            this.info[n].classList.add("actived")
          this.YourExtra.push(item)
          this.YourExtraToSave.push(item.nomExtra)
          console.log(this.YourExtraToSave)
          if (n == 0) {
            if (this.Yoursize == 'Size XS "600 x 200 mm"' || this.Yoursize == 'Size S "900 x 300 mm"') {
                  this.largeExtraPrice = 25
              this.YourTotal = this.YourTotal + this.largeExtraPrice
              if (this.Yoursize == 'Size XS "600 x 200 mm"') {
                this.rearLargeSize ="600 x 200 "
              }else{
                this.rearLargeSize ="900 x 300"
              }
            } else if (this.Yoursize == 'Size L "1,500 x 500 mm"' || this.Yoursize == 'Size XL "2,000 x 600 mm"') {
              this.largeExtraPrice = 89
                  this.YourTotal = this.YourTotal + this.largeExtraPrice
                  this.rearLargeSize ="1,200 x 400 "
            } else if (this.Yoursize == 'Size M "1,200 x 400 mm') {
              this.largeExtraPrice = 49
              this.YourTotal = this.YourTotal + this.largeExtraPrice
              this.rearLargeSize ="1,200 x 400 "
              this.houdSize ="600 x 200"
            }
            
            }
          if (n == 1) {
              this.oneWayPrice = 199
              this.YourTotal = this.YourTotal +  this.oneWayPrice
            this.ToShow = true
            this.extratoshow = true
              this.grapic = false
            
                          var modal = document.getElementById("myModal");
              modal.style.display = "block";
              setTimeout(() => {
                // Get the <span> element that closes the modal
                    var span = document.querySelector(".close");
                    
                    // When the user clicks the button, open the modal 
                    console.log(span)

                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                  modal.style.display = "none";
                }
                
              }, 500);

                  // When the user clicks anywhere outside of the modal, close it
                  window.onclick = function(event) {
                  if (event.target == modal) {
                      modal.style.display = "none";
                  }
              }
              setTimeout(() => {
                  modal.style.display = "none";
              }, 5000);
            } if (n == 2) {
              if (this.Yoursize == 'Size XS "600 x 200 mm"' || this.Yoursize == 'Size S "900 x 300 mm"' || this.Yoursize == 'Size M "1,200 x 400 mm') {
                this.hoodPrice = 25
                 this.houdSize = "600 x 200"
              console.log("this.houdSize")
                  this.YourTotal = this.YourTotal +this.hoodPrice
              } else if (this.Yoursize == 'Size L "1,500 x 500 mm"' || this.Yoursize == 'Size XL "2,000 x 600 mm"') {
                this.hoodPrice = 49
                  this.YourTotal = this.YourTotal + this.hoodPrice
                } 
            }
            // this.YourTotal = this.extraPrice + this.YourTotal
        }
      },
      sizeChooseSquid(n) {
        this.sizeShowActive(index = 0)
        console.log(n)
      },
      sizeShowActive(n) {
        this.reset = true
        if (this.sizePrice > 0) {
          this.YourTotal = this.YourTotal - this.sizePrice
        } else {
          this.YourTotal = 0
            }
          for (let i = 0; i < this.ChoseItemList.length; i++) {
              this.ChoseItemList[i].classList.remove("actived")
              this.CutPrice = 0
            this.designPrice = 0
            this.YourTotal =0
        }
         if (n == 0) {
            this.Yoursize ='Size XS "600 x 200 mm"'
            let dataSize={
              width:"600",
              height:"200"
           }
           this.sizePrice = 49
           this.dimensionKit = "600 x 200"
            localStorage.setItem("customizerSize",JSON.stringify(dataSize))
        }else if(n == 1){
            this.Yoursize ='Size S "900 x 300 mm"'
            let dataSize={
              width:"900",
              height:"300"
           }
           this.dimensionKit = "900 x 300"
           this.sizePrice = 99
            localStorage.setItem("customizerSize",JSON.stringify(dataSize))
        }else if(n== 2){
           this.Yoursize = 'Size M "1,200 x 400 mm"'
           this.dimensionKit = "1 200 x 400"
            let dataSize={
              width:"1,200",
              height:"400"
           }
           this.sizePrice = 169  
            localStorage.setItem("customizerSize",JSON.stringify(dataSize))
        }else if(n==3){
           this.Yoursize = 'Size L "1,500 x 500 mm"'
           this.dimensionKit =" 1 500 x 500"
            let dataSize={
              width:"1,500",
              height:"500"
           }
           this.sizePrice = 269
           localStorage.setItem("customizerSize", JSON.stringify(dataSize))
        }else if (n==4) {
           this.Yoursize = 'Size XL "2,000 x 600 mm"'
           this.dimensionKit =" 2 000 x 600"
            let dataSize={
              width:"2,000",
              height:"600"
           }
           this.sizePrice = 399
            localStorage.setItem("customizerSize",JSON.stringify(dataSize))
        }

        if (this.CutPrice > 0 || this.extraPrice > 0 || this.hoodPrice > 0 || this.largeExtraPrice > 0 || this.oneWayPrice > 0 || this.designPrice > 0) {
          this.YourTotal =0
        }
        this.YourTotal = this.YourTotal + this.sizePrice

        this.ChoseItemList[n].classList.add("actived")
         this.cutShowActive(0)
         this.designShowActive(0)
         this.noneExtraShowActive(0)
      },
      cutChooseSquid(n) {
        this.cutShowActive(index = n)
        console.log(n)
      },
      cutShowActive(n) {
        let guideLine = document.querySelector(".guideLineSaveAre")
          let internalGuideline = document.querySelector(".safeAreZone")
        this.YourTotal = this.YourTotal - this.CutPrice
        for (let i = 0; i < this.choseCutList.length; i++) {
          this.choseCutList[i].classList.remove("actived")
          this.infoCut[0].classList.remove("actived")
          this.infoCut[0].classList.remove("infoActived")
        }
        if (n == 0) {
          this.YourCut = 'Rectangular'
          localStorage.setItem("cutCustomizer",this.YourCut)
          if (this.Yoursize == 'Size XS "600 x 200 mm"') {
            this.CutPrice = 0
          } else if (this.Yoursize == 'Size S "900 x 300 mm"') {
            this.CutPrice =0
          } else if (this.Yoursize == 'Size M "1,200 x 400 mm') {
            this.CutPrice =0
          } else if (this.Yoursize == 'Size L "1,500 x 500 mm"') {
            this.CutPrice =0
          } else if (this.Yoursize == 'Size XL "2,000 x 600 mm"') {
            this.CutPrice = 0
          }
           if (guideLine.classList.contains("roundedActivated")) {
            guideLine.classList.remove("roundedActivated")
            internalGuideline.classList.remove("roundedActivated")
           } else {
             console.log("okay")
          }
        }
        else if (n == 1) {
          this.YourCut = 'Round'
          localStorage.setItem("cutCustomizer",this.YourCut)
          if (this.Yoursize == 'Size XS "600 x 200 mm"') {
            this.CutPrice = 20
          } else if (this.Yoursize == 'Size S "900 x 300 mm"') {
            this.CutPrice =20
          } else if (this.Yoursize == 'Size M "1,200 x 400 mm') {
            this.CutPrice =30
          } else if (this.Yoursize == 'Size L "1,500 x 500 mm"') {
            this.CutPrice =40
          } else if (this.Yoursize == 'Size XL "2,000 x 600 mm"') {
            this.CutPrice = 50
          }

            guideLine.classList.add("roundedActivated")
            internalGuideline.classList.add("roundedActivated")
        }
        else if (n == 2) {

          this.cutLettering = !this.cutLettering
          this.YourCut = 'Lettering'
          localStorage.setItem("cutCustomizer",this.YourCut)
          if (this.Yoursize == 'Size XS "600 x 200 mm"') {
            this.CutPrice = 20
          } else if (this.Yoursize == 'Size S "900 x 300 mm"') {
            this.CutPrice =20
          } else if (this.Yoursize == 'Size M "1,200 x 400 mm') {
            this.CutPrice =30
          } else if (this.Yoursize == 'Size L "1,500 x 500 mm"') {
            this.CutPrice =40
          } else if (this.Yoursize == 'Size XL "2,000 x 600 mm"') {
            this.CutPrice = 50
          }
           if (guideLine.classList.contains("roundedActivated")) {
            guideLine.classList.remove("roundedActivated")
            internalGuideline.classList.remove("roundedActivated")
          }

          setTimeout(() => {
            this.cutLettering =false
          }, 2500);
          this.infoCut[0].classList.add("actived")
          this.infoCut[0].classList.add("infoActived")

        }
        this.YourTotal = this.YourTotal + this.CutPrice
        this.choseCutList[n].classList.add("actived")
      },
      designChooseSquid(n) {
        this.designShowActive(index = n)
        console.log(n)
      },
      designShowActive(n) {
        this.YourTotal = this.YourTotal -this.designPrice
        for (let i = 0; i < this.designChooseList.length; i++) {
          this.designChooseList[i].classList.remove("actived")
          this.infoDesign[i].classList.remove("actived")
          this.infoDesign[i].classList.remove("infoActived")
        }
        this.designChooseList[n].classList.add("actived")
        this.infoDesign[n].classList.add("actived")
        this.infoDesign[n].classList.add("infoActived")
        if (n == 0) {
          this.designPrice = 0
          this.YourDesign = 'Normal'
        }
        if (n == 1) {
          this.designPrice = 15
          this.YourDesign = 'Symmetric'
        }
        if (n == 2) {
          this.grapic = true
          this.proposition = false
          this.extratoshow = false
              // this.ToShow = false
          this.designPrice = 45
          this.YourDesign = 'Graphic support'
             var modal = document.getElementById("myModal");
                  modal.style.display = "block";
                  setTimeout(() => {
                    // Get the <span> element that closes the modal
                      var span = document.querySelector(".close");
                      
                      // When the user clicks the button, open the modal 
                          console.log(modal)

                      // When the user clicks on <span> (x), close the modal
                      span.onclick = function() {
                        modal.style.display = "none";
                      }

                  }, 500);
                  // When the user clicks anywhere outside of the modal, close it
                  window.onclick = function(event) {
                  if (event.target == modal) {
                      modal.style.display = "none";
                  }
                  }
        }
        this.YourTotal = this.YourTotal + this.designPrice
      },
      saveCommande() { 
        this.proposition = true
        this.ToShow = false
          let data ="Kit"
        localStorage.setItem("CustomiseTitle", data)

        let commande= {
          nameProduct: data,
          sizeProduct: this.Yoursize,
          designProduct: this.YourDesign,
          cutProduct:this.YourCut,
          quantityProduct: this.YourQuantity,
          extraProduct:this.YourExtraToSave,
          totalAmountProduct:this.YourTotal
        }
        if (window.localStorage.getItem("userInfomation") != null && window.localStorage.getItem("userInfomation").length > 0) {
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
                 localStorage.setItem('commande',JSON.stringify(commande))
                    
              } else {
                alert("Veillez selectionner une taille")
              }
                        
       } else {
           this.startNew()    
        }

      
    },
    startNew() {

      let product = {
        nameProduct: "Kit",
        sizeProduct: this.Yoursize,
        designProduct: this.YourDesign,
        cutProduct: this.YourCut,
        quantityProduct: this.YourQuantity,
        extraProduct: this.YourExtraToSave,
        carInformation: {
          carBrand: this.YourBrandChoose,
          carModel: this.YourCarModel,
          carColor: this.YourCarColor,
          moreInfo:this.MoreInfo
        },
        totalAmountProduct:this.YourTotal
      }
      console.log(product)
      var oldItems = JSON.parse(localStorage.getItem('TheProduct')) || [];
      oldItems.push(product)
      localStorage.setItem('TheProduct', JSON.stringify(oldItems));
      localStorage.setItem('commande',JSON.stringify(product))
      window.location = "../../../customiser2.html"

      
    },
     useAgain() {
       this.proposition =false
      },
      downloadZip() {
        var zip = new JSZip();
        var folder =zip.folder("Guidline")
        console.log(folder)
        folder.file("../../assets/images/Test_Guideline/FlexiSquid_800x250mm/Plexi-pub-800x250.ai"); //requires filesaver.js
        folder.file("myfile2.txt");
          zip.generateAsync({type:"blob"})
               .then(function(content) {
                //see FileSaver.js
                saveAs(content, "Guidline.zip");
      });

     }

  },
    mounted() {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
         window.location.href = "../../phoneHome.html"
       }else{
            this.resumeChooseList = document.querySelectorAll(".contentLinkItem")
            localStorage.setItem('oldTotal',JSON.stringify(this.initialQuatity))
            this.choseCutList = document.querySelectorAll(".cutKitContainer")
            this.noneExtra = document.querySelectorAll(".noneExtra")
            this.extraChooseList = document.querySelectorAll(".withExtra")
            this.info = document.querySelectorAll(".infoExtra")
            this.infoCut = document.querySelectorAll(".infoCut")
            this.infoDesign = document.querySelectorAll(".infoDesign")
            this.ChoseItemList = document.querySelectorAll(".sizeKitContainer");
            this.designChooseList = document.querySelectorAll(".designKitContainer")
            this.YourColorSelectContainer = document.querySelectorAll(".colorToSelect")
            this.YourColorSelectContainerGraphic = document.querySelectorAll(".colorToSelectGraphic")
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
            for (let i = 0; i < this.YourColorSelectContainerGraphic.length; i++) {
              this.YourColorSelectContainerGraphic[i].style.background = this.colorChooseList[i].value
            }
            console.log(this.infoCut)
              this.resumeShowActive(this.index = 0)
            this.itemToShow = 'overview'
            api.get( this.baseUri + "cuts").then((response)=>{
              console.log(response)
            }).catch((error)=>{
              console.log(error)
            })

       }
    },
   
  })
