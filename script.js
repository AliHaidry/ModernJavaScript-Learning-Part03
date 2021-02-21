/** Constructors & the 'this' Keyword */

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
 function Person(name, age, dob)
 {
     this.name = name; // this keyword is very important and what this does is it refers to the current instance of the object.
     this.age = age;
     this.birthDate = new Date(dob)
     this.calculateAge = function()
     {
         const difference =Date.now() - this.birthDate.getTime();
         const ageDate = new Date(difference);
         return Math.abs(ageDate.getUTCFullYear() - 1970); // common formula to calculate age from the birthdate.
     }
 }

 const brad = new Person('Brad',35, '2/25/1980');
 const john = new Person('John',31, '1/25/1991');
 console.log(brad);
 console.log(john.calculateAge());