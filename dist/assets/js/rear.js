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
        sizeChooseList: [],
        designChooseList: [],
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
        YourModelChoose:'',
        YourBrandChoose: '',
        YourYearChoose:'',
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
        modelItem(itemId) {
            this.dropModelChoose = false
            this.YourModelChoose = itemId
            console.log(itemId)
        },
        YearItem(itemId) {
            this.dropChooseYear = false
            console.log(itemId)
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
              let data ="Rear Squid"
            localStorage.setItem("CustomiseTitle", data)
            let commande
            if (this.YourRearSize == "All window") {

                commande = {
                nameProduct: data,
                  sizeProduct: this.YourRearSize,
                  designProduct: this.YourRearDesign,
                  cutProduct:'',
                  quantityProduct: this.YourRearQuantity,
                  extraProduct:'',
                    totalAmountProduct: this.totalAmount,
                    CarInfo: [
                        {
                            YourBrand: this.YourBrandChoose,
                            YourModel: this.YourModelChoose,
                            YourYear:this.YourYearChoose
                      }
                  ]
                }
                
            } else {
                commande= {
                  nameProduct: data,
                  sizeProduct: this.YourRearSize,
                  designProduct: this.YourRearDesign,
                  cutProduct:'',
                  quantityProduct: this.YourRearQuantity,
                  extraProduct:'',
                  totalAmountProduct:this.totalAmount
                }
            }


        if (commande.sizeProduct != '' && commande.totalAmountProduct != '') {
          window.location = "../../../customiser2.html"
        } else {
          alert("Veillez selectionner une taille")
        }
        localStorage.setItem('commande',JSON.stringify(commande))
        }
    },
    mounted() {
        this.resumeChooseList = document.querySelectorAll(".contentLinkItem")
        this.sizeChooseList = document.querySelectorAll(".sizeRearContainer")
        this.designChooseList = document.querySelectorAll(".containerDesignRearSquid")
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
    },
  })