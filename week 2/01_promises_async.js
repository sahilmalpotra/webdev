/*like what if sanu ek async call toh jo output avve , oh sanu second function ch zroort hove,
then we use func call like this */
/*
setTimeout(function(){
    console.log ("mai ayya 1 sec baad")
    setTimeout(function(){
        console.log("mai aya 2 sec baad")
        setTimeout(function(){
            console.log("mai aya  sec baad")
        },3000)
            

    },2000)

},1000)
*/
//
function myOwnsettimrout(fn,duration){
    setTimeout(fn,duration)

}
myOwnsettimrout(function(){
    console.log("hi there")
},1000)


function promisefiedmysettimeout(duration){
    const p=new Promise(function(resolve){
        setTimeout(function(){
            resolve();

        },duration);
    })
    return p;

}
const ans=promisefiedmysettimeout(1000)
ans.then(function(){
    console.log("timeout done")
})