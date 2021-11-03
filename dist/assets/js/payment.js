var app = new Vue({
    el:'#paymentL',
    data() {
        return {
            checkidt: false,
            paidFor:true,
            totalShipping: 0,
            index: 0,
            id: "",
            idClient:'',
            chooseBankMode: [],
            numberOfProduct: '0',
            // baseUri:'https://adsquid.herokuapp.com/api/',
            baseUri:'http://0.0.0.0:8800/api/',
            description:"",
            carts: [],
            shippingPrice: 0,
            commandes:[],
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
                    console.log(order);
                      this.commandes.forEach(async (element) => {
                        console.log(element)
                        let dataToSend = {
                            ProduitCommande : element.ProduitCommande,
                            amountCommande: this.totalShipping,
                            amountProduct: element.amountProduct,
                            OrderStatus:"Order in progress of verifcation",
                            statutCommande: "Paid",
                            paymentMode: "Paypal",
                            shippingCommande:this.shippingPrice,
                            sizeCommande: element.sizeCommande,
                            cutCommande: element.cutCommande || "",
                            ExtraCommande: element.ExtraCommande,
                            designCommande: element.designCommande,
                            quantityCommande: element.quantityCommande,
                            visuelCommande: element.visuelCommande,
                            VisuelModify:JSON.stringify(JSON.parse(localStorage.getItem("canvasSaveAs"))),
                            DateOrdered: element.DateOrdered,
                            OrderNumber: element.OrderNumber,
                            idUser: this.id,
                            idClient:this.idClient
                        }
                          console.log(dataToSend)
                          
                        await api.post(this.baseUri + "commandes", dataToSend).then((response) => {
                            console.log(response)

                            this.carts.forEach((element) => {
                                console.log(element.idPannier)
                                let data = {
                                    ProduitCommande: element.ProduitCommande,
                                    amountCommande: element.amountCommande,
                                    statutCommande: "Paid",
                                    sizeCommande: element.sizeCommande,
                                    cutCommande: element.cutCommande,
                                    ExtraCommande: element.ExtraCommande,
                                    designCommande: element.designCommande,
                                    quantityCommande: element.quantityCommande,
                                    visuelCommande: element.visuelCommande,
                                    idUser:element.idUser
                                }

                                api.put(this.baseUri + "panniers" + "/" + element.idPannier,data).then((response) => {
                                    console.log(response)
                                }).catch((error) =>{
                                    console.log(error)
                                })
                            })
                            this.paidFor = true;
                        }).catch((error) => {
                            console.log(error)
                            console.log(dataToSend)
                             })
                        if (this.paidFor) {
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
                        }
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
        // setTimeout(() => {
        //       this.commandes.forEach(async (element) => {
        //                 console.log(element)
        //                 let dataToSend = {
        //                     ProduitCommande : element.ProduitCommande,
        //                     amountCommande: this.totalShipping,
        //                     amountProduct: element.amountProduct,
        //                     OrderStatus:"Order in progress of verifcation",
        //                     statutCommande: "Paid",
        //                     paymentMode: "Paypal",
        //                     shippingCommande:this.shippingPrice,
        //                     sizeCommande: element.sizeCommande,
        //                     cutCommande: element.cutCommande || "",
        //                     ExtraCommande: element.ExtraCommande,
        //                     designCommande: element.designCommande,
        //                     quantityCommande: element.quantityCommande,
        //                     visuelCommande: element.visuelCommande,
        //                     VisuelModify:JSON.stringify(JSON.parse(localStorage.getItem("canvasSaveAs"))),
        //                     DateOrdered: element.DateOrdered,
        //                     OrderNumber: element.OrderNumber,
        //                     idUser: this.id,
        //                     idClient:this.idClient
        //                 }
        //                   console.log(dataToSend)
                          
        //                 await api.post(this.baseUri + "commandes", dataToSend).then((response) => {
        //                     console.log(response)

        //                     if (localStorage.getItem("userInfomation") != null && localStorage.getItem("userInfomation").length > 0) {
        //                         this.carts.forEach((element) => {
        //                             console.log(element.idPannier)
        //                             let data = {
        //                                 ProduitCommande: element.ProduitCommande,
        //                                 amountCommande: element.amountCommande,
        //                                 statutCommande: "Paid",
        //                                 sizeCommande: element.sizeCommande,
        //                                 cutCommande: element.cutCommande,
        //                                 ExtraCommande: element.ExtraCommande,
        //                                 designCommande: element.designCommande,
        //                                 quantityCommande: element.quantityCommande,
        //                                 visuelCommande: element.visuelCommande,
        //                                 idUser:element.idUser
        //                             }
    
        //                             api.put(this.baseUri + "panniers" + "/" + element.idPannier,data).then((response) => {
        //                                 console.log(response)
        //                             }).catch((error) =>{
        //                                 console.log(error)
        //                             })
        //                         })
                                
        //                     } else {
        //                         console.log("")
        //                     }

        //                     this.paidFor = true;
        //                 }).catch((error) => {
        //                     console.log(error)
        //                     console.log(dataToSend)
        //                      })
        //                 if (this.paidFor) {
        //                         var modal = document.getElementById("myModal");
        
        //                         // Get the button that opens the modal
                                
        //                         // Get the <span> element that closes the modal
        //                             var span = document.getElementsByClassName("close")[0];
        //                             modal.style.display = "block";
                                    
        //                             // When the user clicks the button, open the modal 
        
        //                         // When the user clicks on <span> (x), close the modal
        //                         span.onclick = function() {
        //                         modal.style.display = "none";
        //                         }
        
        //                         // When the user clicks anywhere outside of the modal, close it
        //                         window.onclick = function(event) {
        //                         if (event.target == modal) {
        //                             modal.style.display = "none";
        //                         }
        //                         }
        //                 }
        //             })
        // }, 1200);
         let totalProductAmount = 0
         const script = document.createElement("script");
        script.src ="https://www.paypal.com/sdk/js?client-id=AVZGaqNc95i9JZe1ziluR5cPOB1ORfYl6IDaciax1vetSTSuzQKDGJReeZEyegHG_ZvbCWCOPoxanzE7";
        script.addEventListener("load", this.setLoaded);
            document.body.appendChild(script);
       
       if(window.localStorage.getItem("imageToPreview") != null && window.localStorage.getItem.length > 0){
            this.dataSourceImagePreview = JSON.parse(window.localStorage.getItem("imageToPreview"))
       }
        
        if (localStorage.getItem("userInfomation") != null && localStorage.getItem("userInfomation").length > 0) {
            let localUser = JSON.parse(window.localStorage.getItem("userInfomation"))
            this.id = localUser.id
             axios.get(this.baseUri + "panniers" + "/"+ this.id).then((response) => {
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
            console.log(this.carts)
        
        setTimeout(() => {
            this.carts.forEach(element => {
                console.log(element)
                var currentDate = new Date();
                let data = {
                    ProduitCommande : element.ProduitCommande,
                    amountCommande: this.totalShipping,
                    amountProduct:element.amountCommande,
                    statutCommande : element.statutCommande || "",
                    sizeCommande: element.sizeCommande,
                    cutCommande: element.cutCommande || "",
                    ExtraCommande: element.ExtraCommande,
                    designCommande: element.designCommande,
                    quantityCommande: element.quantityCommande,
                    visuelCommande: element.visuelCommande,
                    VisuelModify:JSON.parse(localStorage.getItem("canvasSaveAs")) + '',
                    DateOrdered: currentDate.toLocaleDateString('en-US') + "",
                    OrderNumber:"#"+ this.odernumber(6)
                }
                this.commandes.push(data)
            })
        },1000);
        console.log(this.id)


        } else {
           let  datez = JSON.parse(localStorage.getItem("cartStorage"))
            datez.forEach((elt) => {
                if (elt.statutCommande == 'notPaid') {
                    this.carts.push(elt)
                }
            })
                this.numberOfProduct = this.carts.length
            this.carts.forEach(element => {
                
                console.log(element)
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
                this.totalShipping = totalProductAmount + this.shippingPrice + this.GTS
                var currentDate = new Date();
                let data = {
                    ProduitCommande : element.ProduitCommande,
                    amountCommande: this.totalShipping,
                    amountProduct:element.amountCommande,
                    statutCommande : element.statutCommande || "",
                    sizeCommande: element.sizeCommande,
                    cutCommande: element.cutCommande || "",
                    ExtraCommande: element.ExtraCommande,
                    designCommande: element.designCommande,
                    quantityCommande: element.quantityCommande,
                    visuelCommande: element.visuelCommande,
                    VisuelModify:JSON.parse(localStorage.getItem("canvasSaveAs")) + '',
                    DateOrdered: currentDate.toLocaleDateString('en-US') + "",
                    OrderNumber:"#"+ this.odernumber(6)
                }
                this.commandes.push(data)
                let currentClient = JSON.parse(localStorage.getItem("shippingAdress"))
                console.log(currentClient)
                this.idClient = currentClient.idClient
            })
        }
       
       
        this.chooseBankMode = document.querySelectorAll(".bank")
        this.resumeShowActive(index = 0)
    },
})