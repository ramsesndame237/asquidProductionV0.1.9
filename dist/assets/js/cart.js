var app = new Vue({
    el:'#cart',
    data() {
        return {
            dataSourceImagePreview: '',
            numberOfProduct: '0',
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
        if(window.localStorage.getItem("imageToPreview") != null && window.localStorage.getItem.length > 0){
            this.dataSourceImagePreview = JSON.parse(window.localStorage.getItem("imageToPreview"))
        }
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