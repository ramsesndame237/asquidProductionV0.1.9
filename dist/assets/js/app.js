var app = new Vue({
    el: '#kitSquid',
    data: {
    ChoseItemList: [],
    choseCutList:[],
    extraChooseList:[],
    designChooseList:[],
    resumeChooseList: [],
    index: 0,
      indx: 0,
      dropChoose: false,
      NoExtra: true,
      CutPrice: 0,
      extraPrice: 0,
    designPrice:0,
      Yoursize: "",
    dimensionKit:"600 x 200",
    YourCut:"Rectangular",
      YourExtra: [],
    NoneExtra:'None',
    YourDesign:"Normal",
    YourQuantity:"1 kit Squid",
    YourTotal:0,
    itemToShow: "",
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
   kitCut:[
        {
        id:'0',nomCut:'Rectangular',image:'../dist/assets/images/Page produit/Cut_rectangular.png'
        },
        {
        id:'1',nomCut:'Round',image:'../dist/assets/images/Page produit/Cut_round.png'
        },
        {
        id:'2',nomCut:'Lettering',image:'../dist/assets/images/Page produit/Cut_letering.png'
        },
      ],
      KitExtra: [
        {
       id:'0',nomExtra:'Large  Size  rear sticker',image:'../dist/assets/images/Extra/Car_Stickers_back_e.png'
        },
        {
       id:'1',nomExtra:'Rear Squid  One Way',image:'../dist/assets/images/Extra/Car_Stickers_back_ez.png'
        },
       {
       id:'2',nomExtra:'Hood sticker',image:'../dist/assets/images/Extra/Car_Stickers_hood.png'
        },
      ],
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

      ]
  },
    methods: {
      removeItem(itemId, value) {
            console.log(itemId)
        this.YourQuantity = itemId
        this.YourTotal = this.YourTotal *  parseInt(value)
        console.log(value)
            this.dropChoose = false
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
        for (let i = 0; i < this.extraChooseList.length; i++) {
            this.extraChooseList[i].classList.remove("actived")
        }
        // for (let index = 0; index < this.noneExtra.length; index++) {
        //     this.nomExtra[index].classList.remove("actived")
        // }
        if (this.noneExtra[n].classList.contains("actived")) {
          this.noneExtra[n].classList.remove("actived")
        }
        this.noneExtra[n].classList.add("actived")
        this.YourExtra = []
        this.extraPrice =0
      },
      withExtraChoone(n) {
        this.withExtraShowActive(index =n)
        console.log(n)
      },
      withExtraShowActive(n, item) {
        this.NoExtra = false
        console.log(item)
        this.noneExtra[0].classList.remove("actived")
        if (this.extraChooseList[n].classList.contains("actived")) {
          this.extraChooseList[n].classList.remove("actived")
          if (n == 0) {
                if (this.Yoursize == 'Size XS "600 x 200 mm"' || this.Yoursize == 'Size S "900 x 300 mm"') {
                 this.YourTotal = this.YourTotal - 25
              
            } else if (this.Yoursize == 'Size L "1,500 x 500 mm"' ||this.Yoursize == 'Size XL "2,000 x 600 mm"' ) {
            this.YourTotal = this.YourTotal - 89
              this.extraPrice = this.extraPrice + this.extraPrice
            } else if (this.Yoursize == 'Size M "1,200 x 400 mm') {
            this.YourTotal = this.YourTotal - 49
                  
            }
          } else if (n == 1) {
            this.YourTotal =this.YourTotal - 199
          } else if (n == 2) {
              if (this.Yoursize == 'Size XS "600 x 200 mm"' || this.Yoursize == 'Size S "900 x 300 mm"' || this.Yoursize == 'Size M "1,200 x 400 mm') {
                 this.YourTotal = this.YourTotal - 25
            } else if (this.Yoursize == 'Size L "1,500 x 500 mm"' ||this.Yoursize == 'Size XL "2,000 x 600 mm"' ) {
            this.YourTotal = this.YourTotal - 49
                
            } 
            
          }
        } else {
          this.extraChooseList[n].classList.add("actived")
          this.YourExtra.push(item)
          console.log(this.YourExtra)

          if (n == 0) {
            if (this.Yoursize == 'Size XS "600 x 200 mm"' || this.Yoursize == 'Size S "900 x 300 mm"') {
              this.extraPrice = 25
            } else if (this.Yoursize == 'Size L "1,500 x 500 mm"' ||this.Yoursize == 'Size XL "2,000 x 600 mm"' ) {
              this.extraPrice = 89
            } else if (this.Yoursize == 'Size M "1,200 x 400 mm') {
              this.extraPrice = 49
            }
          }
          if (n == 1) {
            this.extraPrice =199
          } if (n == 2) {
             if (this.Yoursize == 'Size XS "600 x 200 mm"' || this.Yoursize == 'Size S "900 x 300 mm"' || this.Yoursize == 'Size M "1,200 x 400 mm') {
              this.extraPrice = 25
            } else if (this.Yoursize == 'Size L "1,500 x 500 mm"' ||this.Yoursize == 'Size XL "2,000 x 600 mm"' ) {
              this.extraPrice = 49
            } 
            
          }

          this.YourTotal = this.extraPrice + this.YourTotal


        }
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
            this.Yoursize ='Size XS "600 x 200 mm"'
            let dataSize={
              width:"600",
              height:"200"
            }
            localStorage.setItem("customizerSize",JSON.stringify(dataSize))
        }else if(n == 1){
            this.Yoursize ='Size S "900 x 300 mm"'
            let dataSize={
              width:"900",
              height:"300"
            }
            localStorage.setItem("customizerSize",JSON.stringify(dataSize))
        }else if(n== 2){
            this.Yoursize ='Size M "1,200 x 400 mm"'
            let dataSize={
              width:"1,200",
              height:"400"
            }
            localStorage.setItem("customizerSize",JSON.stringify(dataSize))
        }else if(n==3){
            this.Yoursize ='Size L "1,500 x 500 mm"'
            let dataSize={
              width:"1,500",
              height:"500"
            }
            localStorage.setItem("customizerSize",JSON.stringify(dataSize))
        }else if (n==4) {
            this.Yoursize ='Size XL "2,000 x 600 mm"'
            let dataSize={
              width:"2,000",
              height:"600"
            }
            localStorage.setItem("customizerSize",JSON.stringify(dataSize))
        }

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
        this.YourTotal = this.YourTotal - this.CutPrice
        for (let i = 0; i < this.choseCutList.length; i++) {
          this.choseCutList[i].classList.remove("actived")
        }
        if (n == 0) {
          this.YourCut = 'Rectangular'
          localStorage.setItem("cutCustomizer",this.YourCut)
          if (this.Yoursize == 'Size XS "600 x 200 mm"') {
            this.CutPrice = 49
          } else if (this.Yoursize == 'Size S "900 x 300 mm"') {
            this.CutPrice =99
          } else if (this.Yoursize == 'Size M "1,200 x 400 mm') {
            this.CutPrice =169
          } else if (this.Yoursize == 'Size L "1,500 x 500 mm"') {
            this.CutPrice =269
          } else if (this.Yoursize == 'Size XL "2,000 x 600 mm"') {
            this.CutPrice = 399
          }
        }
        else if (n == 1) {
          this.YourCut = 'Round'
          localStorage.setItem("cutCustomizer",this.YourCut)
          if (this.Yoursize == 'Size XS "600 x 200 mm"') {
            this.CutPrice = 60
          } else if (this.Yoursize == 'Size S "900 x 300 mm"') {
            this.CutPrice =109
          } else if (this.Yoursize == 'Size M "1,200 x 400 mm') {
            this.CutPrice =189
          } else if (this.Yoursize == 'Size L "1,500 x 500 mm"') {
            this.CutPrice =299
          } else if (this.Yoursize == 'Size XL "2,000 x 600 mm"') {
            this.CutPrice = 439
          }
        }
        else if (n == 2) {
          this.YourCut = 'Lettering'
          localStorage.setItem("cutCustomizer",this.YourCut)
          if (this.Yoursize == 'Size XS "600 x 200 mm"') {
            this.CutPrice = 60
          } else if (this.Yoursize == 'Size S "900 x 300 mm"') {
            this.CutPrice =109
          } else if (this.Yoursize == 'Size M "1,200 x 400 mm') {
            this.CutPrice =189
          } else if (this.Yoursize == 'Size L "1,500 x 500 mm"') {
            this.CutPrice =299
          } else if (this.Yoursize == 'Size XL "2,000 x 600 mm"') {
            this.CutPrice = 439
          }
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
        }
        this.designChooseList[n].classList.add("actived")
        if (n == 0) {
          this.designPrice = 0
        }
        if (n == 1) {
          this.designPrice = 15
        }
        if (n == 2) {
          this.designPrice = 45
        }
        this.YourTotal = this.YourTotal + this.designPrice
      }

  },
    mounted() {
      this.resumeChooseList = document.querySelectorAll(".contentLinkItem")
      this.choseCutList = document.querySelectorAll(".cutKitContainer")
      this.noneExtra = document.querySelectorAll(".noneExtra")
      this.extraChooseList = document.querySelectorAll(".withExtra")
      this.ChoseItemList = document.querySelectorAll(".sizeKitContainer");
      this.designChooseList = document.querySelectorAll(".designKitContainer")
      console.log(this.designChooseList)
        this.resumeShowActive(this.index = 0)
      this.itemToShow = 'overview'
    },
   
  })
