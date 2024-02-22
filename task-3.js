'use strict';
//task-1
//first method
const counter1 = {
    count: 1,
};

//second method
const counter2 = new Object();
counter2.count = 1;

//third method
class Counter {
    constructor(count) {
        this.count = count;
    }
}
const counter3 = new Counter(1);

//fourth method
const counter4 = Object.create(counter1);

//fifth method
function createCounter (count) {
    this.count = count;
}
const counter5 = new createCounter(1);

//sixth method - copy
const counter6 = Object.assign(counter1);


//task-2
//first method (deep)
const counter1Copy1 = JSON.parse(JSON.stringify(counter1));

//second method (shallow)
const counter1Copy2 = Object.assign(counter1);

//third method (shallow)
const counter1Copy3 = counter1;

//fourth method (deep)
const counter1Copy4 = structuredClone(counter1);

//fifth method (shallow)
const counter1Copy5 = {...counter1};


//task-3
//first method
function makeCounter1 () {

}

//second method
const makeCounter2 = function () {

}

//third method
const makeCounter3 = function makeCounter3InnerRef () {

}

//fourth method
const makeCounter4 = () => {

}

//fifth method
const arr1 = [1, 2, 3]
arr1.forEach(elem => elem * 5);

//sixth method
function makeCounter5 (callback) {

}

//seventh method
(function () {

})();


//task-1 advanced
function reverseStr (str) {
    return str.split('').reverse().join('');
}


//task-2 advanced

const deepEqual = (obj1, obj2) => {
    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);

    if (objKeys1.length !== objKeys2.length) {
        return false;
    }

    for (const key of objKeys1) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        const isObjects = (value1 !== null && typeof value1 === "object") && (value2 !== null && typeof value2 === "object");
        console.log(isObjects);

        if ((isObjects && !deepEqual(value1, value2)) || (!isObjects && value1 !== value2)) {
            return false;
        }
    }
    return true;
};

