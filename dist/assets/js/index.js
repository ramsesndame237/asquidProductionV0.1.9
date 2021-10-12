var  baseUri='http://localhost:3350/api/'

var app = new Vue({
    el: '#indexPage',
    data() {
        return {
            checkidt: false,
            connected: false,
            conditionConnect: false,
            clicked:false,
            User: [],
            messageInTheBox:'',
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
            }
        }
    },
    methods: {
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
            this.itemTextToShow ='confirmMail'
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
            localStorage.removeItem('Userconnected')
            window.location.reload()
        }
       
    },
    mounted() {
        this.itemTextToShow = 'Signin'
        if (JSON.parse(localStorage.getItem('Userconnected')) != null && localStorage.getItem('Userconnected').length > 0) {
            let userInfo = JSON.parse(localStorage.getItem('Userconnected'))
            this.username = userInfo.Fname 
            this.connected = true
        }

        localStorage.setItem('UserConnected',JSON.stringify(''))
    },
   
  })
