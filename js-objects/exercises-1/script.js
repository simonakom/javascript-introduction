//objektinis programavimas 

const objektas = { 
    spalva: "roudona", 
    //1 option
    sayHello() { 
        console.log("hello");
    },
    //2 option
    hello: () => {
        console.log("hello");
    },
    //3 option
    hi: function () {
        console.log("hi");
    },
};
objektas.sayHello (); 


//-------------------------Class-Object------------------------
class Person {
    static countOfPeople = 0; 

    constructor(name, height) { 
        console.log("name:" + name);
        console.log("height:" + height);

        this.name = name; 
        this.height = height;
        this.nationality = "Lithuanian"; 

        Person.countOfPeople++
    }
    hola () 
    {
        console.log(`hello, my name is ${this.name}`);
    }

    static countArea (height, width) {
        console.log( height * width);
    } 
}

const petras = new Person ("Petras", 1.97);
console.log(petras);
const egle = new Person ("Egle", 1.71);
console.log(egle);

petras.hola();
egle.hola();


Person.countArea(4, 5); // Static 

console.log(Person.countOfPeople);

