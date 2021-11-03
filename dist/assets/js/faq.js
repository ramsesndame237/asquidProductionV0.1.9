var app = new Vue({
    el:'#faq',
    data() {
        return {
            numberOfProduct: '0',
            baseUri: 'https://adsquid.herokuapp.com/api/',
            carts: [],
            dropQuestion: false,
            aswer:false,
            questionChoose: "",
            responses:[],
            faq: [
                {
                    id: "1",
                    TitreQuestion: "I already have a logo, can I use it on my adhesive kit?",
                    descriptionQuestion: "this is to explain if is possible to use own logo on and adhesive kit",
                    response: [
                        {
                            id:"1",
                            idQuestion : "1",
                            responseQuestion:""
                        },
                    ]
                },
                {
                    id: "2",
                    TitreQuestion: " I have found the visual that suits me, but the dimensions of the markings you propose do not correspond to my vehicle?",
                    descriptionQuestion: "explain how to do if the size is not correspond on a vehicle",
                    response: [
                        {
                            id:"2",
                            idQuestion : "2",
                            responseQuestion:""
                        }
                    ]
                },
                {
                    id: "3",
                    TitreQuestion: "What is the lifespan of your products?",
                    descriptionQuestion: "",
                    response: [
                        {
                            id:"3",
                            idQuestion : "3",
                            responseQuestion:"Our products are made of high quality materials.Their life span may vary depending on the product chosen."
                        },
                         {
                            id:"4",
                            idQuestion : "3",
                            responseQuestion:" - Adhesive: 5 years "
                        },
                          {
                            id:"5",
                            idQuestion : "3",
                            responseQuestion:" - Micro-perforated: 2 years "
                        },
                        {
                            id:"6",
                            idQuestion: "3",
                            responseQuestion:" -Plexipub: 5 to 7 years"
                        }
                          
                    ]
                },
                {
                    id: "4",
                    TitreQuestion: "Is it difficult to put the adhesive kit on?",
                    descriptionQuestion: "",
                    response: [
                        {
                            id:"7",
                            idQuestion : "4",
                            responseQuestion:""
                        }
                    ]
                },

            ]
        }
    },
    methods: {
        selectQuestion(itemSelect) {
            console.log(itemSelect)
            this.questionChoose = itemSelect.TitreQuestion
            this.responses = itemSelect.response
            this.dropQuestion = false
            if (this.responses.length >0) {
                this.aswer = true
            } else {
                this.aswer = false
            }
        }
    },
    mounted() {
        // let cartContainer = []
        if(window.localStorage.getItem("imageToPreview") != null && window.localStorage.getItem.length > 0){
            this.dataSourceImagePreview = JSON.parse(window.localStorage.getItem("imageToPreview"))
        }
       
        axios.get(this.baseUri + "panniers").then((response) => {
            console.log(response)
            response.data.forEach(element => {
                if (element.statutCommande ==  'notPaid') {
                    // cartContainer.push(element)
                    this.carts.push(element)
                }
            });
            this.numberOfProduct = this.carts.length
        }).catch((error) => {
            console.log(error)
        })
    },
})