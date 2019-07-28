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
    //console.log(arguments[1]);
    const mapLoop = (arr, i, orig) => {
            //console.log("i", i);
            return arr.length == 0            
                ? []            
                : [cb(arr[0], i, orig)].concat(                  
                        mapLoop(arr.slice(1), i + 1, orig)                                      
                );        
        }

    return mapLoop(orig, 0, orig);
};

let aaa = [1, 2, 4, 5, 7];
const senseless = (x, i, a) => {
    //console.log(`${x} * 10 + ${i} + ${a}[${i}] / 10`);
    console.log(a);
    return x * 10 + i + a[i] / 10;
};
//console.log(aaa.map(senseless));    // [10.1, 21.2, 42.4, 53.5, 74.7]
console.log(mapR3(aaa, senseless)); // [10.1, 21.2, 42.4, 53.5, 74.7]
//console.log(mapR4(aaa, senseless)); // [10.1, 21.2, 42.4, 53.5, 74.7]