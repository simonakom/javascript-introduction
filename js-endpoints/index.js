const express = require('express'); //importuoti express biblioteka: plengvina serverio sukurima,
const server = express();


server.use(express.json()); // Middleware to parse JSON in the request body (User Registration)


//---------------------------------------------Addition Endpoint-----------------------------------------------------//
// Endpoint: /addition/<number1>/<number2>
// Task: Create an API that takes two numbers as parameters and returns their sum.
// Example: /addition/1/2 should return 3.
server.get('/addition/:number1/:number2', (req, res) => {
    const number1 = +req.params.number1;  // extracting the values of number1 and number2 from the req.params object. +convert from strings to numbers (can be also parseFloat(req.params.number1)
    const number2 = +req.params.number2;

    if (isNaN(number1) || isNaN(number2)) {
        res.status(400).json({ message: "Invalid input. Provide valid numbers." });
      } else {
        const result = number1 + number2;
        res.json({ result });
      }
});
//test: http://localhost:3001/addition/1/2 


//---------------------------------------------Check If User Exists-----------------------------------------------------//
// Endpoint: /check-if-user-exists/<userId>
// Task: Implement an API that checks if a user with a given ID exists in an array. Respond with 200: true if the user exists, or 404: false if not.
// Example: /check-if-user-exists/2 should check if a user with ID 2 exists.

// Mock user data
const users = [
    { id: 1, name: 'Jurgita', email: 'jurgita@gmail.com', age: 20},
    { id: 2, name: 'Rokas', email: 'rokas@gmail.com', age: 30},
    { id: 3, name: 'Jonas', email: 'jonas@gmail.com', age: 5 }
  ];
  server.get('/check-if-user-exists/:userId', (req, res) => {
    const userId = +req.params.userId; // extracting the values of :userID + convert from string to number (parseInt(req.params.userId))

    if (isNaN(userId) || userId <= 0) {
        res.status(400).json({ message: "Invalid input. Provide a valid numeric userId." });
        return; 
      }

    const userExist = users.find(user => user.id === userId); // Check if at least one user in the users array has the specified userId.

    if (userExist) {
        res.status(200).json({ message: `User with ID ${userId} exists: ${userExist.name}, ${userExist.email},  ${userExist.age}` });
      } else {
        res.status(404).json({ message: `User with provided ID doesn't exist` });
      }
  });
//test: http://localhost:3001/check-if-user-exists/2


//---------------------------------------------Subtraction Endpoint-------------------------------------------------------//
// Endpoint: /subtract/<number1>/<number2>
// Task: Create an API to subtract the second number from the first. Include validation to ensure subtraction from zero is not allowed.
// Example: /subtract/3/0 should return Subtraction from 0 cannot be done.
server.get('/subtract/:number1/:number2', (req, res) => {
    const number1 = parseFloat(req.params.number1); // Extracting values from URL parameters + converting to number
    const number2 = parseFloat(req.params.number2);

    if (isNaN(number1) || isNaN(number2)) {
        res.status(400).json({ message: "Invalid input. Provide valid numbers." });
      } else if (number2 === 0) {     // Validate if subtraction from zero is not allowed
      res.status(400).json({ message: 'Subtraction from 0 cannot be done.' });
    } else {
      const result = number1 - number2;
      res.json({ result });
    }
  });
//test: http://localhost:3001/subtract/3/0'


//---------------------------------------------Multiplication Endpoint-------------------------------------------------------//
// Endpoint: /multiply/<number1>/<number2>
// Task: Build an API that multiplies two numbers. Handle any exceptions like multiplying by a string.
// Example: /multiply/3/4 should return 12.
server.get('/multiply/:number1/:number2', (req, res) => {
    const number1 = parseFloat(req.params.number1); // Extracting values from URL parameters + converting to number
    const number2 = parseFloat(req.params.number2);
  
    if (isNaN(number1) || isNaN(number2)) {
      res.status(400).json({ message: 'Invalid input. Provide valid numbers.' });
    } else {
      const result = number1 * number2;
      res.json({ result });
    }
  });
