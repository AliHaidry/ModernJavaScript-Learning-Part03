/****************************************** */
/** Constructors & the 'this' Keyword */
/****************************************** */

// Object Literals

// const person = 
// {
//     name: 'Ali',
//     Occupation: 'DevOps Engineer',
//     age: 27,
//     skill: ['CI/CD', 'AWS', 'DevOps Practices']
// }

//console.log(person);

/** if you want to create multiple instances of a certain type of object, 
 * then you want to go to want to create a constructor */

 // Person constructor
//  function Person(name, age, dob)
//  {
//      this.name = name; // this keyword is very important and what this does is it refers to the current instance of the object.
//      this.age = age;
//      this.birthDate = new Date(dob)
//      this.calculateAge = function()
//      {
//          const difference =Date.now() - this.birthDate.getTime();
//          const ageDate = new Date(difference);
//          return Math.abs(ageDate.getUTCFullYear() - 1970); // common formula to calculate age from the birthdate.
//      }
//  }

//  const brad = new Person('Brad',35, '2/25/1980');
//  const john = new Person('John',31, '1/25/1991');
//  console.log(brad);
//  console.log(john.calculateAge());

/****************************************** */
/** Constructors & the 'this' Keyword END*/
/****************************************** */

/****************************************** */
/** Built in constructor */
/****************************************** */

// String

// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// //name2.foo = 'bar';
// // console.log(name2);

// console.log(typeof name2);

// if(name2 === 'Jeff'){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// // Function
// const getSum1 = function(x, y){
//   return x + y;
// }

// const getSum2 = new Function('x','y', 'return 1 + 1');

// // Object
// const john1 = {name: "John"};
// const john2 = new Object({name: "John"});
// console.log(john2);

// // Arrays
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re2);

/****************************************** */
/** Built in constructor END */
/****************************************** */


/****************************************** */
/** Prototype Explained END */
/****************************************** */

//Object.prototype
//Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //   const diff =  Date.now() - this.birthday.getTime();
    //   const ageDate = new Date(diff);
    //   return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
  }
  
  // Calculate age
//   Person.prototype.calculateAge = function(){
//     const diff =  Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
  
//   // Get full name
//   Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
//   }
  
//   // Gets Married
//   Person.prototype.getsMaried = function(newLastName){
//     this.lastName = newLastName;
//   }
  
//   const john = new Person('John', 'Doe', '8-12-90');
//   const mary = new Person('Mary', 'Johnson', 'March 20 1978');
  
//   console.log(mary);
  
//   console.log(john.calculateAge());
  
//   console.log(mary.getFullName());
  
//   mary.getsMaried('Smith');
  
//   console.log(mary.getFullName());
  
//   console.log(mary.hasOwnProperty('firstName'));
//   console.log(mary.hasOwnProperty('getFullName'));
  

/****************************************** */
/** Prototype Explained END */
/****************************************** */