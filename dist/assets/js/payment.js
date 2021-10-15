var app = new Vue({
    el:'#paymentL',
    data() {
        return {
            checkidt: false,
            totalShipping: 0,
            index:0,
            chooseBankMode: [],
            numberOfProduct: '0',
                        baseUri:'https://adsquid.herokuapp.com/api/',
            description:"",
            carts: [],
            shippingPrice: 0,
            commandes: {
                 ProduitCommande: "",
                amountCommande: "",
                statutCommande: "",
                sizeCommande: "",
                cutCommande: "",
                ExtraCommande: "",
                designCommande: "",
                quantityCommande: "",
                visuelCommande: "",
                VisuelModify:"",
                DateOrdered: "",
                OrderNumber:""
            },
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
        odernumber(length) {
         var result           = '';
        var characters       = '0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
        }
        return result;  
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

                    api.post(this.baseUri + "commandes", this.commandes).then((response) => {
                        console.log(response)
                           var modal = document.getElementById("myModal");

                        // Get the button that opens the modal
                        
                        // Get the <span> element that closes the modal
                            var span = document.getElementsByClassName("close")[0];
                            modal.style.display = "block";
                            
                            // When the user clicks the button, open the modal 

                        // When the user clicks on <span> (x), close the modal
                        span.onclick = function() {
                        modal.style.display = "none";
                        }

                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                        }
                    }).catch((error) => {
                        console.log(error)
                    })
                    
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
       
       if(window.localStorage.getItem("imageToPreview") != null && window.localStorage.getItem.length > 0){
            this.dataSourceImagePreview = JSON.parse(window.localStorage.getItem("imageToPreview"))
       }

        let localCommande = JSON.parse(localStorage.getItem("commande"))
        console.log(localCommande)
        this.commandes.ProduitCommande = localCommande.nameProduct
        this.commandes.amountCommande = this.totalShipping
        this.commandes.statutCommande = localCommande.statutCommande || ""
         this.commandes.sizeCommande= localCommande.sizeProduct,
         this.commandes.cutCommande= localCommande.cutCommande || "",
         this.commandes.ExtraCommande= localCommande.extraProduct,
          this.commandes.designCommande= localCommande.designProduct,
          this.commandes.quantityCommande= localCommande.quantityProduct,
          this.commandes.visuelCommande= JSON.parse(localStorage.getItem("imageToPreview")),
          this.commandes.VisuelModify=JSON.parse(localStorage.getItem("canvasSaveAs")) + '',
        this.commandes.DateOrdered= ""+ new Date,
        this.commandes.OrderNumber="#"+ this.odernumber(6)
        console.log(this.commandes)
       
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
        this.chooseBankMode = document.querySelectorAll(".bank")
        this.resumeShowActive(index = 0)
    },
})