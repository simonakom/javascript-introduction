//objektinis programavimas 

//objekto notacija = {} , o tai kas viduje - objekto savybes
const objektas = { 
    spalva: "roudona", //property: "reiksme"
 
    //objektai gali tureti funkcijas:
    //1 budas
    sayHello() { 
        console.log("hello");
    },

    //2 budas
    hello: () => {
        console.log("hello");
    },

    //3 budas
    hi: function () {
        console.log("hi");
    },
};
objektas.sayHello (); //funkcijos iskvietimas



//-------------------------Klases - sablonas objektui------------------------
//objektai kuriami pasinaudojus klase

class Person {
    //su konstruktorium - nereikalingi laukeliai
    // name;
    // height;
    // nationality = "Lithuanian";

    //statiniai laukai (skirtas visiems zmonems )
    static countOfPeople = 0; //skaiciuoja kiek is vizo yra zmoniu

    //kiekviena klase turi tureti constructor (function) - viduje nurodomos pradines reiksmes kad susigeneruoti pradini objekta. 
    constructor(name, height) { //paskirtis: nusatyti objekto laukus
        //funkcija iskvieciama susikuriant naujam objektui
        console.log("name:" + name);
        console.log("height:" + height);

        //nustatyti laukeliu reiksmes: po = yra parametrai
        this.name = name; 
        this.height = height;
        this.nationality = "Lithuanian"; 

        //Kreipimasis i statini laukeli (kiekvienam zmogiui susikurus countof people dideja)
        Person.countOfPeople++
    }

    //klasem kuriamos funkcijos: kitaip vadinamas -metodas- (gali buti iskviestas is objekto)
    hola () 
    {
        console.log(`hello, my name is ${this.name}`);
    }

    //statinis metodas: skirtas ne objektui (petras/egle) o visai klasei (visiems objektams) pvz. "Figure" 
    static countArea (height, width) {
        console.log( height * width);
    } 
}

//petras-objektas, Person - jo sablonas
// -metodas- iskvieciamas susikuriant naujam objektui ();
const petras = new Person ("Petras", 1.97);
console.log(petras);
const egle = new Person ("Egle", 1.71);
console.log(egle);

//objekto metodu panaudojimas
petras.hola();
egle.hola();

// statinis -metodas- iskvieciamas 
Person.countArea(4, 5);

console.log(Person.countOfPeople);

