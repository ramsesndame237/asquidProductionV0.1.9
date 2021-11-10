var app = new Vue({
    el:'#shipping',
    data() {
        return {
            numberOfProduct: '0',
            carts: [],
            checkidt: false,
            toDrop:false,
            totalShipping: 0,
            shippingPrice: 0,
            // baseUri: 'https://adsquid.herokuapp.com/api/',
            baseUri:'http://localhost:8800/api/',
             
            GTS: 0,
               user: {
                email: "",
                name:  "",
                lastName: "",
                companyName: "",
                tel1:"" ,
                tel2:"" ,
                tel3:"" ,
                city:"" ,
                state: "",
                country:"Australia",
                postcode: "",
                brand: "",
                model: "",
                years: ""
            },
            stateList: [
                {
                    id: "1",
                    stateName:"New South Wales"
                },
                {
                    id: "2",
                    stateName:"Queensland"
                },
                  {
                    id: "3",
                    stateName:"Northern Territory"
                },
                   {
                    id: "4",
                    stateName:"Western Australia"
                },
                    {
                    id: "5",
                    stateName:"South Australia"
                },
                {
                    id: "4",
                    stateName:"Victoria"
                },
                {
                    id: "5",
                    stateName:"The Australian Capital Territory"
                },
                {
                    id: "6",
                    stateName:"Tasmania"
                },
            ]
        }
    },
    methods: {
        async payment() {
            if (localStorage.getItem("userInfomation") != null && localStorage.getItem("userInfomation").length > 0) {
                            window.location = "../../../others/payment.html"
            } else {
                if (this.checkidt) {
                    if (this.user.name == '' && this.user.tel1 == '' && this.user.country == '' && this.user.state == '' && this.user.city == '') {
                        alert("please fill the form to have shipping adress for billing")
                    } else {
                        let data = {
                             email: this.user.email,
                            name:  this.user.name,
                            lastName: this.user.lastName,
                            companyName: this.user.companyName,
                            tel1:this.user.te1 ,
                            city:this.user.city ,
                            state: this.user.state,
                            country:this.user.country,
                            postcode: this.user.postcode,
                            brand: this.user.brand,
                            model: this.user.model,
                            years: this.user.years
                        }
                         axios.post(this.baseUri + "clients",data).then((respone) => {
                            window.location = "../../../others/payment.html"
                            console.log(respone)
                            localStorage.setItem("shippingAdress", JSON.stringify(respone.data))

                        }).catch((error) => {
                            console.log(this.user)
                            console.log(error.response)
                        })
                    }
                    
                } else {
                    alert("Please You have to active shipping adress for billing")
                }
            }
        },
        saveShipping() {
            this.checkidt = !this.checkidt
            if (this.checkidt) {
                localStorage.setItem("shippingAdresse", JSON.stringify(this.user))
            } else {
                localStorage.removeItem("shippingAdresse")
            }
            
        },
        selectState(elt) {
            this.user.state = elt.stateName
            this.toDrop = false
        }
    },
    mounted() {
        if(window.localStorage.getItem("imageToPreview") != null && window.localStorage.getItem.length > 0){
            this.dataSourceImagePreview = JSON.parse(window.localStorage.getItem("imageToPreview"))
        }
       

        if (localStorage.getItem("userInfomation") != null && localStorage.getItem("userInfomation").length > 0) {
            let localUser = JSON.parse(localStorage.getItem("userInfomation"))
            console.log(localUser)
            this.id = localUser.id
            this.user.name = localUser.name
            this.user.lastName = localUser.lastName
            this.user.tel1 = localUser.tel1
            this.user.tel2 = localUser.tel2
            this.user.tel3 = localUser.tel3
            this.user.years = localUser.years
            this.user.email = localUser.email
            this.user.brand = localUser.brand
            this.user.model = localUser.model
            this.user.state = localUser.state
            this.user.city = localUser.city
            this.user.postcode = localUser.postcode
            this.user.companyName = localUser.companyName

             axios.get(this.baseUri + "panniers" + "/" + this.id).then((response) => {
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
            let totalProductAmount = 0
            setTimeout(() => {
                this.carts.forEach(element => {
                    console.log(this.carts)
                    totalProductAmount = totalProductAmount + parseInt(element.amountCommande)
                    console.log(totalProductAmount)
                    this.GTS = totalProductAmount * 10 / 100
                    if (element.amountCommande > 0 && element.amountCommande < 150) {
                    this.shippingPrice = 15
                    } else if (element.amountCommande > 151 && element.amountCommande < 500) {
                        this.shippingPrice =20
                    } else if (element.amountCommande > 501) {
                        this.shippingPrice =25
                    }
                });
                this.totalShipping = totalProductAmount + this.shippingPrice+this.GTS
            }, 500);

        } else {
              data = JSON.parse(localStorage.getItem("cartStorage"))
            data.forEach((elt) => {
                if (elt.statutCommande == 'notPaid') {
                    this.carts.push(elt)
                }
            })
            let totalProductAmount = 0
            setTimeout(() => {
                this.carts.forEach(element => {
                    console.log(this.carts)
                    totalProductAmount = totalProductAmount + parseInt(element.amountCommande)
                    console.log(totalProductAmount)
                    this.GTS = totalProductAmount * 10 / 100
                    if (element.amountCommande > 0 && element.amountCommande < 150) {
                    this.shippingPrice = 15
                    } else if (element.amountCommande > 151 && element.amountCommande < 500) {
                        this.shippingPrice =20
                    } else if (element.amountCommande > 501) {
                        this.shippingPrice =25
                    }
                });
                this.totalShipping = totalProductAmount + this.shippingPrice+this.GTS
            }, 500);
                this.numberOfProduct = this.carts.length
        }


    },
})