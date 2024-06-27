/*Synchronous functions execute tasks sequentially, one after the other. 
Each operation must complete before the next one starts.
Asynchronous functions, on the other hand, allow your program to start a 
task and then move on to other tasks before the first one finishes. 
/*
function sum(n){
    let a=0;
    for(let i =0;i<=n;i++){
        a=a+i;
    }
    return a;

}
//two things are happening simulatenously
setTimeout(findsum,100)
function findsum(){
   console.log( sum(5));
}


console.log("hello ji")

*/
//RUN ON LATENTFLIP FOR BETTER UNDERSTANDING


console.log("mai pehle")

setTimeout(function(){
    console.log("hello from 1st timeout")

},2000)

setTimeout(function(){
    console.log("hello from 2nd timeout")

},1000)

let a=0;
    for(let i =0;i<=10000;i++){
        a=a+i;
    }
    console.log(a);


/*
console.log(1)
setTimeout(function(){
    console.log(2)
},0);
console.log(3)
*/