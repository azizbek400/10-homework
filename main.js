
// 1. array ichidagi eng katta va eng kichik sonlarni topib beradigan function yarating

// const numbers = [3, 14, 4, 7];
// const result = minMax(numbers);

// function minMax(arr) {
//     if (arr.length === 0) {
//         return 'Array bo`sh';
//     }

//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) { min = arr[i]; } if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return { min, max };
// }

// console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////

// 2. array ichidagi 2 dan katta bo'lgan sonlarni boshqa array ga ko'chiring

// const numbers = [8, 2, 9, 1, 4];
// const result = moveLargerThanTwo(numbers);

// function moveLargerThanTwo(arr) {
//     const largerThanTwo = arr.filter(num => num > 2);
//     return largerThanTwo;
// }

// console.log(result); 

////////////////////////////////////////////////////////////////////////////////////////

// 3. ixtiyoriy array yarating va uning ichidagi juft va toq sonlar nechtaligini toping

// const numbers = [5, 2, 9, 4, 11];
// const result = evenandoddnum(numbers);

// function evenandoddnum(arr) {
//     let evenNum = 0;
//     let oddNum = 0;

//     for (let num of arr) {
//         if (num % 2 === 0) {
//             evenNum++;
//         } else {
//             oddNum++;
//         }
//     }

//     return { even: evenNum, odd: oddNum };
// }

// console.log(result); 

////////////////////////////////////////////////////////////////////////////////////
// 4. funtion argumentiga berilgan sonlarning yig'indisini toping spread operation   yordamida

// const result = sumNumbers(6, 2, 5, 20, 4);

// function sumNumbers(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(result);

///////////////////////////////////////////////////////////////////////////////


// 5. object ni key larini va value larini alohida array olib chiqib beradigan functionlar yarating
// value uchun alohida function
// key uchun alohida function

// const object = { name: "Aziz", age: 17, city: "O'zbekiston" };
// const keys = getKeys(object);
// const values = getValues(object);

// function getKeys(obj) {
//     return Object.keys(obj);
// }

// function getValues(obj) {
//     return Object.values(obj);
// }

// console.log(keys);
// console.log(values);

/////////////////////////////////////////////////////////////////////////////////



// 6. inputNumber() funksiyasini yozing, kiritilgan input, raqam bo’lmagan qiymat bo’lguncha prompt orqali input so’rasin. Va kiritilgan raqamlarni bitta arrayga push qilib borsin. Qachonki raqam emas qiymat kirtilsa prompt ishdan to’xtab yig’ilgan raqamlar Arrayini return qilsin. 

// const numberArray = inputNumber();

// function inputNumber() {
//     const numbers = [];
    
//     while (true) {
//     const input = prompt("stop:");
    
//     if (!isNaN(input)) {
//       numbers.push(Number(input));
//     } else {
//       break;
//     }
//     Copy
    
//     }
    
//     return numbers;
//     }
    
    
//     console.log(numberArray); 

//////////////////////////////////////////////////////////////////////////////

// masala 7

// let arr = ["1", "2", "f", "3", "4", "d", "6", "c", "7", "o"];

// const x = (value) => {
//     let newArr = [];

//     for (let i = 0; i < value.length; i++) {
//         let result = Number(value[i]);
//         if (result) {
//             newArr.push(result)
//         }
//     }
//     return newArr;
// };

// console.log(x(arr));




// masala 8

// let arr = [17, 88, 55, 98, 345, 577, 234, 11, 65, 378, 44, 100];

// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }
    
// }

// console.log(max);

    

// masala 9

// let arr = ["olma", "olcha", "anor", "gilos"];

// let result = "olcha";

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == result) {
//         arr.splice(i, 1)
//     }
// }

// console.log(arr);






