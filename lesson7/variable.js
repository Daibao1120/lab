// This page is description about javascript's variable.
// javascript has four kinds of variables declaration.
// The usage shows as below...
temp1 = "1";
var temp2 = "2";
let temp3 = "3";
const temp4 = "4";

temp = 1;
temp = temp + 1;
temp++;
temp += 1;
// console.log(temp);

test = "1";
// 加一個 ＋ 號 換型別
// console.log(+test + 1);

// var：不會受限在代碼塊區域（block scope）內，可能會汙染全域變數。不管哪個作用域(Scope)都可以存取，可以重複宣告。
// let：所宣告的變項只有在代碼塊區域（block scope）內有效，不會產生全域變數，無法在同一層 Block 重複宣告變數
// const：具備 let 所有的特性。在一宣告時就必定要指定給值，不然會產生錯誤，宣告後不能更改值

// int, float, double, decimal, long, long long 型態number
let myNumber = 15;
// console.log(myNumber / 2);
// console.log(Math.pow(myNumber, 2));
// console.log(Math.round(myNumber / 2));
// console.log(Math.floor(myNumber / 2));
// console.log(Math.ceil(myNumber / 2));
// console.log("---------------------");
// console.log(myNumber / 7);
// console.log(Math.pow(myNumber, 7, 3));
// console.log(Math.round(myNumber / 7));
// console.log(Math.floor(myNumber / 7));
// console.log(Math.ceil(myNumber / 7));
// round：四捨五入 floor：無條件捨去 ceil：無條件進位

let input = 2.142857142857143;

const showNdecimal = (input, n, maker) => {
    // code here ...
    input = input * 10 ** n;
    input = maker(input);
    input = input / 10 ** n;
    // return maker(input * 10 ** n) / 10 ** n
    return input;
};
let m = 5;
console.log(input);
console.log(showNdecimal(input, 5, Math.round));

// Variable Naming Rules
// add two numbers
// 1. Camel Case => addTwoNumbers
// 2. Snake Case => add_tow_numbers
// 3. Pascal Case => AddTwoNumbers
