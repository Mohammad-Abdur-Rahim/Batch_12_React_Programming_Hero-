//  Object ....................

const person ={
    name : 'Md Abdur Rahim',
    age: 25,
    profession : 'Website Developer',
    salary : 45000,
    married : false ,
    date : '21 September 2026'
};

person.salary = 245000 ; 
person['age'] = 27                      // object value update system dot/[]

// console.log(person);
console.log(person.name);            // Dot Notation...
console.log(person['age']);         // Bracket notation best practice...
console.log(person['salary']);     // Bracket notation best practice...
