var app = new Vue({
    el: '#account',
    data() {
        return {
            chooseTitleProfile: [],
            YearList: [],
            YearsChoose: '',
            dropChooseYear: false,
            coditionToShow:'personal'
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
        YearItem(items) {
            this.YearsChoose = items
          this.dropChooseYear = false  
        },
        showProfileTitleActive(n) {
              for (var i = 0; i < this.chooseTitleProfile.length; i++) {
                this.chooseTitleProfile[i].classList.remove("activeTitle")
              }
            if (n == 0) {
                this.coditionToShow = 'personal'
            } else if (n == 1) {
                this.coditionToShow = 'aboutCar'
            }

            this.chooseTitleProfile[n].classList.add("activeTitle")
        }
    },
    mounted() {
        this.chooseTitleProfile = document.querySelectorAll(".titleProfile")
        this.showProfileTitleActive(0)
           let currentYear = new Date().getFullYear();
            let earliestYear = 1870;

        while (currentYear >= earliestYear) {
                this.YearList.push(currentYear)
                currentYear -= 1;
            }
    },
   
  })
