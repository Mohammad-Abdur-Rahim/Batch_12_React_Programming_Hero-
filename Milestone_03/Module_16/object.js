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


// Loop Object Access...................

for(const prop in person){
    console.log(prop);
    console.log(person[prop]);
}