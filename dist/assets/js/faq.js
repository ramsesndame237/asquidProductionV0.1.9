var app = new Vue({
    el:'#faq',
    data() {
        return {
            dataSourceImagePreview: '',
            numberOfProduct: '0',
                        baseUri:'https://adsquid.herokuapp.com/api/',
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
    },
})