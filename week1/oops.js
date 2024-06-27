//POITN 1: function associated with class = static function n can only b called with that class
//POINT 2: function of class can only be called on objects

class Animal {
    constructor(name,age,color){
        this.naam=name;
        this.umar=age;
        this.rang=color
    }
    static mytype(){
        console.log("jaanwar")
    }
    output(){
        console.log("my name is"+this.naam+"age is"+this.umar)
    }
}

let dog= new Animal("bruno",3,"brown")
dog.output()  //point 2
Animal.mytype()