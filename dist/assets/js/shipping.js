var app = new Vue({
    el:'#shipping',
    data() {
        return {
            numberOfProduct: '0',
            carts: [],
            checkidt: false,
            totalShipping: 0,
            shippingPrice:0,
            GTS: 0,
            
        }
    },
    methods: {
        payment() {
            window.location ="../../../others/payment.html"
        }
    },
    mounted() {
        let dataStorage = JSON.parse(localStorage.getItem("cartStorage"))
        this.numberOfProduct = dataStorage.length
        this.carts = dataStorage
        this.carts.forEach(element => {
            this.GTS = element.product.totalAmountProduct * 10 / 100
            if (element.product.totalAmountProduct > 0 && element.product.totalAmountProduct < 150) {
            this.shippingPrice = 15
            } else if (element.product.totalAmountProduct > 151 && element.product.totalAmountProduct < 500) {
                this.shippingPrice =20
            } else if (element.product.totalAmountProduct > 501) {
                this.shippingPrice =25
            }
           this.totalShipping += parseInt(element.product.totalAmountProduct)+this.shippingPrice+this.GTS
        });
        console.log(dataStorage.length)
    },
})