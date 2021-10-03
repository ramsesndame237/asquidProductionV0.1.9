var app = new Vue({
    el:'#previewImageFinal',
    data() {
        return {
            dataSourceImage: '',
            checkidt: false,
            carts: [],
            numberofCar:0
        }
    },
    methods: {
        editAgain() {
            localStorage.setItem("editAgain",'true')
            window.location = "../../../customiser2.html"
        },
        
        AddCart() {
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
            window.location = "../../../others/cart.html"
        }
    },
    mounted() {
        if(window.localStorage.getItem("imageToPreview") != null && window.localStorage.getItem.length > 0){
            this.dataSourceImage = JSON.parse(window.localStorage.getItem("imageToPreview"))
            localStorage.setItem("editAgain", 'false')
            
        }
    },
})