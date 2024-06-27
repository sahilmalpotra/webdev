
function square(a){
    return a*a
}
function cube(a){
    return a*a*a
}

function sumofsomething(a,b,fn){
    var v1=fn(a)
    var v2=fn(b)
    return v1+v2
}

var x=sumofsomething(2,3,square)
var y=sumofsomething(2,3,cube)
console.log(y)