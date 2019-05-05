
describe("custom find test", function(){
    it("should match a standard find function", ()=>{
        let a = [22, 9, 60, 12, 4, 56];
        console.log(a.find((x)=>x>30));
        console.log(myFind(a, (x)=>x>30));
        expect(JSON.stringify(a.find((x)=>x>30))===JSON.stringify(myFind(a, x=>x>30))).toBe(true);
    });
})

// describe("shuffleTest", function(){
//     it("shouldn't change the array length", ()=>{
//         let a = [22, 9, 60, 12, 4, 56];
//         shuffle(a);
//         expect(a.length).toBe(6);
//     });

//     it("shouldn't change the values", ()=>{
//         let a = [22, 9, 60, 12, 4, 56];
//         shuffle(a);
//         expect(a.includes(22)).toBe(true);
//         expect(a.includes(9)).toBe(true);
//         expect(a.includes(60)).toBe(true);
//         expect(a.includes(12)).toBe(true);
//         expect(a.includes(4)).toBe(true);
//         expect(a.includes(56)).toBe(true);
//     });
// });

// describe("getRandomFileName, with an impure getRandomLetter function", function(){
//     it("generates 12 letter long names", ()=>{
//         for (let i=0; i<100; i++){
//             expect(getRandomFileName().length).toBe(12);
//         }
//     });

//     it("generates names with letters A to Z only", ()=>{
//         for (let i = 0; i < 100; i++){
//             let n = getRandomFileName();
//             for (j=0; j<n.length; j++){
//                 expect(n[j] >= "A" && n[j] <= "Z").toBe(true);
//             }
//         }
//     });

//     it("includes the right extension if provided", ()=>{
//         let fileName1 = getRandomFileName(".pdf");
//         expect(fileName1.length).toBe(16);
//         expect(fileName1.endsWith(".pdf")).toBe(true);
//     });

//     it("doesn't include any extension if not provided", ()=>{
//         let fileName2 = getRandomFileName();
//         expect(fileName2.length).toBe(12);
//         expect(fileName2.includes(".")).toBe(false);
//     });
// });

// describe("getRandomLetter", function(){
//     it("return A for values close to 0", ()=>{
//         spyOn(Math, "random").and.returnValue(0.0001);
//         let letterSmall = getRandomLetter();
//         expect(Math.random).toHaveBeenCalled();
//         expect(letterSmall).toBe("A");
//     });

//     it("returns Z for values close to 1", ()=>{
//         spyOn(Math, "random").and.returnValues(0.98, 0.999);
//         let letterBig1 = getRandomLetter();
//         let letterBig2 = getRandomLetter();
//         expect(Math.random).toHaveBeenCalledTimes(2);
//         expect(letterBig1).toBe("Z");
//         expect(letterBig2).toBe("Z");
//     });

//     it("returns a middle letter for values around 0.5", ()=>{
//         spyOn(Math, "random").and.returnValue(0.49384712);
//         let letterMiddle = getRandomLetter();
//         expect(Math.random.calls.count()).toEqual(1);
//         expect(letterMiddle).toBeGreaterThan("G");
//         expect(letterMiddle).toBeLessThan("S");
//     });
// });

// describe ("getRandomFileName", function(){
//     let a = [];
//     let f = () => a.shift();

//     beforeEach(()=>{
//         a = "SORTOFRANDOM".split("");
//     });

//     it ("uses the given letters for the file name", ()=>{
//         let fileName = getRandomFileName2("", f);
//         expect(fileName.startsWith("SORTOFRANDOM")).toBe(true);
//     });

//     it("includes the right extension and has the right length", ()=>{
//         let fileName = getRandomFileName(".pdf", f);
//         expect(fileName.endsWith(".pdf")).toBe(true);
//         expect(fileName.length).toBe(16);
//     });
// });

// describe("getRandomLetter", function(){
//     it("returns A for values close to 0", ()=>{
//         let letterSmall = getRandomLetter(()=>0.0001);
//         expect(letterSmall).toBe("A");
//     });

//     it("returns Z for values close to 1", ()=>{
//         let letterBig = getRandomLetter(()=>0.99999);
//         expect(letterBig).toBe("Z");
//     });

