// Write a JavaScript program to create a class called 'Rectangle'
// with properties for width and height.
// Include two methods to calculate rectangle area and perimeter.
// Create an instance of the 'Rectangle' class and calculate its area
// and perimeter.

class Rectangle {
    constructor(width, height) { 
        this.width = width; 
        this.height = height; 
    }
    calculateArea () {
        return this.width * this.height
     }
     calculatePerimeter () {
        return this.width * 2 + this.height * 2
     }
} 
const rectangle1 = new Rectangle (4, 5)
const rectangle2 = new Rectangle (7, 2)

console.log(rectangle1.calculateArea());
console.log(rectangle2.calculatePerimeter());

