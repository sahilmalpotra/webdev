const fs= require("fs")
console.log("punjabi agge")


fs.readFile("a.txt","utf-8",function(err,data){
    console.log(err)
    console.log(data)
})
console.log("punjabi challe ghara nu")