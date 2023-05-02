
const productNum = (a,b) => a*b;

console.log('Product of two num is - ',productNum(1,3));

const student = {
    name1 : 'Shivangini',
    age : 30,
    hasHobbies : true,
    greet(){
        console.log(`Hi ${this.name1}`)
    }
};

console.log(student.greet());