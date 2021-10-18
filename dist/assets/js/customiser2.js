var app = new Vue({
    el: '#cutomizateurContainer',
    data: {
        titreProduct: "fdsfsdfd",
        FunctionToText:'',
        textToShowCustom:'',
        textToShow: "layout",
        background: false,
        curve:'',
        textIconShow:'',
        dowloadLogo: false,
        dropChoose:false,
        jobTipe:'',
        AddQrCode: false,
        textTools: false,
        bold:false,
        oblique:false,
        underline:false,
        showBox:false,
        justiAlign:false,
        titleZoneImport: [],
        titleZoneImportHeader:[],
        jobchoose: {
            id: "0",
            jobname: "What's is your job?",
            image:[]
        },
        IconChoose:{
            id:'0',
            title:'Choose your category',
            description:'',
            image:[]
        },
        jobChooseList: [
        ],
        ListMetier: [
             {
                id:"1",jobname:"Painter",image:[]
            },
            {
                id: "2", jobname: "Plomber", image: [
                    {
                        id: "1",
                        imageSRC:"../../../dist/assets/images/Metier/Plumber/Fotolia_7699235_M.jpg"
                    },
                    {
                        id: "2",
                        imageSRC:"../../../dist/assets/images/Metier/Plumber/Handwerker-Allrounder-5042c613.jpg"
                    },
                    {
                        id: "3",
                        imageSRC:"../../../dist/assets/images/Metier/Plumber/soleil-flocon.jpg"
                    }
                ]
            },
            {
                id:"3",jobname:"Real Estate",image:[]
            },
            {
                id:"4",jobname:"Waiter",image:[]
            },
            {
                id: "5", jobname: "Repairman", image: [
                    {
                        id: "1",
                        imageSRC:"../../../dist/assets/images/Metier/Repairman/864 (2).jpg"
                    },
                    {
                        id: "2",
                        imageSRC:"../../../dist/assets/images/Metier/Repairman/toolbag.jpg"
                    },
                    {
                        id: "3",
                        imageSRC:"../../../dist/assets/images/Metier/Repairman/ToolMan.png"
                    },
                    {
                        id: "4",
                        imageSRC:"../../../dist/assets/images/Metier/Repairman/ToolMan02.jpg"
                    }
                ]
            }
        ],
        fontFamilyList: [
            {
                id: '1',
                fontName:'Avenir'
            },
             {
                id: '2',
                fontName:'Aloha'
            },
              {
                id: '3',
                fontName:'Atlantis'
            },
            {
                id: '4',
                fontName:'Arial'
              },
               {
                id: '5',
                fontName:'BeachAbodeBrush'
            },
                {
                id: '6',
                fontName:'Chaitea'
            },
                 {
                id: '7',
                fontName:'Jules'
            },
                  {
                id: '8',
                fontName:'Luster'
            },
                   {
                id: '9',
                fontName:'Paperie'
            },
                    {
                id: '10',
                fontName:'Wander'
            },
                     {
                id: '11',
                fontName:'Wilde&Rad'
            },
            {
                id: '12',
                fontName:'Wilde'
            },
            {
                id: '13',
                fontName:'Courier New'
            },
            {
                id: '14',
                fontName:'Gill Sans'
            },
            {
                id: '15',
                fontName:'Trebuchet MS'
            },
            {
                id: '16',
                fontName:'Times New Roman'
            },
            {
                id: '17',
                fontName:'xoBabe'
            }
             

            
        ],
        backgroundName: "",
        imagesBackground: "",
        elementToEdit: "",
        underlineWidth: 0,
        sliceSize: 0,
        activeItemIndex: 0,
        messageReceive:0,
        fontIconValue: "",
        fontFamillyChoose:'',
        showIconSocial: false,
        iconListCategoryChoose:[
            {
                id:'1',title:'Media',description:'',image:[{id:'1',imageSrc:'dist/assets/images/Customisateur/Icone/Media/Fb_rond.png'},{id:'2',imageSrc:'dist/assets/images/Customisateur/Icone/Media/Snap_rond.png'},{id:'3',imageSrc:'dist/assets/images/Customisateur/Icone/Media/Youtube.png'},{id:'4',imageSrc:'dist/assets/images/Customisateur/Icone/Contact/Mail_rond.png'}]
            },
            {
                id:'2',title:'Quote',description:'',image:[]
            },
            {
                id:'3',title:'Made In',description:'',image:[]
            },
            {
                id:'4',title:'Brand',description:'',image:[]
            }
        ],
        backgroundLayout: [
             {
                id:'0',imageSrc:''
            },
            {
                id:'1',imageSrc:'dist/assets/images/Background/Bubble.svg'
            },
            // {
            //     id:'2',imageSrc:'dist/assets/images/Background/Fond_couleur.svg'
            // },
            // {
            //     id:'3',imageSrc:'dist/assets/images/Background/Bande.svg'
            // },
            // {
            //     id:'4',imageSrc:'dist/assets/images/Background/Soleil.svg'
            // },
            // {
            //     id:'5',imageSrc:'dist/assets/images/Background/Rond.svg'
            // }
        ]
        ,
        categoryIconChoose: [
             {
              id:'1',value:'Media',image:[]
            },
            {
                id:'2',value:'Quote',image:[]
            },
            {
                id:'3',value:'Made In',image:[]
            },
            {
                id:'4',value:'Brand',image:[]
            }
        ],
        familyList: [{
                id: "1",
                value: "Times New Roman"
            },
            {
                id: "2",
                value: "Avenir Black"
            },
            {
                id: "3",
                value: "Arial"
            },
            {
                id: "4",
                value: "Cambria"
            }
        ],
        inputs: [{
            id: 'text0',
            value: '',
        }],
        alignement:'left',
        sidebarItemList: [],
        selectBackgroundLayoutList: [],
        topnaveBackgroundLayoutList: [],
        JobChoose:'',
        index: 0,
        customizerWidth: "600",
        customizerHeight: "200",
        otherText: "",
        itemToEdit: "",
        clicked: false,
        fontFamilyValue: "",
        fontIconValue: "",
        iconChoose: '',
        upload: false,
    },
    computed: {
        myTextToShow() {
            return text => this.textValueOncontent.find(ex => ex.value === text)
        },
        marginLeft() {
            return `${this.underlineWidth}%`
        },
        getStyles() {
            return [
                { 'width': `${this.sliceSize}%` },
                { 'margin-left': this.marginLeft }
            ]
        },
    },
    created() {
        $('.defaultText').on('keyup', function() {
            console.log("okay")
        })
    },
    methods: {
        init() {
            this.sliceSize = 100 / this.items.length
        },
          diplas() {
              console.log("do")
              document.querySelector(".contentColor").style.display = "none";
              setTimeout(() => {
              document.querySelector(".contentColor").style.display = "flex";
              }, 500);
        },
         removeItem(itemId) {
            console.log(itemId)
            this.jobchoose = itemId
            this.dropChoose = false
        },
        removeItemIcon(itemId){
            this.IconChoose = itemId
            this.dropChoose = false
        },
        fontSelectFontion(itemToselect) {
            this.fontFamillyChoose = itemToselect.fontName
            this.dropChoose =false
         },

        Onselected(n) {
            this.showActive((this.index = n));
            console.log(n)
        },
        OnselectedBackground(n) {
            this.showActiveBackground((this.index = n));
            console.log(n)
            this.background = true
            let back = document.querySelector(".canvasAree")
            back.style.background = "#fff"
            
        },
        OnselectedBackgroundTopnav(n) {
            this.showActiveBackgroundTopnav(this.index = n);
            console.log(n)
        },
        showActive(n) {
            console.log(this.textToShow)
            for (var i = 0; i < this.sidebarItemList.length; i++) {
                this.sidebarItemList[i].className = this.sidebarItemList[i].className.replace(" activeToolsItem", "");
            }
            this.sidebarItemList[n].className += " activeToolsItem";
        },
        showActiveBackground(n) {
            localStorage.setItem("selectBackground",n)
            for (var i = 0; i < this.selectBackgroundLayoutList.length; i++) {
                this.selectBackgroundLayoutList[i].className = this.selectBackgroundLayoutList[
                    i
                ].className.replace(" activeToolsItem", "");
            }
            if (n == 0) {
                this.imagesBackground =""
            } else {
                let imagesSelectionner = this.selectBackgroundLayoutList[n].getElementsByTagName('img')[0].src;
                this.imagesBackground = imagesSelectionner
            }
            this.selectBackgroundLayoutList[n].className += " activeToolsItem";
            setTimeout(() => {
                this.topnaveBackgroundLayoutList = document.querySelectorAll(".itemDesignLayout")
                console.log(this.topnaveBackgroundLayoutList)
            }, 300);
            
        },
        showActiveBackgroundTopnav(n) {
            for (var i = 0; i < this.topnaveBackgroundLayoutList.length; i++) {
                this.topnaveBackgroundLayoutList[i].classList.remove("activeToolsItem")
            }
            this.topnaveBackgroundLayoutList[n].classList.add("activeToolsItem");
            let imagesSelectionner = this.topnaveBackgroundLayoutList[n].getElementsByTagName('img')[0].src;
            console.log(imagesSelectionner)
             this.imagesBackground = imagesSelectionner
             if(n==0){
                this.imagesBackground =""
            }

            localStorage.setItem("localUrlChange",JSON.stringify(this.imagesBackground))

        },
        changeTitle(item) {
            console.log(item)

        },
        backgroundChanger(element) {
            var imageSrc = element.src;
            var containerModify = document.querySelector(".customizerSave-area")
            containerModify.style.backgroundImage = 'url(' + imageSrc + ')';
        },
        jobChoosePreviewActive(n) {
            console.log(this.jobChooseList[n].value)
        this.JobChoose = this.jobChooseList[n].value
            
        },
        IconChooseActive(n) {
            console.log(this.categoryIconChoose[n].value)
          this.textIconShow = this.categoryIconChoose[n].value
        },
        ShowJobActive(n) {
        this.FlexiShowActive((this.index = n));
        console.log(n);
      },
      JobShowActive(n) {
        for (var i = 0; i < this.jobList.length; i++) {
          this.jobList[i].classList.remove("Acitve")
        }

        this.jobList[n].classList.add("Acitve");
      },

        setUnderlinePosition(index) {
            this.underlineWidth += this.sliceSize * (index)
        },
        setPositionOnLeave(index) {
            this.underlineWidth = 1
        },
        setActive(name) {
            this.activeItemIndex = this.items.findIndex(item => item.name === name)
        },
        SelectedIconFont() {
            var mediacontent = document.querySelector(".contentIconContainer")
            for (const option of document.querySelectorAll(".custom-option")) {
                const select = document.querySelector(".custom-select");
                option.addEventListener("click", function() {
                    if (!this.classList.contains("selected")) {
                        option.parentNode
                            .querySelector(".custom-option.selected")
                            .classList.remove("selected");
                        option.classList.add("selected");
                        var texe = option.textContent;
                        this.fontIconValue = texe.toString();
                        select.classList.remove("open");
                        if (this.fontIconValue == "Media") {
                            console.log("okay je suis bien sur media  ")
                            mediacontent.classList.add("mediaActive")
                        } else if (this.fontIconValue == "Quote") {
                            if (mediacontent.classList.contains("mediaActive")) {
                                mediacontent.classList.remove("mediaActive")
                            }
                            console.log("okay")
                        } else {
                            if (mediacontent.classList.contains("mediaActive")) {
                                mediacontent.classList.remove("mediaActive")
                            }
                        }
                        document
                            .querySelector(".custom-options")
                            .classList.toggle("activeSelect");
                        console.log(this.fontIconValue);
                    }
                });
            }

        },
         resumeImportChoose(n){
                 this.resumeImportShowActive(this.indx = n)
                 console.log(n)
         },
         resumeImportShowActive(n){
           for (var i = 0; i < this.titleZoneImport.length; i++) {
             this.titleZoneImport[i].classList.remove("active")
           }

           this.titleZoneImport[n].classList.add("active")
         },
         resumeImportShowActiveHeader(n){
             for (let i = 0; i < this.titleZoneImportHeader.length; i++) {
                 this.titleZoneImportHeader[i].classList.remove("active")
                }
                this.titleZoneImportHeader[n].classList.add("active")
                console.log(n)
         }


    },
    mounted() {
        this.sidebarItemList = document.querySelectorAll(".itemToolsSidebar");
        this.selectBackgroundLayoutList = document.querySelectorAll(".visualContent")
        this.topnaveBackgroundLayoutList = document.querySelectorAll(".itemDesignLayout")
        this.titleZoneImportHeader = document.querySelectorAll(".titleZoneHeader")
        this.jobList=document.querySelectorAll(".containerVisualJob")
        this.showActive((this.index = 0));
      this.jobChooseList = document.querySelectorAll(".select-box__input")
        this.titreProduct = localStorage.getItem("CustomiseTitle")
        let sizeMedia = JSON.parse(localStorage.getItem("customizerSize"))
        console.log(sizeMedia.width)
        this.customizerHeight = sizeMedia.height
        this.customizerWidth = sizeMedia.width
        this.titleZoneImport = document.querySelectorAll(".titleZone")
        console.log(this.titleZoneImport)
        this.resumeImportShowActive(this.indx = 0)
        this.resumeImportShowActiveHeader(this.index =0)
        this.jobTipe = "downloadLogo"
        console.log(this.titleZoneImportHeader)
        let newCanvas = document.querySelector('#canvasUpload')
        let allContainer = document.querySelector(".canvasAree")
        if (window.localStorage.getItem('cutCustomizer') != null && window.localStorage.getItem('cutCustomizer') == 'Round') {
            newCanvas.classList.add('roundedCanvas')
            allContainer.classList.add("roundedCanvas")
        } else {
            console.log(newCanvas)
        }

    },


})