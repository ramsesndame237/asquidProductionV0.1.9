var app = new Vue({
    el:'#previewImageFinal',
    data() {
        return {
            dataSourceImage: '',
                        baseUri:'https://adsquid.herokuapp.com/api/',
            checkidt: false,
            carts: [],
            itemTextToShow: '',
            numberofCar: 0,
            id:'',
            AddCart: false,
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
            }
        }
    },
    methods: {
        editAgain() {
            localStorage.setItem("editAgain",'true')
            window.location = "../../../customiser2.html"
        },
       async myCart() {
            console.log("okay")
            var modal = document.getElementById("myModal");
           modal.style.display = "none";
           

            
            setTimeout(async () => {
                var cart = {
                      visual: JSON.parse(window.localStorage.getItem("imageToPreview")),
                      product:JSON.parse(localStorage.getItem("commande"))
                  }
              var stored = JSON.parse(localStorage.getItem("cartStorage")) || [];
  
              if (stored != null & stored.length > 0) {
                  stored.push(cart)
                  localStorage.setItem("cartStorage", JSON.stringify(this.carts))
              } else {
                 
                  this.carts.push(cart)
                  localStorage.setItem("cartStorage", JSON.stringify(this.carts))
              }
                let commande = JSON.parse(localStorage.getItem("commande"))
                let dataToCart = {
                     ProduitCommande: commande.nameProduct,
                    amountCommande: commande.totalAmountProduct,
                    statutCommande: "notPaid",
                    sizeCommande: commande.sizeProduct,
                    cutCommande: commande.cutProduct,
                    ExtraCommande: commande.extraProduct[0] || '',
                    designCommande: commande.designProduct,
                    quantityCommande: commande.quantityProduct,
                    visuelCommande: JSON.parse(window.localStorage.getItem("imageToPreview")),
                    idUser:this.id
                }
                await api.post(this.baseUri + "panniers", dataToCart).then((response) => {
                    console.log(response)
                    window.location = "../../../others/cart.html"
                }).catch((error) => {
                    console.log(error)
                })

                
            }, 1000);
        },
        
        checkCart() {
            
            if (window.localStorage.getItem("userInfomation") != null && window.localStorage.getItem("userInfomation").length > 0) {
                this.AddCart = true
                let localUser = JSON.parse(window.localStorage.getItem("userInfomation"))
                this.id = localUser.id
                    // Get the modal
                var modal = document.getElementById("myModal");
                // Get the <span> element that closes the modal
                    // var span = document.getElementsByClassName("close")[0];
                    
                    // When the user clicks the button, open the modal 
                    console.log(modal)
                    modal.style.display = "block";
    
                // When the user clicks on <span> (x), close the modal
                // span.onclick = function() {
                // modal.style.display = "none";
                // }
    
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
                }
            } else {
                this.itemTextToShow = 'Signin'
                this.AddCart = false
                  var modal = document.getElementById("myModal");
                // Get the <span> element that closes the modal
                    // var span = document.getElementsByClassName("close")[0];
                    
                    // When the user clicks the button, open the modal 
                    console.log(modal)
                    modal.style.display = "block";
    
                // When the user clicks on <span> (x), close the modal
                // span.onclick = function() {
                // modal.style.display = "none";
                // }
    
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
                }
            }

        },
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
    },
    mounted() {
        if(window.localStorage.getItem("imageToPreview") != null && window.localStorage.getItem.length > 0){
            this.dataSourceImage = JSON.parse(window.localStorage.getItem("imageToPreview"))
            localStorage.setItem("editAgain", 'false')
            console.log("okayllls")
            let previewCo = document.querySelector(".containerCanvasFabricPreview")
             if (window.localStorage.getItem('cutCustomizer') != null && window.localStorage.getItem('cutCustomizer') == 'Round') {
            previewCo.classList.add('roundedCanvas')
        } else {
            console.log(previewCo)
        }
            
        }

    },
})