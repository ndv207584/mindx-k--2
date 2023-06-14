// let, const - var
/* 
    Giống nhau:
        + Khai báo biến

    Khác nhau:
        + scope hoạt động
            . let, const => block scope
            . var => function, global scope
        + cơ chế hoisting
            . var => có cơ chế hoisting
            . let, const => không có
        + re-assign
            . let, var => có thể gán lại giá trị mới (re-assign)
            . const => Không thể gán lại
*/

// Demo về scope
// {
//     {
//         let  b = 10;
//         var a = 5;
//         console.log("Giá trị của b là:", b);
//     }
//     console.log("Giá trị của a là:", a);
// }

// Demo hoisting
// function greeting() {
//     var name;
//     const isMale = true;

//     console.log(name);
//     name = "Peter"; // Biến name được đưa lên đầu scope(hoisting)
//     // let name = "Peter";

//     if(isMale){
//         console.log("Hi Bro", name);
//     } else {
//         console.log("Hi Sis");
//     }
// }
// greeting();

// re-assign
const PI = 3.24;
PI = 3.14142;
console.log("Hằng số PI là:", PI);