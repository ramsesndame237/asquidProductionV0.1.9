var app = new Vue({
    el: '#rearSquid',
    data: {
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
            {id:'10',value:"Toyota"},
        ],
        YearList: [],
        dropChoose:false,
        modelChooseList: [
            {id:'1',value:'Sprinter'}
      ],
        ToShow:false,
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
          YourColorSelectContainer:[],
        sizeChooseList: [],
      designChooseList: [],
        baseUri:'http://localhost:3350/api/',
        kitQuantity: [
        {
          id:'1',quantity:'1 RearSquid',value:"1"
        },
         {
          id:'2',quantity:'2 RearSquid',value:"2"
        },
          {
          id:'3',quantity:'3 RearSquid',value:"3"
        },
           {
          id:'4',quantity:'4 RearSquid',value:"4"
        },
        {
          id:'5',quantity:'5 RearSquid',value:"5"
        },

      ],
        YourRearDesign:'',
        YourRearSize: '',
      YourModelChoose: '',
      YourCarColor: "",
        YourBrandChoose: '',
      YourYearChoose: '',
      YeardropChoose: false,
      proposition: false,
      commande:[],
      visuel: false,
      grapic:false,
        dropChoose: false,
        dropModelChoose: false,
        dropChooseYear: false,
        resumeChooseList: [],
        quantityRearSquid: '1',
        YourRearQuantity:'1 RearSquid',
        itemToShow: "",
        itemToTextShow: '',
        sizePrice: 0,
        designPrice: 0,
        totalAmount:0,
    },
    methods: {
     removeItemQuantity(itemId, value) {
        console.log(itemId)
        console.log(value)
          this.YourRearQuantity = itemId
        if (JSON.parse(localStorage.getItem('oldTotalrear') != 'null' && localStorage.getItem('oldTotalrear')).length > 0) {
          let oldValue = JSON.parse(localStorage.getItem('oldTotalrear'))
          this.totalAmount = this.totalAmount / parseInt(oldValue)
          setTimeout(() => {
            this.totalAmount = this.totalAmount * parseInt(value)
            localStorage.setItem("oldTotalrear", JSON.stringify(value))
          }, 300);
        } else {
          this.totalAmount = this.totalAmount * parseInt(value)
          localStorage.setItem("oldTotalrear", JSON.stringify(value))
        }
            this.dropChoose = false
      },
        removeItem(itemId) {
            console.log(itemId)
            this.YourBrandChoose = itemId
            this.dropChoose = false
        },
         brandItem(itemId, value) {
         console.log(itemId)
            this.YourBrandChoose = itemId
            this.dropChoose = false
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
        ShowActive(n) {
            this.RearShowActive((this.index = n));
            console.log(n);
        },
        RearShowActive(n) {
            this.removeItemQuantity(this.kitQuantity[0].quantity,this.kitQuantity[0].value)
            for (var i = 0; i < this.sizeChooseList.length; i++) {
                this.sizeChooseList[i].classList.remove("Acitve")
            }
            if (n == 0) {
                console.log(n)
                this.YourRearSize = 'Size M "800 x 250 mm"  '
                this.sizePrice = 49
                this.itemToTextShow = ''
                let dataSize = {
                    width: "800",
                    height: "250"
                }
                localStorage.setItem("customizerSize", JSON.stringify(dataSize))
                this.totalAmount = this.sizePrice
            } else if (n == 1) {
                console.log(n)
                this.sizePrice = 69
                this.itemToTextShow = ''
                this.YourRearSize = 'Size L "950 x 300 mm"  '
                let dataSize = {
                    width: "950",
                    height: "300"
                }
                localStorage.setItem("customizerSize", JSON.stringify(dataSize))
                this.totalAmount = this.sizePrice
            } else if (n == 2) {
              this.sizePrice = 199
              this.ToShow = true
                           var modal = document.getElementById("myModal");
                  // Get the <span> element that closes the modal
                      var span = document.querySelector(".close");
                      
                      // When the user clicks the button, open the modal 
                      console.log(span)
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
              setTimeout(() => {
                  modal.style.display = "none";
              }, 5000);
                console.log(n)
                this.YourRearSize = 'All window'
                let dataSize = {
                    width: "600",
                    height: "200"
                }
                localStorage.setItem("customizerSize", JSON.stringify(dataSize))
                this.itemToTextShow = 'AllWindow'

                setTimeout(() => {
                    this.itemToTextShow = 'AllWindowcar'
                }, 5000);
                this.totalAmount = this.sizePrice

            }

            this.sizeChooseList[n].classList.add("Acitve");
            this.RearDesignShowActive(0)
        },
        DesignChoose(n) {
            this.RearDesignShowActive(this.indx = n);
            console.log(n)
        },
      RearDesignShowActive(n) {
        this.removeItemQuantity(this.kitQuantity[0].quantity,this.kitQuantity[0].value)
          this.totalAmount = this.totalAmount - this.designPrice
            for (var i = 0; i < this.designChooseList.length; i++) {
                this.designChooseList[i].classList.remove("Acitve")
            }
            if (n == 0) {
              this.YourRearDesign = 'None'
              this.designPrice =0
            } else if (n == 1) {
              this.YourRearDesign = 'Graphic design'
              this.designPrice = 45
                this.totalAmount = this.totalAmount + this.designPrice
            }
            this.designChooseList[n].classList.add("Acitve")

        },
       saveCommande() {
        this.proposition = true
        this.ToShow = false
          let data ="Rear"
        localStorage.setItem("CustomiseTitle", data)

        let commande= {
          nameProduct: data,
          sizeProduct: this.YourRearSize,
          designProduct: this.YourRearDesign,
          cutProduct:this.YourCut,
          quantityProduct: this.YourRearQuantity,
          extraProduct:"",
          totalAmountProduct:this.totalAmount
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

      let product = {
        nameProduct: "Rear Squid",
        sizeProduct: this.Yoursize,
        designProduct: this.YourDesign,
        cutProduct: this.YourCut,
        quantityProduct: this.YourQuantity,
        extraProduct: this.YourExtraToSave,
        carInformation: {
          carBrand: this.YourBrandChoose,
          carModel: this.YourModelChoose,
          carColor: this.YourCarColor,
          moreInfo:this.MoreInfo
        },
        total:this.YourTotal
      }
      console.log(product)
      var oldItems = JSON.parse(localStorage.getItem('TheProduct')) || [];
      oldItems.push(product)
      localStorage.setItem('TheProduct', JSON.stringify(oldItems));
      window.location = "../../../customiser2.html"

      
    },
     useAgain() {
       this.proposition = false
       this.visuel = true
       console.log("resquest")
       api.get(this.baseUri + "commandes").then((response) => {
         console.log(response)
         this.commande = response.data
       }).catch((error) => {
         console.log(error)
       })
      },
      custo(items) {
        localStorage.setItem("VisualToUseAgain", JSON.stringify(items))
        localStorage.setItem("useAgain",true)
     }
    },
    mounted() {
        this.resumeChooseList = document.querySelectorAll(".contentLinkItem")
        this.sizeChooseList = document.querySelectorAll(".sizeRearContainer")
      this.designChooseList = document.querySelectorAll(".containerDesignRearSquid")
      this.YourColorSelectContainer = document.querySelectorAll(".colorToSelect")
        console.log(this.designChooseList)
        localStorage.setItem('oldTotalrear', JSON.stringify(this.quantityRearSquid))
        this.resumeShowActive(this.index = 0)
      this.itemToShow = 'overview'
          let currentYear = new Date().getFullYear();
            let earliestYear = 1870;

        while (currentYear >= earliestYear) {
                this.YearList.push(currentYear)
                currentYear -= 1;
        }
         
      for (let i = 0; i < this.YourColorSelectContainer.length; i++) {
        this.YourColorSelectContainer[i].style.background = this.colorChooseList[i].value
      }
    },
  })