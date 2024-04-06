require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const routes = require('./routes/productRoutes')

const server = express();

server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use(cors()); 
server.use(express.json()); 
server.use('/product',routes.router);
//if we have given links in font end those will not be identifies in backend so use this to resolve the solution
//By using * --> this is like an wildcard entry whenever we are trying to find any page that we are given routes in fronend /addCard or /getForm first it will checks at backend side and then if it is not there it will serch in the path where we have provided in path.resolvr __dirname...........
server.use('*', (req, res) => {
    //this will somewhere creates errors in different os like windows and linux so its better to use path
    //res.sendFile(__dirname+'/build/index.html')
    res.sendFile(path.resolve(__dirname,'build','index.html'))
});
server.listen(process.env.port,(req,res)=>{
    console.log("server started..."); 
})  

   