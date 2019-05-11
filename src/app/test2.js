function somethingElse(...args){
    console.log(args);
}

function listArguments(){
    console.log(arguments);
    var myArray = Array.prototype.slice.call(arguments);
    console.log(myArray);
    somethingElse.apply(null, myArray);
}

function listArguments2(...args){
    console.log(args);
    somethingElse(...args);
}

function xf(x){
    return function xy(y){
        return function xz(z){
            return x+y+z;
        }
    }
}

var module = {
    x:42,
    getX: function(){
        console.log(arguments);        
        var myArray = Array.prototype.slice.call(arguments, 0, 2);
        console.log(myArray);
        return this.x;
    }
}

// var boundGetX = module.getX.bind(module, 1, 2);
// console.log(boundGetX(3, 4));

// var myObj = {
//     '0': 11,
//     '1': 22,
//     '2': 33
// };

//console.log(Array.prototype.slice.call(myObj));

const  simpoleAction = t => ({
    type: t
});

//console.log(simpoleAction("INITIALIZE"));

const simpleAction2 = t => {return {type:t}};

//console.log(simpleAction2("INITIALIZE2"));

const roundFix2 = (a, n)=>{
    let r = a>0?Math.ceil(n):Math.floor(n);
    a += n-r;
    return {a, r};
};

let accum = 0;
let {a, r} = roundFix2(accum, 3.1415);
accum = a;
// console.log(accum, r);
// console.log(roundFix2(accum, 3.1415));
// console.log((roundFix2(accum, 3.1415)).a);

var o = {p: 42, q: true};
var {q: foo, p: bar} = o;
 
// console.log(foo); // 42 
// console.log(bar); // true

const myArray = [22, 9, 60, 12, 4, 56];
const sumAndLog = (x, y) => {
    console.log(`${x}+${y} = ${x+y}`);
    return x + y;
};


Array.prototype.average = function(){
    return this.reduce((x, y)=>x+y, 0) / this.length;
};

let myAvg = [22, 9, 60, 12, 4, 56].average();
//console.log(myAvg);

const average3 = arr => {
    const sc = arr.reduce((ac, val) => ({ sum: val+ac.sum, count: ac.count+1 }), { sum: 0, count: 0 });
    return sc.sum/sc.count;
};

//console.log(average3(myArray));

const reverseString2 = str => str.split("").reduceRight((x, y)=>x+y, "");

//console.log(reverseString2("OEDIVETNOM"));

const markers =[
    {name: "UY", lat: -34.9, lon: -56.2},
    {name: "AR", lat: -34.6, lon: -58.4},
    {name: "BR", lat: -15.8, lon: -47.9},
    {name: "BO", lat: -16.5, lon: -68.1}
];

let averageLat2 = markers.map(x=>x.lat).average();
let averageLon2 = markers.map(x=>x.lon).average();

//console.log(`averageLat2 = ${averageLat2}, averageLon2 = ${averageLon2}`);

// console.log([].reduce((x, y)=>{
//     console.log(`${x} ${y}`);
//     return x+y;
// }, 1));

const range = (start, stop) => new Array(stop-start).fill(0).map((v, i)=>start+i);

const factorialByRange = n => range(1, n+1).reduce((x, y)=>x*y, 1);

// console.log(factorialByRange(5));
// console.log(factorialByRange(3));
// console.log(factorialByRange(0));

const ALPHABET = range("A".charCodeAt(), "Z".charCodeAt()+1).map(x=>String.fromCharCode(x));

//console.log(ALPHABET);

const myMap = (arr, fn) => arr.reduce((x, y)=>x.concat(fn(y)), []);
const dup = x => 2*x;

// console.log(myArray.map(dup));
// console.log(myMap(myArray, dup));
// console.log(myArray);

// console.log([1,2,NaN,4].findIndex(x=>x!==x));
// console.log([1,2,NaN,4].findIndex(x=>isNaN(x)));

arr = [1,2,3,4];
const myFind = (arr, fn )=> {
    return arr.reduce((x, y)=>{
        console.log(`${x} ${y}`);
        return x===undefined && fn(y)?y:x;
    }, undefined);
}

// console.log(myFind(arr, (z)=>z==4));

var characters = [
    {name: "Fred", plays: "bowling"},
    {name: "Barney", plays: "chess"},
    {name: "Wilma", plays: "bridge"},
    {name: "Betty", plays: "checkers"},
    {name: "pebbles", plays: "chess"},
];

let output = characters.filter(v=>v.plays==="chess"||v.plays==="checkers").map(v=>v.name).reduce((acc, curr, i, arr)=>{
    acc+="<li>"+curr+"</li>";
    i === arr.length-1 ? acc+="/<ul></div>": "";
    return acc;
},"<div><ul>");

//console.log(output);

function dataToCsv(data){
    return data.map(ele=>concatLine(ele)).reduce((acc, curr)=>acc===""?curr:acc+="\n"+curr, "");
}

function concatLine(line){
    return line.reduce((acc, curr)=>acc===""?curr:acc+=";"+curr, "");
}

function concatRow(row){
    return row.reduce((acc, curr)=>acc===""?curr:acc+="\n"+curr, "");
}

let myData = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
//let myCSV = dataToCsv(myData); // "1,2,3,4\n5,6,7,8\n9,10,11,12\n"

//console.log(dataToCsv(myData));

const concatNumbers = (a, b) => (a == " " ? b : a + ";" + b);
const concatLines = (c, d) => {
    //console.log("d", d);
    return c + "\n" + d;
}
const makeCSV = t => {
        //console.log("??", t);
        return t.reduce(
                    concatLines,
                    " "
                    , 
                    t.map(f => {
                        //console.log("map: ", f);
                        f.reduce(concatNumbers, " ");
                    }),
                    // t.map(g=>{
                    //     console.log("another map: ", g);
                    // })
                );
}