//     it("returns a middle letter for values around 0.5", ()=>{
//         let letterMiddle = getRandomLetter(()=>0.49384712);
//         expect(letterMiddle).toBeGreaterThan("G");
//         expect(letterMiddle).toBeLessThan("S");
//     });

//     it("returns an ascending sequence of letters for ascending values", ()=>{
//         let a = [0.09, 0.22, 0.6];
//         const f = ()=>a.shift();

//         let letter1 = getRandomLetter(f);
//         let letter2 = getRandomLetter(f);
//         let letter3 = getRandomLetter(f);
//         expect(letter1).toBeLessThan(letter2);
//         expect(letter2).toBeLessThan(letter3);
//     });
// });

// describe("roundFix2", function(){
//     it("should round 3.14159 to 3 if differences are 0", ()=>{
//         let {a, r} = roundFix2(0.0, 3.14159);
//         expect(a).toBeCloseTo(0.14159);
//         expect(r).toBe(3);
//     });

//     it("should round 2.71828 to 3 if differences are 0.14159", ()=>{
//         let {a, r} = roundFix2(0.14159, 2.71828);
//         expect(a).toBeCloseTo(-0.14013);
//         expect(r).toBe(3);
//     });

//     it("should found 2.71828 to 2 if differences are -0.14013", ()=>{
//         let {a, r} = roundFix2(-0.14013, 2.71828);
//         expect(a).toBeCloseTo(0.57815);
//         expect(r).toBe(2);
//     });

//     it("should round 3.14159 to 4 if differences are 0.57815", ()=>{
//         let {a, r} = roundFix2(0.57815, 3.14159);
//         expect(a).toBeCloseTo(-0.28026);
//         expect(r).toBe(4);
//     });
// });

// describe("isOldEnough", function(){
//     it("is false for people younger than 18", ()=>{
//         expect(isOldEnough3(1978, 1963)).toBe(false);
//     });

//     it("is true for people older than 18", ()=>{
//         expect(isOldEnough3(1988, 1965)).toBe(true);
//     });

//     it("is true for people exactly 18", ()=>{
//         expect(isOldEnough3(1998, 1980)).toBe(true);
//     });
// });

// describe("circle area", function(){
//     it("is zero for radius 0", ()=>{
//         let area = circleArea(0);
//         expect(area).toBe(0);
//     });

//     it("is PI for radius 1", ()=>{
//         let area = circleArea(1);
//         expect(area).toBeCloseTo(Math.PI);
//     });

//     it("is approximately 12.5664 for radius 2", ()=>{
//         let area = circleArea(2);
//         console.log(area);
//         expect(area).toBeCloseTo(12.5664);
//     })
// });

/* describe("once", ()=>{
    beforeEach(()=>{
        window.myFn = ()=>{};
        spyOn(window, "myFn");
    });

    it("without 'once', a function always runs", ()=>{
        myFn();
        myFn();
        myFn();
        expect(myFn).toHaveBeenCalledTimes(3);
    });

    it("with 'once', a function funs one time", ()=>{
        window.onceFn = once(window.myFn);
        spyOn(window, "onceFn").and.callThrough();
        onceFn();
        onceFn();
        onceFn();
        expect(onceFn).toHaveBeenCalledTimes(3);
        expect(myFn).toHaveBeenCalledTimes(1);
    });
});

describe("onceAndAfter", ()=>{
    it("should call the first function once, and the other after", ()=>{
        func1 = ()=>{};
        spyOn(window, "func1");
        func2 = ()=>{};
        spyOn(window, "func2");
        onceFn = onceAndAfter(func1, func2);

        onceFn();
        expect(func1).toHaveBeenCalledTimes(1);
        expect(func2).toHaveBeenCalledTimes(0);

        onceFn();
        expect(func1).toHaveBeenCalledTimes(1);
        expect(func2).toHaveBeenCalledTimes(1);

        onceFn();
        expect(func1).toHaveBeenCalledTimes(1);
        expect(func2).toHaveBeenCalledTimes(2);

        onceFn();
        expect(func1).toHaveBeenCalledTimes(1);
        expect(func2).toHaveBeenCalledTimes(3);
    })
}) */
