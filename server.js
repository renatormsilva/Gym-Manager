const { urlencoded } = require('express');
const express = require('express');
const nunjucks = require('nunjucks');
const routes = require("./routes");

const server = express();
// ter acesso aos dados do body
server.use(urlencoded({extended: true}))
// ter acesso a pasta public
server.use(express.static('public'));
// puxar os dados do arquivo routes
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
    
});


server.listen(9000, function(){
    console.log("Server is running");
});