//console.log(JSON.stringify(makeCSV(myData)));

const makeCSV2 = t =>
    t.reduce(
        (c, d) => c + "\n" + d,
        " ",
        t.map(x => x.reduce((a, b) => (a == " " ? b : a + "|" + b), " "))
    );

const addLogging = fn => (...args) =>{
    console.log(`entering ${fn.name}: ${args}`);
    const valueToReturn = fn(...args);
    console.log(`exiting ${fn.name}: result=${valueToReturn}`);
    return valueToReturn;
}

const addLogging2 = fn => (...args) =>{
    console.log(`entering ${fn.name}: ${args}`);
    try{
        const valueToReturn = fn(...args);
        console.log(`exiting ${fn.name}: ${valueToReturn}`);
        return valueToReturn;
    } catch (thrownError) {
        console.log(`exiting ${fn.name}: threw ${thrownError}`);
        throw thrownError;
    }    
}

function subtract2(a, b){
    //[a, b] = args;
    console.log(`subtract ${a} - ${b}`);
    b = changeSign(b);
    return a+b;
}

function subtract(a, b){
    if (b===0){
        throw "subtract from 0";
    }
    b = changeSign(b);
    return a+b;
}

function changeSign(a){
    return -a;
}


function temp(i, j, ...args){
    
    console.log(`${args} ${JSON.stringify(args)} ${JSON.stringify(arguments)}`);
    console.log(subtract(...args));
};


const addLogging3 = (fn, logger = console.log) => (...args)=>{
    logger(`entering ${fn.name}: ${args}`);
    try{
        const valueToReturn = fn(...args);
        logger(`exiting ${fn.name}: ${valueToReturn}`);
        return valueToReturn;
    } catch (thrownError) {
        logger(`exiting ${fn.name}: threw ${thrownError}`);
        throw thrownError;
    }
}

const winston = require("winston");
const myLogger = t=>winston.log("debug", "Loggin by winston: %s", t);
winston.level = "debug";


dummy = {    
    logger(x) {
        return x++;
    }
};

const perf_h = require('perf_hooks');
const performance = perf_h.performance;

const myPut = (text, name, tStart, tEnd)=>console.log(`${name} - ${text} ${tEnd - tStart} ms`);
const myGet = ()=>performance.now();

const addTiming = (fn, getTime = myGet, output = myPut) => (...args) => {
    let tStart = performance.now();
    try{
        const valueToReturn = fn(...args);
        output("normal exit", fn.name, tStart, getTime());
        return valueToReturn;
    } catch (thrownError) {
        output("exception thrown", fn.name, tStart, getTime());
    }
};

subtract = addTiming(subtract);

// let x = subtract(7, 5);
// let y = subtract(4, 0);

function fib(n){    
    if(n==0){
        return 0;
    } else if(n==1){
        return 1;
    } else {
        return fib(n-2) + fib(n-1);
    }
}

const memoize = fn => {
    let cache = {};
    return x => {
        return x in cache ? cache[x] : cache[x] = fn(x);
    }
}

const testFib = n=>fib(n);
const testMemoFib = memoize(n=>fib(n));
fib = memoize(fib);

// addTiming(testFib)(45);
// addTiming(testFib)(40);
// addTiming(testFib)(35);
// addTiming(testFib)(45);
// addTiming(testFib)(40);
// addTiming(testFib)(35);
// addTiming(testFib)(45);
// addTiming(testFib)(40);
// addTiming(testFib)(35);

// addTiming(testMemoFib)(45);
// addTiming(testMemoFib)(45);
// addTiming(testMemoFib)(40);
// addTiming(testMemoFib)(35);

function isSomethingTrue(x){
    return x;
}

const not = fn => {
    return (...args) =>{
        return !fn(...args);
    };
};

const not2 = fn => {    
        return (...args)=>args[0];
};

const notted = not( (x)=>x>5 )

// console.log(isSomethingTrue(2>1));
// console.log(isSomethingTrue(2>5));
// console.log(isSomethingTrue(notted(6)));

const invert = fn => (...args) => -fn(...args);
const spanishComparision = (a, b)=>a.localeCompare(b, "es");

var palabras = ["ñandú", "oasis", "mano", "natural", "mítico", "musical"];
// console.log(palabras.sort(spanishComparision));
// console.log(palabras.sort(invert(spanishComparision)));

const binaryOp2 = op => new Function("x", "y", `return x ${op} y;`);
const binaryLeftOp = (x, op) => (y) => binaryOp2(op)(x,y);
const isNegative1 = binaryLeftOp(0, ">");
// console.log(isNegative1);
// console.log(isNegative1(-3));

const getField = attr => obj => obj[attr];

const anObj = {
    key1: "key value 1",
    key2: "key value 2",
    key3: "key value 3"
};

const field1 = getField("key1");
const field2 = getField("key2");

// console.log(field1(anObj));
// console.log(field2(anObj));

const binder = fn=>(...args)=>fn.bind(...args)();


const someArrTest = [1,2,3,4,5];

const mySome = binder(Array.prototype.some);
console.log(mySome(someArrTest, ele=>ele>2));

const name = "functional";
const map = binder(Array.prototype.map);
const toUpperCase = binder(String.prototype.toLocaleUpperCase);

console.log(map(name, toUpperCase));

const toLocaleString = binder(Number.prototype.toLocaleString);

const numbers = [2209.6, 124.56, 1048576];
const strings = numbers.map(ele=>{    
    return toLocaleString(ele);
});
console.log(strings);