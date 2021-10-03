var app = new Vue({
    el:'#shipping',
    data() {
        return {
            numberOfProduct: '0',
            carts: [],
            checkidt: false,
            totalShipping:0
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
           this.totalShipping += parseInt(element.product.totalAmountProduct)+20+22.8
        });
        console.log(dataStorage.length)
    },
})