function simplesum(a,b,arrsum){
   var ans = arrsum(a,b)
   return ans
}
function sum(a,b){
    return a+b
}

var value=simplesum(2,3,sum)
console.log(value)