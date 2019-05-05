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