//task-2 (base)
//way-1
class Person1 {
    logInfo () {
        console.log('Hello');
    }
}

class AnotherPerson1 extends Person1 {
    printInfo () {
        console.log('Hello from Another person');
    }
}

const person1 = new Person1();
const anotherPerson1 = new AnotherPerson1();

//way-2
function Person2 () {
}
Person2.prototype.logInfo = function () {
    console.log('Hello');
}
const person2 = new Person2();

//way-3
const person3 = {
    logInfo () {
        console.log('Hello');
    }
}

//task-3 (base)
class SuperPerson {
    constructor (name) {
        this.name = name;
    }

    get getName () {
        return this.name;
    }

    set setName (value) {
        this.name = value;
    }
}

class ExtraPerson extends SuperPerson {
    printSome () {
        console.log('It is method of child');
    }
}

//task-1 (advanced)
//first way
function firstSum1 (arr, total) {
    for (let i = 0; i< arr.length; i++) {
        for (let j = i + 1; j< arr.length; j++) {
            if (arr[i] + arr[j] === total) {
                return [arr[i], arr[j]];
            }
        }
    }
    return [];
}

//second way
function firstSum2 (arr, total) {
    let index = arr.length + 1;
    const mapElem = new Map();

    for (let i = 0; i < arr.length; i++) {
        let val = mapElem.get(total - arr[i]);
        if (val !== undefined) {
            index = Math.min(index, val);
            continue;
        }
        mapElem.set(arr[i], i);
    }
    if (index === arr.length + 1) {
        return [];
    }
    return [arr[index], total - arr[index]];
}


//task-2 (advanced)
//first way: получается сложность алгоритма O(n^2), так как выполняется двойной проход по массиву,
//сначала внешний, завясящий от n элементов массива, а затем внутренний, также зависящий от
//n элементов массива, в итоге получаем сложность n*n = n^2.

//second way: получается сложность алгоритма O(n*log(n)), так как выполняется проход по массиву,
//который зависит от n элементов и поиск в Map, что является log(n) - поиск в хеше,
//в итоге получаем сложность n*log(n).