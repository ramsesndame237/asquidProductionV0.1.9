var app = new Vue({
    el: '#indexPage',
    data() {
        return {
            checkidt: false,
            connected: false,
            conditionConnect:false,
            User: [],
            userConnect: null,
            itemTextToShow: '',
            username:'',
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

        saveUser() {
            console.log(this.dataRegistration.email)
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

            console.log(axios)
            this.User.push(userToSave)
            localStorage.setItem('User', JSON.stringify(this.User))
            this.itemTextToShow ='confirmMail'
        },
        /**
         * this fuction is to connecte a new user 
         */

        SigninSave() {
            let AllUser = JSON.parse(localStorage.getItem('User'))

            console.log(AllUser)
            AllUser.forEach(element => {
                if (element.email == this.dataRegistration.email && element.password == this.dataRegistration.password) {
                    this.userConnect = element
                    localStorage.setItem('Userconnected',JSON.stringify(this.userConnect))
                } else {
                    alert('Incorect password or email')
                }
            });
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
