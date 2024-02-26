//task-2 (base)
const obj = {
    item: 'some value',
    logger: logger
}

function logger () {
    console.log(`I output only external context: ${this.item}`);
}

//first
obj.logger();
//second
logger.bind(obj)();
//third
logger.call(obj);
//fourth
logger.apply(obj);

//task-1 (advanced)
Function.prototype.customBind = function (obj, ...args) {
    const thisFunc = this;
    return function () {
      thisFunc.apply(obj, [...args]);
    };
};

