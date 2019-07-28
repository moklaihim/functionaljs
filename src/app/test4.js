// const powerN = (base, power) => {
    
//     if (power === 0) { 
//         return 1; 
//     } else if (power % 2) { // odd power?
//         console.log("return odd", `${base} * (${base}, ${power} - 1)`);
//         return base * powerN(base, power - 1);    
//     } else { // even power?        
//         console.log("return even", `(${base} * ${base}, ${power} / 2)`);
//         return powerN(base * base, power / 2);    
//     }
// };

// console.log(powerN(2, 10));

// const hanoi = (disks, from, to, extra) => {    
//     console.log(".");
//     if (disks === 1) {        
//         console.log(`Move disk 1 from post ${from} to post ${to}`);    
//     } else {        
//         hanoi(disks - 1, from, extra, to);        
//         console.log(`Move disk ${disks} from post ${from} to post ${to}`);        
//         hanoi(disks - 1, extra, to, from);    
//     }
// };

// hanoi(4, "A", "B", "C");

// const quicksort = arr => {  
//     console.log("Arg: ", arr);
//     if (arr.length < 2) {    
//         return arr;  
//     } else {    
//         const pivot = arr[0];    
//         const smaller = arr.slice(1).filter(x => x < pivot);    
//         const greaterEqual = arr.slice(1).filter(x => x >= pivot);    
//         return [...quicksort(smaller), pivot, ...quicksort(greaterEqual)];  
//     }
// };

// console.log(quicksort([22, 9, 60, 12, 4, 56]));

const memoize3 = fn => {
    let cache = {};
    return (...args) => {
        let strX = JSON.stringify(args);
        return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
    }
}

const makeChange = memoize3((n, bills) => {
    console.log(n, bills.length);
    if (n < 0) {        
        return 0; // no way of paying negative amounts           
    } else if (n == 0) {        
        return 1; // one single way of paying $0: with no bills            
    } else if (bills.length == 0) {        
        // here, n>0        
        return 0; // no bills? no way of paying            
    } else {        
        return (            
            makeChange(n, bills.slice(1)) + makeChange(n - bills[0], bills)        
        );    
    }
});

// console.log(makeChange(64, [100, 50, 20, 10, 5, 2, 1]));// 969 ways of paying $64

// console.log(
//     [ 
//         ((...args)=>{
//             return args[0] * 100;
//         })(4)        
//     ].concat([1, 2, 3])
// );

const mapR4 = (orig, cb) => {    const mapLoop = (arr, i) =>        arr.length == 0            ? []            : [cb(arr[0], i, orig)].concat(                  mapR3(arr.slice(1), cb, i + 1, orig)              );        return mapLoop(orig, 0);};

const mapR2 = (arr, cb, i = 0, orig = arr) =>    arr.length == 0        ? []        : [cb(arr[0], i, orig)].concat(              mapR2(arr.slice(1), cb, i + 1, orig)          );

const mapR3 = (orig, cb) => {        
    const mapLoop = (arr, i, orig) => {
        if (arr.length==0){
            return [];        
        } else {
            const mapRest =mapLoop(arr.slice(1), i + 1, orig);
            if (!(0 in arr)){
                console.log("undefined detected");
                return [,].concat(mapRest);
            } else {
                return [cb(arr[0], i, orig)].concat(mapRest);
            }
        }
    };
    return mapLoop(orig, 0, orig);
};

const filterR = (orig, cb) => {        
    const filterLoop = (arr, i, orig) => {
        if (arr.length==0){
            return [];        
        } else {
            const filterRest = filterLoop(arr.slice(1), i + 1, orig);
            if (!(0 in arr)){
                console.log("undefined detected");
                return filterRest;
            } else if (cb(arr[0], i, orig)) {
                return [arr[0]].concat(filterRest);
            } else {
                return filterRest;
            }
        }
    };
    return filterLoop(orig, 0, orig);
};

const reduceR = (orig, cb, init) =>{
    let accum = init;
    const reduceLoop = (arr, i, accum, orig2) => {
        return arr.length == 0
            ? accum
            : reduceLoop (
                arr.slice(1),
                i + 1,
                !(0 in arr) ? accum : cb(accum, arr[0], i, orig2),
                orig2
            );
    }

    return reduceLoop(orig, 0, accum, orig);
}

const findR = (orig, cb) => {

    const findLoop = (arr, i, orig2) => {
        return arr.length == 0
            ? undefined
            : cb(arr[0], i, orig2) ? arr[0] : findLoop(arr.slice(1), i+1, orig2)
    }

    return findLoop(orig, 0, orig);
}

let aaa = [1, 12, , , 5, 22, 9, 60];
const isOdd = (x, i, a) => {
    console.log(x, i, a);
    return x % 2
};
const senseless = (x, i, a) => {    
    console.log(x, i, a);
    return x * 10 + i + a[i] / 10;
};
//console.log(aaa.map(senseless));    // [10.1, 21.2, 42.4, 53.5, 74.7]
//console.log(mapR3(aaa, senseless)); // [10.1, 21.2, 42.4, 53.5, 74.7]
//console.log(mapR4(aaa, senseless)); // [10.1, 21.2, 42.4, 53.5, 74.7]
//console.log(filterR(aaa, isOdd));

let bbb = [1, 2, , 5, 7, 8, 10, 21, 40];
// console.log(reduceR(
//     bbb,
//     (x, y, i, a) => {
//         console.log(x, y, i, a);
//         return x + y
//     },
//     0
// ));

const isTwentySomething = (x, i, a) => {
    console.log(x, i, a);
    return 20 <= x && x <= 29;
}
const isThirtySomething = (x, i, a) => {
    console.log(x, i, a);
    return 30 <= x && x <= 39;
}
const isGreaterThanFive = (x, i, a) => {
    console.log(x, i, a);
    return x > 5;
}

// console.log(findR(aaa, isTwentySomething));
// console.log(findR(aaa, isThirtySomething));
// console.log(findR(aaa, isGreaterThanFive));

const pipelineR = (first, ...rest) => {
    if (rest.length == 0) {
        return first;
    } else {
        return (...args) => {
            console.log(args);
            return pipelineR(...rest)(first(...args))
        };
    }                 
}

const plus1 = x => {
    return x + 1;
}
const by10 = x => {
    return x * 10;
}

// console.log(
//     pipelineR(
//         by10,
//         plus1,
//         plus1,
//         plus1,
//         by10,
//         plus1,
//         by10,
//         by10,
//         plus1,
//         plus1,
//         plus1
//     )(2)    
// );

const SIZE = 8;
let places = Array(SIZE);
let solutions = 0

const checkPlace = (column, row) =>    
        places        
            .slice(0, column)        
            .every((v, i) => v !== row && Math.abs(v - row) !== column - i);

const finder = (column = 0) => {        
    if (column === SIZE) {        
        // all columns tried out?        
        console.log(places.map(x => x + 1)); // print out solution        
        solutions++; // count it            
    } else {        
        const testRowsInColumn = j => {               
            if (j < SIZE) {                
                if (checkPlace(column, j)) {                    
                    places[column] = j;                    
                    finder(column + 1);                
                }                
                testRowsInColumn(j + 1);            
            }        
        };        
        testRowsInColumn(0);    
    }
};

finder();

console.log(`Solutions found: ${solutions}`);
