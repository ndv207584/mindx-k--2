// Bài 1
const arr1 = [1,2,3,4,5,6];
const arr1_2 = [3,4,8,9,12];
const result = arr1.filter(x => arr1_2.includes(x));
console.log(result);

// Bài 2
const arr2 = [1,7,9,2,5,3,8];
arr2.sort();
const first= arr2[arr2.length - 1];
const second = arr2[arr2.length - 2];
const sum = [first, second];
console.log(sum);

// Bài 3
const arr3 = [1,7,9,2,5,3,8];
const sum2 = 10;
let obj = [];
for(i = 0; i < arr3.length; i++){
    for(let j = i + 1; j < arr3.length; j++){
        if(arr3[i] + arr3[j] == sum2 && arr3[i] !== arr3[j]){
            obj.push([arr3[i], arr3[j]]);
        }
    }
}
const finalArr = [...new Set(obj)];
console.log(finalArr);

// Bài 4
const arr4 = [1,2,3,1,2,3,4,5,6,4];
const obj_4 = [];
for(i = 0; i < arr4.length; i++){
    for(j = 0; j < arr4.length; j++){
        if(arr4[i] != arr4[j]){
            obj_4.push(arr4[i], arr4[j]);
        }
        break;
    }
}
const arr4final = [...new Set(obj_4)];
console.log(arr4final);

// Bài 5
const arr5_1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr5_2 = [3, 5, 9, 10, 88];
const arr5_3 = arr5_1.filter(x => arr5_2.includes(x));
const arr5Final = [...new Set(arr5_3)];
console.log(arr5Final);

// Bài 6
const arr6 = [1,2,3,4,2,3,5,3,1,1,5,2,3];
const myFunc = (inputArr) => {
    const obj_6 = [];
    for(let i = 0; i < inputArr.length; i++){
        for(let j = i + 1; j < inputArr.length; j++){
            if(inputArr[i] === inputArr[j] && obj_6.indexOf(inputArr[i]) === -1){
                obj_6.push(inputArr[i]);
            }
        }
    }
    return obj_6;
};
const arr6_2 = myFunc(arr6);


// Bài 7
const myArr = ["face", "zalo", "face", "gmail", "zalo", "zalo"];
const myFunc_7 = (myArr) => {
  const result_7 = {};
  for (let el1 of myArr) {
    let frequency = 0;
    for (let el2 of myArr) {
      if (el1 === el2) {
        frequency++;
        result_7[el1] = frequency;
      }
    }
  }
  return result_7;
};

myFunc_7(myArr);

// bài 8
const arrCar = [
    { make: 'audi', model: 'r8', year: '2012' },
    { make: 'audi', model: 'rs5', year: '2013' },
    { make: 'ford', model: 'mustang', year: '2012' },
    { make: 'ford', model: 'fusion', year: '2015' },
    { make: 'kia', model: 'optima', year: '2012' }
];
const myFunc_8 = (make, arrCar) => {
    const result_8 = {};
    for(let car of arrCar){
        if(make === car.make){
            if(result_8[make]){
                result_8[make].push(car);
            } else{
                result_8[make] = [car];
            }
        }
    }
    return result_8;
};
console.log(myFunc_8("ford", arrCar));