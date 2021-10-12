var app = new Vue({
    el:'#paymentL',
    data() {
        return {
            checkidt: false,
            totalShipping: 0,
            index:0,
            chooseBankMode: [],
            numberOfProduct: '0',
            description:"",
            carts: [],
            shippingPrice:0,
            GTS: 0,
            paymentMode:"bank"
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
          if (n==0) {
              this.paymentMode ="bank"
          }else if (n==1) {
              this.paymentMode ="payPal"
          }

          this.chooseBankMode[n].classList.add("chooseLink")
        },
        setLoaded: function() {
            this.loaded = true;
            window.paypal
                .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                    purchase_units: [
                        {
                        description: this.description,
                        amount: {
                            currency_code: "USD",
                            value: this.totalShipping
                        }
                        }
                    ]
                    });
                    },
                        style: {
                            shape: "pill",
                            color: "silver",
                            layout: "horizontal",
                            label: "paypal",
                            tagline: true,
                            height: 52,
                        },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    this.paidFor = true;
                    console.log(order);
                    
                },
                onError: err => {
                    console.log(err);
                }
                })
                .render(this.$refs.paypal);
    }

    },
    mounted() {
         const script = document.createElement("script");
        script.src ="https://www.paypal.com/sdk/js?client-id=AVZGaqNc95i9JZe1ziluR5cPOB1ORfYl6IDaciax1vetSTSuzQKDGJReeZEyegHG_ZvbCWCOPoxanzE7";
        script.addEventListener("load", this.setLoaded);
            document.body.appendChild(script);
       
        
        let dataStorage = JSON.parse(localStorage.getItem("cartStorage"))
        this.numberOfProduct = dataStorage.length
        this.carts = dataStorage
           this.carts.forEach(element => {
               this.GTS = element.product.totalAmountProduct * 10 / 100
               this.description = element.product.sizeProduct + element.product.nameProduct
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
        this.chooseBankMode = document.querySelectorAll(".bank")
        this.resumeShowActive(index = 0)
    },
})