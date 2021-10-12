var app = new Vue({
    el:'#previewImageFinal',
    data() {
        return {
            dataSourceImage: '',
            checkidt: false,
            carts: [],
            numberofCar: 0,
            AddCart:false,
        }
    },
    methods: {
        editAgain() {
            localStorage.setItem("editAgain",'true')
            window.location = "../../../customiser2.html"
        },
        myCart() {
            console.log("okay")
            var modal = document.getElementById("myModal");
            modal.style.display = "none";

            setTimeout(() => {
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
                
            }, 1000);
        },
        
        checkCart() {
            this.AddCart = true
                // Get the modal
            var modal = document.getElementById("myModal");
            // Get the <span> element that closes the modal
                // var span = document.getElementsByClassName("close")[0];
                
                // When the user clicks the button, open the modal 
                console.log(modal)
                modal.style.display = "block";

            // When the user clicks on <span> (x), close the modal
            // span.onclick = function() {
            // modal.style.display = "none";
            // }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            }
        }
    },
    mounted() {
        if(window.localStorage.getItem("imageToPreview") != null && window.localStorage.getItem.length > 0){
            this.dataSourceImage = JSON.parse(window.localStorage.getItem("imageToPreview"))
            localStorage.setItem("editAgain", 'false')
            
        }
    },
})