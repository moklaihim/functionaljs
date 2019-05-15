describe("with curryByBind2", function(){
    it("you fix arguments one by one", ()=>{
        const suma = curryByBind2(sum2, 5);
        const sumb = suma(1)(2)(3)(4)(5);
        expect(sumb).toBe(sum2(1, 2, 3, 4, 5));
    });

    it("you can also work with arity 1", ()=>{
        const suma = curryByBind2(sum2, 1);
        const sumb = suma(111);
        expect(sumb).toBe(sum2(111));
    });
});

// describe("with curryByBind", function(){
//     it("you fix arguments one by one", ()=>{
//         const make3a = curryByBind(make3);
//         const make3b = make3a(1)(2);
//         const make3c = make3b(3);
//         expect(make3c).toBe(make3(1, 2, 3));
//     });
// });

// var fib = null;

// beforeEach(()=>{
//     console.log("beforeEach called...");
//     fib = n =>{
//         if (n==0){
//             return 0;
//         } else if (n===1){
//             return 1;
//         } else {
//             return fib(n-2)+fib(n-1);
//         }
//     };
// });

// describe("the original fib", ()=>{    
//     it("should produce correct results", ()=>{
//         expect(fib(0)).toBe(0);
//         expect(fib(1)).toBe(1);
//         expect(fib(5)).toBe(5);
//         expect(fib(8)).toBe(21);
//         expect(fib(10)).toBe(55);
//     });

//     it("should repeat calculations", ()=>{
//         spyOn(window, "fib").and.callThrough();
//         expect(fib(6)).toBe(8);
//         expect(fib).toHaveBeenCalledTimes(25);
//     });
// });

// describe("the memoized fib", ()=>{    
//     beforeEach(()=>{
//         console.log("beforeEach in describe called...");
//         fib = memoize(fib);
//     });
    
//     it("should produce same results", ()=>{
//         console.log("2.1");
//         expect(fib(0)).toBe(0);
//         expect(fib(1)).toBe(1);
//         expect(fib(5)).toBe(5);
//         expect(fib(8)).toBe(21);
//         expect(fib(10)).toBe(55);
//     });
    
//     it("shouldn't repeat calculations", ()=>{
//         console.log("2.2");
//         spyOn(window, "fib").and.callThrough();
//         expect(fib(6)).toBe(8);
//         expect(fib).toHaveBeenCalledTimes(11);

//         expect(fib(5)).toBe(5);
//         expect(fib(4)).toBe(3);
//         expect(fib(3)).toBe(2);
//         expect(fib).toHaveBeenCalledTimes(14);
//     });
// });


// describe("after addLogging3()", function(){
//     let dummy;

//     beforeEach(()=>{
//         dummy = {logger() {}};
//         spyOn(dummy, "logger");
//     });

//     it("should call the provided logger", ()=>{
//         let something = (a, b)=>`result=${a}:${b}`;
//         something = addLogging3(something, dummy.logger);

//         something(22, 9);
//         expect(dummy.logger).toHaveBeenCalledTimes(2);
//         expect(dummy.logger).toHaveBeenCalledWith("entering something: 22,9");
//         expect(dummy.logger).toHaveBeenCalledWith("exiting something: result=22:9");
//     });

//     it("a throwing function should be reported", ()=>{
//         let thrower = (a, b, c)=>{
//             throw "CRASH!";
//         };
//         thrower = addLogging3(thrower, dummy.logger);

//         try{
//             thrower(1, 2, 3);
//         } catch(e) {
//             expect(dummy.logger).toHaveBeenCalledTimes(2);
//             expect(dummy.logger).toHaveBeenCalledWith("entering thrower: 1,2,3");
//             expect(dummy.logger).toHaveBeenCalledWith("exiting thrower: threw CRASH!");
//         }
//     });
// });

// describe("a logging function", function(){
//     it("should log twice with well behaved functions", ()=>{
//         let something = (a, b)=>`result=${a}:${b}`;
//         something = addLogging(something);

//         spyOnAllFunctions(window.console, "log");
//         something(22, 9);
//         expect(window.console.log).toHaveBeenCalledTimes(2);
//         expect(window.console.log).toHaveBeenCalledWith("entering something: 22,9");
//         expect(window.console.log).toHaveBeenCalledWith("exiting something: result=22:9");
//     });

//     it("should report a thrown execption", ()=>{
//         let thrower = (a, b, c)=>{
//             throw "CRASH!";
//         };
//         spyOn(window.console, "log");
//         expect(thrower).toThrow();

//         thrower = addLogging2(thrower);
//         try{
//             thrower(1, 2, 3);
//         } catch (e) {
//             expect(window.console.log).toHaveBeenCalledTimes(2);
//             expect(window.console.log).toHaveBeenCalledWith("entering thrower: 1,2,3");
//             expect(window.console.log).toHaveBeenCalledWith("exiting thrower: threw CRASH!");
//         }
//     });
// });

// describe("custom find test", function(){
//     it("should match a standard find function", ()=>{
//         let a = [22, 9, 60, 12, 4, 56];
//         console.log(a.find((x)=>x>30));
//         console.log(myFind(a, (x)=>x>30));
//         expect(JSON.stringify(a.find((x)=>x>30))===JSON.stringify(myFind(a, x=>x>30))).toBe(true);
//     });
// })

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
