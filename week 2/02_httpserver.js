
const express=require("express") //express module returns a function i.e we gor access to express func
const port=3000

const app=express(); //app is new express application object

//1.  app object bind it to port u want ur server to listen for socket connection
app.listen(port,()=>{
    //this callback is executed, once we successfully,bind out object to port
    // and start listenig to new connection

    console.log("server started at port ${port}")
});
// listen method take 2 parameter :
// a) port number
// b) callback func

// 2. now define the routes:

app.get('/ping',function(req,res){
    //if somebody hits localhost:3000/ping from this machine(postman), we will execute this call
    // request object contains details about incoming req, details like query params, body params
    console.log('ping received') // this log(ping) will received on server but postman will have no response bz we have not sent back response
    res.json({message:'PING RECEIVED'}); //this will semd response back to client
});  // get take 2 argument . 1 -> route as string , 2-> callback

//////////////////////////////////////////////////////

/* Now what if client has to send the data */