var app = new Vue({
    el: '#QuotePage',

    data() {
        return {
            dropChoose: false,
            dropChooseVehicle:false,
            dropChooseYearVehicle: false,
            dropChooseWhat:false,
            itemSubjectToShow: '',
            isTheEnd: false,
            checkidt: false,
            connected: false,
            conditionConnect: false,
            numberOfProduct: '0',
            clicked: false,
            baseUri:'https://adsquid.herokuapp.com/api/',
            User: [],
            messageInTheBox: '',
            success:false,
            userConnect: null,
            itemTextToShow: '',
            username: '',
            dataRegistration: {
                email: '',
                name: '',
                surname: '',
                companyName: '',
                password: '',
                adress: '',
                phone: '',
                city: '',
                state: '',
                postCode: '',
                CarInfo: [{
                    brand: '',
                    model: '',
                    yearModel:''
                }]
            },
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
          openModal() {
            console.log("ooakakak")
             // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        
        // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            modal.style.display = "block";
            
            // When the user clicks the button, open the modal 

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
        },
        /**
         * this function is to generate UUID
         */
        uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        },
        /**
         * function pour l'enregistrement d'un utilisateur
         */

        async saveUser() {
            console.log(this.dataRegistration.email)

            let dataToSend = {
                name:"" ,
                lastName: "",
                companyName: "",
                tel1:"",
                tel2: "",
                tel3: "",
                city: "",
                state:"",
                postcode: "",
                brand:"",
                model: "",
                years: "",
                email:this.dataRegistration.email,
                password:""
            }

            await api.post(this.baseUri + "auth/signup",dataToSend).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
                console.log(dataToSend)
          })


            let userToSave = {
                idUser: this.uuidv4(),
                Fname: this.dataRegistration.email.substring(0, this.dataRegistration.email.lastIndexOf("@")) || this.dataRegistration.name,
                Lname: this.dataRegistration.email.substring(0, this.dataRegistration.email.lastIndexOf("@")) || this.dataRegistration.surname,
                companyName: this.dataRegistration.companyName,
                password: this.dataRegistration.email.substring(0, this.dataRegistration.email.lastIndexOf("@")) + 2021 || this.dataRegistration.password,
                adress: this.dataRegistration.adress,
                phone: this.dataRegistration.phone,
                city: this.dataRegistration.city,
                state: this.dataRegistration.state,
                postCode: this.dataRegistration.postCode,
                CarInfo: this.dataRegistration.CarInfo,
                email:this.dataRegistration.email
            }

            this.User.push(userToSave)
            localStorage.setItem('User', JSON.stringify(this.User))
            this.itemTextToShow = 'confirmMail'
            setTimeout(() => {
                this.itemTextToShow = 'Signin'
            }, 1500);
        },
        /**
         * this fuction is to connecte a new user 
         */

       async SigninSave() {
            let user = {
                email: this.dataRegistration.email,
                password:this.dataRegistration.password
            }
            await axios.post(this.baseUri + "auth/signin", user).then((response) => {
                console.log(response)
                localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken))
                localStorage.setItem("refreshToken", JSON.stringify(response.data.refreshToken))
                this.username = response.data.name
                this.itemTextToShow = ""
                localStorage.setItem("userInfomation",JSON.stringify(response.data))
                this.connected = true
                localStorage.setItem("connect",this.connected)
                var modal = document.getElementById("myModal");
                modal.style.display = "none";

                
            }).catch((error) => {
                console.log(error)
                console.log(axios)
            })
        },
        TypeOnglet(n) {
            console.log(n)
            if (n == 0) {
                localStorage.setItem('typeAccount',JSON.stringify('personal'))
            } else if (n == 1) {
                localStorage.setItem('typeAccount',JSON.stringify('aboutCar'))
            }
        },
        signOut() {
            localStorage.removeItem('connect')
            window.location.reload()
        },
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
        },
        sendQuote() {
            
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