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

const quicksort = arr => {  
    console.log("Arg: ", arr);
    if (arr.length < 2) {    
        return arr;  
    } else {    
        const pivot = arr[0];    
        const smaller = arr.slice(1).filter(x => x < pivot);    
        const greaterEqual = arr.slice(1).filter(x => x >= pivot);    
        return [...quicksort(smaller), pivot, ...quicksort(greaterEqual)];  
    }
};

console.log(quicksort([22, 9, 60, 12, 4, 56]));