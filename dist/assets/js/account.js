var app = new Vue({
    el: '#account',
    data() {
        return {
            chooseTitleProfile: [],
            YearList: [],
            commande:[],
            YearsChoose: '',
            connected: false,
            dropChoose:false,
            username: '',
            id:'',
            dropChooseYear: false,
            coditionToShow: 'personal',
                        baseUri:'https://adsquid.herokuapp.com/api/',
            user: {
                email: "",
                password: "",
                name:  "",
                lastName: "",
                companyName: "",
                tel1:"" ,
                tel2:"" ,
                tel3:"" ,
                city:"" ,
                state: "",
                postcode: "",
                brand: "",
                model: "",
                years: ""
            },
             brandChooseList: [
                    {id:'1',value:"Mercedes-Benz"},
                    {id:'2',value:"Peugeot"},
                    {id: '3', value:"Citroen"},
                    {id:'4',value:"Jeep"},
                    {id:'5',value:"Nissan"},
                    {id:'6',value:"Suzuki"},
                    {id:'7',value:"Hundai"},
                    {id:'8',value:"Audi"},
                    {id:'9',value:"Opel"},
                    {id: '10',value: "Toyota" },
                    {id:'11',value:"Holden"}
            ],
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
          brandItem(itemId, value) {
         console.log(itemId)
            this.user.brand = itemId
            this.dropChoose = false
      },
        YearItem(items) {
            this.user.years = items
          this.dropChooseYear = false  
        },
        async updateUser(emailUser, passwordUser) {
            let user = {
                email: emailUser,
                password:passwordUser
            }
            await axios.post(this.baseUri + "auth/signin", user).then((response) => {
                console.log(response)
                localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken))
                localStorage.setItem("refreshToken", JSON.stringify(response.data.refreshToken))
                this.username = response.data.name
                this.itemTextToShow = ""
                localStorage.setItem("userInfomation",JSON.stringify(response.data))
                this.connected = true
                localStorage.setItem("connect",this.connected)
                var modal = document.getElementById("myModal");
                modal.style.display = "none";

                
            }).catch((error) => {
                console.log(error)
                console.log(axios)
            })
        },
        showProfileTitleActive(n) {
              for (var i = 0; i < this.chooseTitleProfile.length; i++) {
                this.chooseTitleProfile[i].classList.remove("activeTitle")
              }
            if (n == 0) {
                this.coditionToShow = 'personal'
            } else if (n == 1) {
                this.coditionToShow = 'history'
            }

            this.chooseTitleProfile[n].classList.add("activeTitle")
        },
        async userUpdate() {
            await api.put(this.baseUri + "user/updateUser" + this.id,this.user).then((response) => {
                console.log(response)
                this.updateUser(this.user.email,this.user.password)
            }).catch((error) => {
                console.log(error)
                console.log(this.user)
           })
            
        }
    },
    mounted() {
          if (JSON.parse(localStorage.getItem('User')) != null && localStorage.getItem('User').length > 0) {
            let userInfo = JSON.parse(localStorage.getItem('User'))
            this.username = userInfo[0].Fname 
            this.connected = true
            console.log(userInfo[0].Fname)
          }
        axios.get(this.baseUri + "commandes").then((response) => {
            this.commande = response.data
        }).catch((error) => {
            console.log(error)
        })

        this.connected = localStorage.getItem("connect")
        let localUser = JSON.parse(localStorage.getItem("userInfomation"))
        console.log(localUser)
        this.id = localUser.id
        this.user.name = localUser.name
        this.user.lastName = localUser.lastName
        this.user.tel1 = localUser.tel1
        this.user.tel2 = localUser.tel2
        this.user.tel3 = localUser.tel3
        this.user.years = localUser.years
        this.user.email = localUser.email
        this.user.brand = localUser.brand
        this.user.model = localUser.model
        this.user.state = localUser.state
        this.user.city = localUser.city
        this.user.postcode = localUser.postcode
        this.user.companyName = localUser.companyName

        this.chooseTitleProfile = document.querySelectorAll(".titleProfile")
       this.coditionToShow = JSON.parse(localStorage.getItem('typeAccount'))
        this.showProfileTitleActive(0)
           let currentYear = new Date().getFullYear();
            let earliestYear = 1870;

        while (currentYear >= earliestYear) {
                this.YearList.push(currentYear)
                currentYear -= 1;
            }
    },
   
  })
