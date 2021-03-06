function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
    return this.subproperty;
};

function SubSubType() {
    this.subsubproperty = false;
}

SubSubType.prototype = Object.create(SubType.prototype);
SubSubType.prototype.getSubSubValue = function () {
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

function asyncFunction(callback) {
    var result = ["a", "b", "c"];

    setTimeout(callback.bind(null, result), 0);

    return;
}

function callbackFunction(arr) {
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

function tmp(...args) {
    console.log("--", (1 > 2 || 1 > 2 ? (() => 3) : (() => 1)));
    console.log("++", (1 < 2 || 1 > 2 ? (() => 3) : (() => 1)));
    return (1 > 2 || 1 > 2 ? (() => 3) : (() => 1))(...args);
}

// console.log(tmp(22));

const partialCurryingByBind = (fn) => {
    console.log("fn.length", fn.length);
    if (fn.length === 0) {
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

// const f1 = partialCurryingByBind(make3);
// const f2 = f1(1);
// const f3 = f2(2);
// const f4 = f3(3);

const partialCurryingByBind2 = (fn, len = fn.length) => {
    return len === 0 ? fn() : (...pp) => {
        return partialCurryingByBind2(fn.bind(null, ...pp), len - pp.length);
    }
}

const sum = (...args) => args.reduce((x, y) => x + y, 0);

pcSum5 = partialCurryingByBind2(sum, 5);
//console.log(pcSum5(1, 5)(3)(7, 4));

pcSuma = partialCurryingByBind2(sum, 5);
pcSumb = pcSuma(1, 2, 3, 4);
//console.log(pcSumb(5));

const partialCurryByClosure = fn => {
    const curryize = (...args1) => {
        console.log("args1.length", args1.length, args1[0]);
        return (...args2) => {
            console.log("args2.length", args2.length, args2[0]);
            const allParams = [...args1, ...args2];
            console.log("allParams.length", allParams.length, allParams[0]);
            return (allParams.length < fn.length ? curryize : fn)(...allParams);
        };
    };
    return curryize();
}

// pcSumI = partialCurryByClosure(make3);
// pcSumII = pcSumI(33);
// pcSumIII = pcSumII(2);
// pcSumIIII = pcSumIII(3);
// console.log(pcSumIIII);


const demethodize3 = fn => (...args) => {
    //console.log(args.length, args[0]);
    return fn.bind(...args)();
};
const name = "functional";
const map = demethodize3(Array.prototype.map);
const toUpperCase = demethodize3(String.prototype.toUpperCase);
const toLowerCase = demethodize3(String.prototype.toLowerCase);
const result2 = map(name, toUpperCase);
//console.log("Result2:", result2);
// console.log(toUpperCase("abc"));

// const myAdd3 = (a, b, c) => a + b + c;
// const fixedAdd3 = (b, c) => myAdd3(1, b, c);
// console.log(fixedAdd3(4, 5));

const sumMany = total => number =>
    number === undefined ? total : sumMany(total + number);


//console.log(sumMany(1)(2)(3)());

const applyStyle = style => content =>
    `<${style}>${content}</${style}>`;

//console.log(applyStyle("b")("my content"));

// Function.prototype.curry = function(){
//     return (arga) => {
//         return (argb) => {
//             return (argc) => {
//                 return this(arga, argb, argc);
//             }
//         }
//     }
// };

Function.prototype.curry = function () {
    console.log(this.length);
    return this.length === 0 ? this() : p => this.bind(this, p).curry();
};

// const sum3 = (a, b, c) => 100 * a + 10 * b + c;
// console.log(sum3.curry()(1)(2)(4));
// console.log(sum3.curry()(2)(2)(4));
// const sum3a = sum3.curry()(2)(2);
// console.log(sum3a(9));
const range = (start, stop) => new Array(stop - start).fill(0).map((v, i) => start + i);

const uncurryByEval = (fn, len) => {
    return eval(`(${range(0, len).map(z => `x${z}`).join(",")}) => ${fn.name}${range(0, len).map(z => `(x${z})`).join("")}`);
}
const make3c = (a) => (b) => (c) => make3(a, b, c);
// console.log(make3c(2)(3)(4));
// console.log(uncurryByEval(make3c, 3)(1,2,3));

const filterByText = (text, arr) => arr.filter(v => v.endsWith(text));
const filterByContainingText = (text, arr) => arr.filter(v => v.indexOf(text) !== -1);
const filterOdt = arr => filterByText(".odt", arr);
const filterDash = arr => {
    //.log("in filterDash");
    return filterByContainingText("-", arr);
}
const count = arr => {
    //console.log("in count");
    return arr.length;
}
function getDir(path) {
    //console.log("in getDir");
    const fs = require("fs");
    const files = fs.readdirSync(path);
    return files;
}

const pipeTwo = (f, g) => (...args) => g(f(...args));

//console.log(filterDash(getDir(`C:\\Users\\laihi\\projects`)));

const pipeline2 = (...fns) => {
    return fns.reduce((result, f, idx) => {
        return (...args) => {
            return f(result(...args));
        }
    });
}

const tee = arg => {
    console.log(arg);
    return arg;
}

const tee2 = (arg, logger = console.log.bind(console)) => {
    logger(arg);
    return arg;
}

//console.log(pipeline2(getDir, tee2, filterDash, tee2, count)(`C:\\Users\\laihi\\projects`));

const getHandler = {
    get(target, property, receiver) {
        if (typeof target[property] === "function") {
            return (...args) => {
                const result = target[property](...args);
                return result === undefined ? receiver : result;
            };
        } else {
            return target[property];
        }
    }

};

const chainify = obj => new Proxy(obj, getHandler);

class City {
    constructor(name, lat, long) {
        this.name = name; this.lat = lat; this.long = long;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    setLat(newLat) {
        this.lat = newLat;
    }
    setLong(newLong) {
        this.long = newLong;
    }
    getCoords() {
        return [this.lat, this.long];
    }
}

let myProx = new Proxy(new City("Singapore", -34.9011, -56.1645), getHandler);
let myCity = new City("Montevideo, Uruguay", -34.9011, -56.1645);

//myCity = chainify(myCity);

// console.log(myProx.getCoords());

const removeNonAlpha = str => str.replace(/[^a-z]/gi, " ");
// const toUpperCase = 
const splitInWords = str => str.trim().split(/\s+/);
const arrayToSet = arr => new Set(arr);
const setToList = set => Array.from(set).sort();
const upperCaseFirstChar = str => str.replace(/^./, toUpperCase(str.trim().charAt()));
const upperCaseAllWords = arr => arr.map(upperCaseFirstChar);
const arrayToStr = arr => arr.join(" ");
const lowerCaseAllWords = arr => arr.map(toLowerCase);
const GETTYSBURG_1_2 = `Four score and seven years ago
our fathers brought forth on this continent,
a new nation, conceived in Liberty, and dedicated to
the proposition that all men are created equal.
Now we are engaged in a great civil war, testing whether
that nation, or any nation so conceived and dedicated,
can long endure.`;

const composeUsingReduceRight = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));
// console.log(composeUsingReduceRight(setToList, arrayToSet, splitInWords, toUpperCase, removeNonAlpha)(GETTYSBURG_1_2));

const composeUsingReduce = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
// console.log(composeUsingReduce(setToList, arrayToSet, splitInWords, toUpperCase, removeNonAlpha)(GETTYSBURG_1_2));

conposeUsingReduce2 = (...fns) => {
    return fns.reduce((f, g) => {
        return (...args) => {
            return f(g(...args));
        }
    });
}

pipeline3 = (...fns) => {
    return fns.reduce((f, g) => {
        return (...args) => {
            return g(f(...args));
        }
    });
}

headline = conposeUsingReduce2(arrayToStr, upperCaseAllWords, lowerCaseAllWords, splitInWords);
headline2 = pipeline3(splitInWords, lowerCaseAllWords, upperCaseAllWords, arrayToStr);
// console.log(headline("aSd's QqwW aSd sDF dfg"));
// console.log(headline2("aSd's QqwW aSd sDF dfg"));

const allTasks = { 
    date: "2017-09-22", 
    byPerson: [
        { 
            responsible: "EG", 
            tasks: [
                { id: 111, desc: "task 111", done: false }, 
                { id: 222, desc: "task 222", done: false }
            ] 
        }, 
        { 
            responsible: "FK", 
            tasks: [
                { id: 555, desc: "task 555", done: false }, 
                { id: 777, desc: "task 777", done: true }, 
                { id: 999, desc: "task 999", done: false }
            ] 
        }, 
        { 
            responsible: "ST", 
            tasks: [
                { id: 444, desc: "task 444", done: true }
            ] 
        }
    ] 
};


const getField = attr => obj => obj[attr];
const filter = fn => arr => arr.filter(fn);
const map2 = fn => arr => arr.map(fn);
const reduce = (fn, initVal) => arr => arr.reduce(fn, initVal);

const pending = (tasksList, name) => {
    return pipeline3(
        getField("byPerson"),
        filter(person=>person.responsible===name),
        map2(person=>person.tasks),
        reduce((y, x)=>x, []),
        filter(task=>!task.done),
        map2(task=>task.id)
    )(tasksList);
}

console.log(pending(allTasks, "FK"));

//const getResults = pipeline3(select, filter, group, sort)

const curry3 = fn => a => b => c => fn(a, b, c);
const make3Curry = curry3(make3);
console.log(make3Curry(1)(2)(3));
