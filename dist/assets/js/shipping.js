var app = new Vue({
    el:'#shipping',
    data() {
        return {
            numberOfProduct: '0',
            carts: [],
            checkidt: false,
            totalShipping: 0,
            shippingPrice: 0,
                        baseUri:'https://adsquid.herokuapp.com/api/',
            GTS: 0,
               user: {
                email: "",
                password: "",
                name:  "",
                lastName: "",
                companyName: "",
                tel1:"" ,
                tel2:"" ,
                tel3:"" ,
                city:"" ,
                   state: "",
                country:"",
                postcode: "",
                brand: "",
                model: "",
                years: ""
            },
        }
    },
    methods: {
        payment() {
            window.location ="../../../others/payment.html"
        }
    },
    mounted() {
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
        setTimeout(() => {
            this.carts.forEach(element => {
                 console.log(this.carts)
                this.GTS = element.amountCommande * 10 / 100
                if (element.amountCommande > 0 && element.amountCommande < 150) {
                this.shippingPrice = 15
                } else if (element.amountCommande > 151 && element.amountCommande < 500) {
                    this.shippingPrice =20
                } else if (element.amountCommande > 501) {
                    this.shippingPrice =25
                }
               this.totalShipping += parseInt(element.amountCommande)+this.shippingPrice+this.GTS
            });
        }, 500);

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

    },
})