//test: http://localhost:3001/multiply/3/0'


//----------------------------------------------------User Registration-------------------------------------------------------//
// Endpoint: /register-user
// Task: Implement an API to register a new user. Use POST method to accept user data (like name, email) and store it in an array.
// Example: POST data to /register-user to add a new user.

const registeredUser = [];

server.post('/register-user', (req, res) => {
    const username = req.body.username  // Extracting user data from the request body
    const password = req.body.password

    if (username.length < 6 || password.length < 6) {
        res.status(400).json({ message: 'Username and password must be at least 6 characters long.' });
    } else {
    const newUser = { id: registeredUser.length + 1, username, password};  // Create a new user object
    registeredUser.push(newUser);
    res.status(201).json({ message: 'User registration successful.', user: newUser });
}
});
  //test: http://localhost:3001/register-user'


//-----------------------------------------------------String Reversal Endpoint-------------------------------------------------------//
//   Endpoint: /reverse-string/<text>
//   Task: Create an API to reverse a given string.
//   Example: /reverse-string/hello should return olleh.
server.get('/reverse-string/:text', (req, res) => {
    const text = req.params.text; //Extract the value of the 'text' parameter from the URL
    if(!isNaN(text)) res.status(400).json( { message: "Enter a word, not a number"})
    const reversedText = text.split('').reverse().join(''); //Reverse the string
    res.json({ reversedText });
  });
  //http://localhost:3001/reverse-string/simona


//-------------------------------------------------------User search in array----------------------------------------------------------//
//   Endpoint: /fetch-user/<userId>
//   Task: Build an API to fetch user details based on their ID in array.
//   Example: /fetch-user/1 should return the details of the user with ID 1.

// const users = [
//     { id: 1, name: 'Jurgita', email: 'jurgita@gmail.com', age: 20},
//     { id: 2, name: 'Rokas', email: 'rokas@gmail.com', age: 30},
//     { id: 3, name: 'Jonas', email: 'jonas@gmail.com', age: 5 }
//   ];

server.get('/fetch-user/:userId', (req, res) => {
    const userId = +req.params.userId; //Extracting values from URL parameters + converting to number (parseInt(req.params.userId);)

    if (isNaN(userId) ) {
        res.status(400).json({ message: "Invalid input. Provide valid ID number." });
        return
      }

    const foundUser = users.find(user => user.id === userId); //searches for a user with the specified ID in the users array.

    if (foundUser) {
      res.json({ user: foundUser });
    } else {
      res.status(404).json({ message: 'User not found.' });
    }
  });
  //http://localhost:3001/fetch-user/3


//-------------------------------------------------------Dynamic Query Parameters--------------------------------------------------------//
// Endpoint: /search-products
// Task: Implement an API to search for products with dynamic query parameters (like name, price range).
// Example: /search-products?name=phone&priceLessThan=1000 should return products matching these criteria.

const products = [
    { id: 1, name: 'Phone', price: 500 },
    { id: 2, name: 'Laptop', price: 1200 },
    { id: 3, name: 'Tablet', price: 300 },
  ];

  server.get('/search-products', (req, res) => {
    const name = req.query.name //Extracting  query parameters from the request URL.
    const priceLessThan = +req.query.priceLessThan
  
    let filteredProducts = products; //same array that is stored in the products variable.
    if (name) {
      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (priceLessThan) { // less or equal to the specified value 
      const maxPrice = parseFloat(priceLessThan);
      filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
    }
  
    // Respond with the filtered products
    res.json({ products: filteredProducts });
  });
//http://localhost:3001/search-products?name=phone&priceLessThan=1000 



// Start the server
server.listen(3001, () => {
    console.log("Aplikacija pasileido. Adress: http://localhost:3001/"); 
}); 