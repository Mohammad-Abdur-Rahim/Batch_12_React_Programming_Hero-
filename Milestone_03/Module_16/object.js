//  Object ....................

const person ={
    name : 'Md Abdur Rahim',
    age: 25,
    profession : 'Website Developer',
    salary : 45000,
    married : false ,
    date : '21 September 2026',
    nestedObject : {
        company : 'Notionhive',
        possition : 'Wordpress developer',
        location : 'Uttara sector 11',
    }
};


// Nested Object Access...................

console.log(person.nestedObject.company);
console.log(person.nestedObject['possition']);