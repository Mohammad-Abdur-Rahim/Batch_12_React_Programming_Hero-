// String & Object ....................

const subject ='javascript';
let reverse = '';

// for(const subjects of subject){
//     reverse = subjects + reverse ;
//     // console.log(subjects);
// }
// console.log(reverse);



for(let i =0 ; i<subject.length ; i++){
    const letter = subject[i]
 reverse = letter + reverse ;
}
console.log(reverse);


const letter = 'Hello';
const rev = letter.split('').reverse().join('');
console.log(rev);


