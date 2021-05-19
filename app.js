var config          = require("./config");
var express         = require("express");
var vueServerRender = require('vue-server-renderer');
var fs              = require('fs');
var path            = require('path');
var app             = express();

var serverBundle    = require('./public/vue-ssr-server-bundle.json');
var template        = fs.readFileSync(path.resolve(__dirname, './public/index.ssr.html'), 'utf8');
var clientManifest  = require('./public/vue-ssr-client-manifest.json');
var render          = vueServerRender.createBundleRenderer(serverBundle, {template, clientManifest});

app.get('/', (req, res) => {
    render.renderToString({url: req.url}, (err, html) => {
        if(err) console.log(err);
        if(config.production){
            html = html.replace(/\n/g,"");
            html = html.replace(/> </g,"><");
        }
        return res.send(html);
    })
})

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {
    render.renderToString({url: req.url}, (err, html) => {
        if(err) console.log(err);
        if(config.production){
            html = html.replace(/\n/g,"");
            html = html.replace(/> </g,"><");
        }
        return res.send(html);
    })
})

app.listen(config.server.port, ()=>console.log("Server runing http://localhost:"+config.server.port));