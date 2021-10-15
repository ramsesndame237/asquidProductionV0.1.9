var app = new Vue({
    el:'#contactZone',
    data() {
        return {
            success: false,
            welcome:false,
        }
    },
    methods: {
        sendMessage() {
            this.activeModal()
            this.welcome = false
            this.success = true
        },
        activeModal() {
              var modal = document.getElementById("myModal");
            console.log(modal)
            modal.style.display = "block";

        // Get the <span> element that closes the modal
            var span = document.querySelector(".close");
            
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
        
    },
    mounted() {
        this.activeModal()
        var modal = document.getElementById("myModal");
        this.welcome = true
        
         setTimeout(() => {
       modal.style.display = "none";
     }, 2500);
    },
})