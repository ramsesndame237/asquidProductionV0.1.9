var app = new Vue({
    el: '#QuotePage',

    data() {
        return {
            dropChoose: false,
            dropChooseVehicle:false,
            dropChooseYearVehicle: false,
            dropChooseWhat:false,
            itemSubjectToShow: '',
            isTheEnd:false,
            subjectQuote: [
                
                {
                    id: '1',
                    description: '',
                    title:'I have several vehicles'
                },
                {
                    id: '2',
                    description: '',
                    title:'I would like a specific wrapping for my vehicle'
                },
                {
                    id: '3',
                    description: '',
                    title:'I would also like buisness cards, flyers, website, a logo...'
                },
                {
                    id: '4',
                    description: '',
                    title:'Others'
                }
            ],
            quantityVehiculeInterval: [
                {
                    id: '1',
                    intervaleVehicule:'0 - 5 vehicles'
                },
                {
                    id: '2',
                    intervaleVehicule:'5 - 10 vehicles'
                },
                {
                    id: '3',
                    intervaleVehicule:'10 - 15 vehicles'
                },
                {
                    id: '4',
                    intervaleVehicule:'We have so many that we can no longer count them'
                }
            ],
            YearList:[],
            BrandChooseList: [
                {id:'1',description:'',model:"Mercedes-Benz"},
                {id:'2',description:'',model:"Peugeot"},
                {id: '3', description:'',model:"Citroen"},
                {id:'4',description:'',model:"Jeep"},
                {id:'5',description:'',model:"Nissan"},
                {id:'6',description:'',model:"Suzuki"},
                {id:'7',description:'',model:"Hundai"},
                {id:'8',description:'',model:"Audi"},
                {id:'9',description:'',model:"Opel"},
                {id:'10',description:'',model:"Toyota"},
            ],
            ListOfWhatIwant: [
                {
                    id: '1',
                    product: 'Business Card',
                    description:''
                },
                {
                    id: '2',
                    product: 'Create my logo',
                    description:''
                },
                {
                    id: '3',
                    product: 'Create a website',
                    description:''
                },
                {
                    id: '4',
                    product: 'Others',
                    description:''
                },
                 
            ],
            subjetChoose: '',
            QuantityVehicle: '',
            BrandChoose: '',
            YearChoose: '',
            WhatProductChoose:''
            
        }
    },
    methods: {
        /**
         * cette function est pour la selection d'un sujet
         */
        SubjectToSelect(itemToselect) {
            console.log(itemToselect)
            this.subjetChoose = itemToselect.title
            this.dropChoose = false
            this.itemSubjectToShow = this.subjetChoose
        },
        /**
         * this function is for the selection of the vehicle interval
         */
        SubjectToSelectVehicle(itemToselect) {
            this.QuantityVehicle = itemToselect.intervaleVehicule
            this.dropChooseVehicle = false
            this.isTheEnd=true
            
        },
        /**
         * this function is for the selection of the brand 
         */
        SubjectToSelectBrand(itemToselect) {
            this.BrandChoose = itemToselect.model
            this.dropChooseVehicle= false
        },
        /**
         * this function is for the selection of the year of the vehicle
         */
        SubjectToSelectYear(itemToselect) {
            this.YearChoose = itemToselect
            this.dropChooseYearVehicle = false
            this.isTheEnd = true
        },
        /**
         * this function is for the selection of what product you want 
         */

        SubjectToSelectWhat(itemToselect) {
            this.WhatProductChoose = itemToselect.product
            this.dropChooseWhat = false
            this.isTheEnd=true
        }
    },
    mounted() {
          let currentYear = new Date().getFullYear();
            let earliestYear = 1870;

        while (currentYear >= earliestYear) {
                this.YearList.push(currentYear)
                currentYear -= 1;
            }
    },

})