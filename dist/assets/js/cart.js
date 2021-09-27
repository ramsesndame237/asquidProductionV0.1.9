var app = new Vue({
    el:'#cart',
    data() {
        return {
            dataSourceImagePreview:''
        }
    },
    mounted() {
        if(window.localStorage.getItem("imageToPreview") != null && window.localStorage.getItem.length > 0){
            this.dataSourceImagePreview = JSON.parse(window.localStorage.getItem("imageToPreview"))
        }
    },
})