const age=[3,4,55,4];
let maxage=age[0];

for(let i=1;i<age.length;i++){
    if(age[i]>maxage){
        maxage=age[i];
       
    }
       

}
console.log(maxage);

////////////////////////////////////////////////////////////////

const user1={
    firstname:"sahil",
    age:23
}
console.log(user1["firstname"])

const user2=[
    {
        firstname:"sahil",
        age:16
    },{
        firstname:"dell",
        age:23
    },
    {
        firstname:"malpotra",
        age:25
    }
]

for(let i =0;i<user2.length;i++){
    if(user2[i]["age"]>18)
        console.log(user2[i]["firstname"])
}





