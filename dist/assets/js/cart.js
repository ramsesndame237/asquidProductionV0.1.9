var app = new Vue({
    el:'#cart',
    data() {
        return {
            dataSourceImagePreview: '',
            numberOfProduct: '0',
            carts: [],
            totalShipping:0
        }
    },
    methods: {
        shipping() {
            window.location ="../../../others/shipping.html"
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
           this.totalShipping += parseInt(element.product.totalAmountProduct)+20+22.8
        });
        console.log(dataStorage.length)
    },
})