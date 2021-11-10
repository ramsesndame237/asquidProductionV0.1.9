var app = new Vue({
    el:'#phoneHome',
    data() {
        return {
            success: false,
            welcome:false,
        }
    },
    methods: {
       
        
    },
    mounted() {
        setTimeout(() => {
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                console.log("")
              }else{
                  window.location.href ="index.html"
              }
        }, 500);
    },
})