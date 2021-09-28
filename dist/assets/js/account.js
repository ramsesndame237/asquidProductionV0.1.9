var app = new Vue({
    el: '#account',
    data() {
        return {
            chooseTitleProfile:[]
        }
    },
    methods: {
        /**
         * function pour l'activation du titre correspondant
         */
        activeTitle(n) {
            this.showProfileTitleActive(this.indx = n)
            console.log(n)
        },
        showProfileTitleActive(n) {
              for (var i = 0; i < this.chooseTitleProfile.length; i++) {
                this.chooseTitleProfile[i].classList.remove("activeTitle")
            }

            this.chooseTitleProfile[n].classList.add("activeTitle")
        }
    },
    mounted() {
        this.chooseTitleProfile = document.querySelectorAll(".titleProfile")
    },
   
  })
