function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};

function SubType(){
    this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function(){
    return this.subproperty;
};

function SubSubType(){
    this.subsubproperty = false;
}

SubSubType.prototype = Object.create(SubType.prototype);
SubSubType.prototype.getSubSubValue = function(){
    return this.subsubproperty;
}
SubSubType.id = 1;

var instance = new SubType();
// console.log(instance.getSuperValue());

// console.log(instance instanceof Object);
// console.log(instance instanceof SuperType);
// console.log(instance instanceof SubType);

var instance2 = new SubSubType();
// console.log(instance2.getSuperValue());
// console.log(SubSubType);

// console.log(instance2 instanceof Object);
// console.log(instance2 instanceof SuperType);
// console.log(instance2 instanceof SubType);
// console.log(instance2 instanceof SubSubType);

// console.log(Object.prototype.toString.call(instance2));
// console.log(Object.prototype.toString.call([]));

var dict = new Object();
dict.alice = 34;
dict.bob = 24;
dict.chris = 62;

//console.log(Object.getOwnPropertyNames(dict).map(name=>name));

function asyncFunction(callback){
    var result = ["a", "b", "c"];

    setTimeout(callback.bind(null, result), 0);
    
    return;
}

function callbackFunction(arr){
    console.log(arr);
}

//console.log("calling asyncFunction");
//asyncFunction(callbackFunction);
//console.log("test");

// var a = [[1], [2], [3]];
// var b = [...a];
// console.log(a);
// console.log(b);
// var tmp = b.shift();
// console.log(a);
// console.log(b);
// console.log(tmp);
// tmp.shift();
// console.log(a);

function tmp(...args){
    console.log("--", (1>2 || 1>2?(()=>3):(()=>1)));
    console.log("++", (1<2 || 1>2?(()=>3):(()=>1)));
    return (1>2 || 1>2?(()=>3):(()=>1))(...args);
}

// console.log(tmp(22));

const partialCurryingByBind = (fn) => {
    console.log("fn.length", fn.length);
    if (fn.length === 0){
        console.log("returning function that can be called");
        return fn();
    } else {
        console.log("returning function that takes some or all arguments\n");
        return (...pp) => {
            var tmpFn = fn.bind(null, ...pp);
            console.log("tmpFn.length", tmpFn.length)
            return partialCurryingByBind(tmpFn);
        }
    }
};

const make3 = (a, b, c) => {
    return String(100 * a + 10 * b + c);
}

const f1 = partialCurryingByBind(make3);
const f2 = f1(1);
const f3 = f2(2);
const f4 = f3(3);
