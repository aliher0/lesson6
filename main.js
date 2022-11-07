// var obj = {
//     username: 'aliher',
//     surname:'tolgoev',
//     age:13,
//     pol:1,
//     info:null,
//     dopInfo:undefined,
//     card: {
        
//         num: 13354747487,
//         balance: 50000,
//         valuta:'KGS'
//     }
// }
// for (var key in user) {
//     console.log(
//         key + " : " + (
//             typeof user[key] === 'object' ? JSON.stringify(user[key]) : user[key])
//        )
// }

// ФУНКЦИЯЛАРДЫН ТУРЛОРУ:
//function  declaration - определение функции



// function funcDec (arg1,) {
//     console.log(arg1)
    // console.log('Бул function declaration')
// }
// funcDec('бул аргумент 1' );
// funcDec('бул аргумент 2');
// funcDec('бул аргумент 3');
// 2 - function expression - фунциональное выражение


// var funcExp = function () {
//     console.log('бул function expression')
//}
// console.log('test')

// funcExp();

// funcDec();




// calback function - коллбек функция - функция внутри функции
// var func1 = function (func, text) {
//     func(text);
//     console.log('биринчи функция')
// }
// function func2(text2='аргумент по умолчанию') {
//     console.log('экинчи функция : ' + text2)
// }

// func1(func2, 'экинчи аргумент')

var str = 'lorem1-lorem2-lorem3-lorem4-lorem5'
var arr = str.split('-')
console.log('Строка',str)
console.log('Массив метод split(): ', arr)
console.log('Метод repeat(2): ' + str.repeat(2))
console.log('Метод массива reverse(): ' + arr.reverse())
console.log('Метод масива join(/): ' + arg1.join('/'))


// function funcDec (arg1 = 1,) {
//      console.log(arg1='1,2,3,4,5,6,7,8,9')

// var str = '1,2,3,4,5,6,7,8,9'
// var arr = str.split('-')
// console.log(' '  +  arr.reverse)





















function test(str) {
    console.log(str);
    console.log(typeof str);
    var  arr = str.split(" ");
    console.log(typeof arr);
    arr = arr.reverse();
    arr = arr.join(" ");
    console.log(arr);
}


test("1 2 3 4 5 6 7");
test("a b ")


function test2(a, b) {
    if (a > b) {
        console.log('Биринчи сан чон');
    } else {
        console.log('Экинчи сан чон');
    }
}


test2(10,5);
test2(5,10);