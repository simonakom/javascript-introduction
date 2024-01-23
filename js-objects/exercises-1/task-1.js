// Write a JavaScript program to create a class called 'Rectangle'
// with properties for width and height.
// Include two methods to calculate rectangle area and perimeter.
// Create an instance of the 'Rectangle' class and calculate its area
// and perimeter.

class Rectangle {
    constructor(width, height) { 
        this.width = width; 
        this.height = height; 

    // 1 budas:susigeneruojami papildomi laukai in constructor:
        // this.area = width * height
        // this.perimeter = width * 2 + height * 2; //2*(width*height)
    }

    //2 budas: metodai
    calculateArea () {
        return this.width * this.height
     }
     calculatePerimeter () {
        return this.width * 2 + this.height * 2
     }

    //3 budas: getter funkcija 
    // get area () {
    //     return this.width * this.height
    // }
    // get perimeter () { //naudojamas kad aprasyti trukstama property kurio nera konstruktoriuje
    //     return this.width * 2 + this.height * 2
    // }
} 
const rectangle1 = new Rectangle (4, 5)
const rectangle2 = new Rectangle (7, 2)

// 1. budas 
// console.log(rectangle1.area); 
// console.log(rectangle2.perimeter); 
// 2. budas 
console.log(rectangle1.calculateArea());
console.log(rectangle2.calculatePerimeter());
// 3. budas 
// console.log(rectangle1.area);
// console.log(rectangle1.perimeter);


