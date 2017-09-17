/* ДЗ 1 - Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 */
function returnFirstArgument(arg) {
    return arg
}

/*
 Задание 2:

 Функция должна принимать два аргумента и возвращать сумму переданных значений
 Значение по умолчанию второго аргумента должно быть 100
 */
function defaultParameterValue(a, b = 100) {
    // if (!b){
    //     // !b || b = null (value was not defined at a start), undefined (forgot to input value), 0, false 
    //     b = 100
    // }
    return a + b
}

/*
 Задание 3:

 Функция должна возвращать все переданные в нее аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 */

function returnArgumentsArray() {

    let array = [];
    // i = итератор, для текушего элемента цинла
    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i]) // друг, перебери мне каждый массив элемент массива
    };
    console.log(arguments)
    return array
}

/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 */
function returnFnResult(fn) {
    // return fn - return the function it self
    // return fn(); - return the function result
    return fn();
}

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(number = 0) {
    function f() {
        number += 1 // прибавь и переопредели, запишит в туже ячейку где и взял
        return number
    }
    return f
}

// Cпобобы объявления функции
// let f = function () {}
// function f() {}

// function deloration - функция как переменная
//           expration - как выражение


/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 */

// Таки же методы у функции как push у массива
// bind - переопределяет контент и не вызывает      (НУЖНО предать не массив)
// call - переопределяет и вызывает                 (НУЖНО предать не массив)
// apply - переопределяет на массив и вызывает      (НУЖНО передать массив объвектов)

function bindFunction(fn) {
    // arguments - место хранение передаваемых элиментов фунции 
    for (let i = 1; i < arguments.length; i++) { // i = 1; ибо функция замкнута сама на себя, то есть берем 2-ой элимент
        fn = fn.bind(null,arguments[i]) // null, сохраняет ранее заданые элементы
    }
    return fn
}

export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}