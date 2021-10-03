var app = new Vue({
    el:'#paymentL',
    data() {
        return {
            checkidt: false,
            totalShipping: 0,
            index:0,
            chooseBankMode:[]
        }
    },
    methods: {
        payment() {
            window.location ="../../../others/payment.html"
        },
    resumeChoose(n){
          this.resumeShowActive(this.index = n)
          console.log(n)
      },
      resumeShowActive(n){
          for (var i = 0; i < this.chooseBankMode.length; i++) {
            this.chooseBankMode[i].classList.remove("chooseLink")
          }

          this.chooseBankMode[n].classList.add("chooseLink")
      },

    },
    mounted() {
        let dataStorage = JSON.parse(localStorage.getItem("cartStorage"))
        this.numberOfProduct = dataStorage.length
        this.carts = dataStorage
         this.carts.forEach(element => {
           this.totalShipping += parseInt(element.product.totalAmountProduct)+20+22.8
        });
        console.log(dataStorage.length)
        this.chooseBankMode = document.querySelectorAll(".bank")
        this.resumeShowActive(index = 0)
    },
})