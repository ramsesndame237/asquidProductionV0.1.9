
var app = new Vue({
    el: '#indexPage',
    data() {
        return {
            checkidt: false,
            connected: false,
            conditionConnect: false,
            numberOfProduct: '0',
          messageReceive:0,
            clicked: false,
            // baseUri:'https://adsquid.herokuapp.com/api/',
            baseUri:'http://localhost:8800/api/',
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
            productPresentation: {
                name: "",
                label: "",
                description: "",
                caracteristique: "",
                photo:""
            },
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
            }).catch((error) => {
                console.log(error)
                alert("And error occur please contact the administration")
                console.log(dataToSend)
          })


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
            localStorage.removeItem("User")
            localStorage.removeItem("userInfomation")
            window.location.reload()
        }
       
    },
    mounted() {
        this.itemTextToShow = 'Signin'
        let carts = []
        if (JSON.parse(localStorage.getItem('User')) != null && localStorage.getItem('User').length > 0) {
            let userInfo = JSON.parse(localStorage.getItem('User'))
            this.username = userInfo[0].Fname 
            this.connected = true
            console.log(userInfo[0].Fname)
              axios.get(this.baseUri + "panniers").then((response) => {
            console.log(response)
            response.data.forEach(element => {
                if (element.statutCommande ==  'notPaid') {
                    // cartContainer.push(element)
                    carts.push(element)
                }
            });
            this.numberOfProduct = carts.length
        }).catch((error) => {
            console.log(error)
        })
        }

        this.connected = localStorage.getItem("connect")


    },
   
  })
