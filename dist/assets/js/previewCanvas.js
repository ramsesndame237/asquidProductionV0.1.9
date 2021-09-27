var app = new Vue({
    el:'#previewImageFinal',
    data() {
        return {
            dataSourceImage:''
        }
    },
    mounted() {
        if(window.localStorage.getItem("imageToPreview") != null && window.localStorage.getItem.length > 0){
            this.dataSourceImage = JSON.parse(window.localStorage.getItem("imageToPreview"))
        }
    },
})