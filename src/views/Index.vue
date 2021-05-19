<template>
<div>
    <h1>oko ko ko k</h1>
    <h2>oko ko ko k</h2>
</div>
</template>

<script>
export default {
    asyncData({api}){
        var result = {
            title: "title",
            meta:[
                {name: "keywords", content:"srr"},
                {name: "title", content:"title"},
                {name: "description", content:"description"},
                {name: "image", content:"image"}
            ]
        };
        return new Promise((resolve, reject)=>{
            api.get("/v1/category/11").then(response=>{
                result.title = "theanh";
                return resolve(result);
            }).catch(error=>resolve(result));
        });
    },
    metaInfo(){
        return {
            title: this.seo.title,
            meta:[
                {name: "keywords", content: "Chuyển phát nhanh, Gửi Hàng đi nước ngoài"},
                {name: "title", content: "Chuyển phát nhanh, Gửi Hàng đi nước ngoài"},
                {name: 'description', content: 'Chuyển phát nhanh DHL đi Pháp (France); chuyển phát nhanh DHL quốc tế; chuyển phát nhanh đa quốc gia; chuyển phát nhanh đi Pháp uy tín.' },
                {name: "og:site_name", content: "https://rongvietexpress.vn"},
                {name: "og:title", content: "Chuyển Phát Nhanh DHL Đi Pháp"},
                {name: "og:description", content: 'Chuyển phát nhanh DHL đi Pháp (France); chuyển phát nhanh DHL quốc tế; chuyển phát nhanh đa quốc gia; chuyển phát nhanh đi Pháp uy tín.'},
                {name: "og:image", content: "/public/img/article.jpg"}
            ]
        }
    },
    data(){
        return {
            seo:{
                title: "title",
                meta:[
                    {name: "keywords", content:"srr"},
                    {name: "title", content:"title"},
                    {name: "description", content:"description"},
                    {name: "image", content:"image"}
                ]
            }
        }
    },
    mounted(){
        setTimeout(()=>this.seo.title="theanhit", 200);
    }
}
</script>

<style lang="scss" scoped>
h1{
    color: red;
}
h2{
    color: wheat;
}
</style>