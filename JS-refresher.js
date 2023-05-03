
// const student = {
//     name1 : 'Shivangini',
//     age : 30,
//     hasHobbies : true,
//     greet(){
//         console.log(`Hi ${this.name1}`)
//     }
// };

// const studName = (s) => {
//     console.log(s.name1);
// }
// studName(student);


// const copiedStudent = {...student};
// console.log(copiedStudent);

// const hobbies = ['Shopping','Cooking'];

// // console.log(hobbies.map(hob => 'hobby : '+hob));
// // console.log(hobbies);

// const copiedHob = [...hobbies];
// console.log(copiedHob);

// const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

// console.log(fruits.map(fruit => {
//     if(fruit==' '){
//         return 'empty string';
//     } else {
//         return fruit;
//     }
// }));






async function order(){
    console.log('a');

console.log('b');

const c = await new Promise((resolve,reject) => {
    setTimeout(() => resolve('c'), 3000)
});

// const out = await c;
console.log(c);

const d = await new Promise((resolve,reject) => {
    setTimeout(() => resolve('d'), 0)
});
 console.log(d);

console.log('e');
}

order();
