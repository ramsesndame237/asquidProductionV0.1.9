var app = new Vue({
    el:'#cart',
    data() {
        return {
            dataSourceImagePreview: '',
            numberOfProduct: '0',
            //  baseUri:'https://adsquid.herokuapp.com/api/',
            baseUri:'http://0.0.0.0:8800/api/',
            carts: [],
            totalShipping: 0,
            GTS: 0,
            shippingPrice:0
        }
    },
    methods: {
        shipping() {
            window.location = "../../../others/shipping.html"
            let data = {
                price: this.totalShipping,
                product:this.carts
            }
            localStorage.setItem("otherToPay",JSON.stringify(data))
        },
        shopping() {
            window.location ="../../../chooseYourmedia.html"
        }
    },
    mounted() {
        // let cartContainer = []
        if(window.localStorage.getItem("imageToPreview") != null && window.localStorage.getItem.length > 0){
            this.dataSourceImagePreview = JSON.parse(window.localStorage.getItem("imageToPreview"))
        }

        if (window.localStorage.getItem("userInfomation") != null && window.localStorage.getItem("userInfomation").length > 0) {
             let localUser = JSON.parse(window.localStorage.getItem("userInfomation"))
                let id = localUser.id
            axios.get(this.baseUri + "panniers" + "/" + id).then((response) => {
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