const memoize = fn => {
    let cache = {};
    return x => {
        return x in cache ? cache[x] : cache[x] = fn(x);
    }
}

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

const addLogging = fn => (...args) =>{
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

const myFind = (arr, fn )=> {
    return arr.reduce((x, y)=>{
        console.log(`${x} ${y}`);
        return x===undefined && fn(y)?y:x;
    }, undefined);
}

const shuffle = arr=>{
    const len=arr.length;
    for (let i = 0; i < len - 1; i++){
        let r = Math.floor(Math.random() * (len-i));
        [arr[i], arr[i+r]] = [arr[i+r], arr[i]];
    }
    return arr;
}

const getRandomFileName = (fileExtension = "", randomLetterFunc=getRandomLetter)=>{
    return getRandomFileName2(fileExtension, randomLetterFunc);
}

const getRandomLetter2 = (inSeed) => {    
    return getRandomLetter(inSeed);
};

const getRandomLetter = (getRandomInt = Math.random)=>{
    const min = "A".charCodeAt();
    const max = "Z".charCodeAt();
    return String.fromCharCode(
        Math.floor(getRandomInt() * (1 + max - min)) + min
    );
};

const getRandomFileName2 = (fileExtension = "", randomLetterFunc)=>{
    const NAME_LENGTH = 12;
    let namePart = new Array(NAME_LENGTH);
    for (let i = 0; i < NAME_LENGTH; i++){
        namePart[i] = randomLetterFunc();
    }
    return namePart.join("") + fileExtension;
}

const roundFix2 = (a, n)=>{
    let r = a > 0 ? Math.ceil(n) : Math.floor(n);
    a += n-r;
    return {a, r};
};

const PI = 3.14159265358979;
const circleArea = r=>PI*Math.pow(r, 2);

const isOldEnough3 = (currentYear, birthYear) => birthYear <= currentYear-18;

const once = fn => {
    let done = false;
    return (...args) => {        
        if (!done){
            done = true;
            fn(...args);
        }            
    }
}

const onceAndAfter = (f, g)=>{
    let done = false;
    return (...args) =>{
        if (!done){
            done=true;
            f(...args);
        } else {
            g(...args);
        }
    };
};

const alternator = (f, g)=>{
    let nextFn = f;
    return (...args)=>{
        nextFn(...args);
        if (nextFn===f){
            nextFn = g;
        } else {
            nextFn = f;
        }
    }
}

const thisManyTimes = (fn, n)=>{
    return (...args) => {
        if(n>0){
            fn(...args);
            n--;
        }
    };
};

// const squeak = a=>console.log(a, ' squeak!');
// squeak("original");
// squeak("original");
// squeak("original");

// const squeakOnce = once(squeak);
// squeakOnce("only once");
// squeakOnce("only once");
// squeakOnce("only once");

// const squeak = (x)=>console.log(x, "squeak!!");
// const creak = (x)=>console.log(x, "creak!!");
// const makeSound = onceAndAfter(squeak, creak);
// makeSound("door");
// makeSound("door");
// makeSound("door");
// makeSound("door");

// let sayA = ()=>console.log("A");
// let sayB = ()=>console.log("B");

// let alt = alternator(sayA, sayB);
// alt();
// alt();
// alt();
// alt();
// alt();
// alt();

const squeak = a=>console.log(a, ' squeak!');
const squeakNTimes = thisManyTimes(squeak, 1);
// squeakNTimes("A");
// squeakNTimes("A");
// squeakNTimes("A");
// squeakNTimes("A");
// squeakNTimes("A");

const make3 = (a, b, c) => String(100 * a + 10 * b + c);

const curryByBind = fn =>{
    return fn.length === 0 ? fn() : p => {        
        return curryByBind(fn.bind(null, p))
    };
}

const curryByBind2 = (fn, len = fn.length) =>{
    return len===0 ? fn() : p => {
        return curryByBind2(fn.bind(null, p), len-1);
    }
};

const sum2 = (...args) => {
    return args.reduce((x, y)=>x+y, 0);
};

const nonsense = (a,b,c,d,e)=>`${a}/${b}/${c}/${d}/${e}`;

const range = (start, stop) => new Array(stop-start).fill(0).map((v, i)=>start+i);

const partialByEval = (fn, ...args) =>{
    console.log(args.length);
    const rangeArgs = range(0, fn.length);
    const leftList = rangeArgs
        .map(v=>(args[v]===undefined?`X${v}`:null))
        .filter(v=>!!v)
        .join(",");
    console.log(leftList);
    const rightList = rangeArgs
        .map(v=>(args[v]===undefined?`X${v}`:args[v]))
        .join(",");
    console.log(rightList);
    return eval(`(${leftList})=>${fn.name}(${rightList})`);
}

const partialByClosure = (fn, ...args)=>{
    const partialize = (...args1)=>(...args2)=>{
        for (let i = 0; i < args1.length && args2.length; i++){
            if(args1[i] === undefined){
                args1[i] = args2.shift();
            }
        }
        const allParams = [...args1, ...args2];
        return (
            allParams.includes(undefined) || allParams.length<fn.length
            ? partialize
            :fn
        )(...allParams);
    };

    return partialize(...args);
}

const partialCurryingByBind = fn => fn.length===0 ? fn() : (...pp) => partialCurryingByBind(fn.bind(null, ...pp));

const partialCurryingByBind2 = (fn, len = fn.length) => len === 0 ? fn() : (...pp) => partialCurryingByBind2(fn.bind(null, ...pp), len - pp.length);

//const sum2 = (...args) => args.reduce((x, y)=>x+y, 0);