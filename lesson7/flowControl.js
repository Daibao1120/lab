// This page is description about javascript's flow control
// The usage shows as below

// *for loop
const array = [8, 7, 6, 5, 4, 3, 2, 1, 0];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// array.forEach((d, i) => {
//     console.log(`陣列第${i}個元素是${d}`);
// });

// *while loop

// while (array.length > 0) {
//     if (array[array.length - 1] === 4) continue;
//     console.log(array.pop());
// }
// console.log(array);

// while(true){
//     // ...
// }

// let http = 404;
// switch (http) {
//     case 200:
//         console.log("Not found!!!");
//         break;
//     case 404:
//         console.log("error!!!");
//         break;
//     default:
//         console.log("this is default!!!");
// }

// let myValue = 2.142857142857143;
// const carryWay = "無條件捨去";
// switch (carryWay) {
//     case "無條件捨去":
//         console.log(Math.floor(myValue));
//     case "四捨五入":
//         console.log(Math.round(myValue));
//     case "無條件進位":
//         console.log(Math.ceil(myValue));
// }

// try catch
try {
    const myValue = 10;
    myValue = 11;
    console.log(myValue);
} catch (error) {
    console.log("something error!!!");
    console.log(error);
} finally {
    console.log("this is finally log!!!");
}
console.log("程式還活著！！！");
