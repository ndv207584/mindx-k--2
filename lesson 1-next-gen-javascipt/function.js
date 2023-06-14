// Các loại functions trong Javascript

// 1. Function Decralaration
function sum(a, b){
    const sum = a + b;
    console.log('${a} + ${b} = ${sum}');
}

// 2. Expression function
const greeting = function (name) {
    console.log('Hello ${name}');
};

// 3. Immediately invoke function expression: IIFE
(function(){
    console.log("Hello mindx");
})();

// 4. Arrow functions
// Ko có cơ chế hoisting
const sumArrow = (a, b) => {
    const sum = a + b;
    console.log('Arrow function sum: ${a} + ${b} = ${sum}');
}

// Hình thái khác của ông arrow function

// Return về giá trị mà ko thực hiện
// thêm logic
const getSQRT = (num) => Math.sqrt(num);

// Return về object
const getPersonObject = (name, age) => ({
        name: 'My name is ${name}',
        age:'I am ${age} years old,'
});

sum(10, 15);
sumArrow(10, 14);
greeting("CIJS MindX")
console,log(getSQRT(16));
console.log(getPersonObject("CR7", 38));

// Sự khác nhau về context giữa normal function và arrow function

const person = {
    name: "CR7",
    sayHi: function (){
        console.log(this);
    },
};

const person2 = {
    name: "Messi",
    sayHi: () => {
        console.log(this);
    },
};

person.sayHi();
person2.sayHi();