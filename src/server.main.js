import axios from "axios";
import config from "../config.json";
var api = axios.create({baseURL: config.api});
import createApp from "./main";

var seo = {
    data:{
        title:"",
        meta:[]
    },
    render(){
        var title = this.data.title ? `<title>${this.data.title}</title>` : "";
        var meta = this.data.meta.reduce((res,obj)=>{
            return res+`<meta name="${obj.name}" content="${obj.content}" />`
        },"");
        return title+meta;
    }
};

export default (context) => {
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp();
        router.push(context.url);
        router.onReady(() => {
            const components = router.getMatchedComponents();
            Promise.all(components.map(component => {
                if (component.asyncData) return component.asyncData({api: api});
            })).then(response => {
                seo.data.title = response.length ? response[response.length-1].title : "";
                seo.data.meta = response.length ? response[response.length-1].meta : [];
                context.seo = {...seo};
                context.state = store.state;
                resolve(app);
            })
        }, reject);
    });
}