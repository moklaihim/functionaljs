// var fn1, fn2, fn3, fn4;

// describe("pipeTwo", function(){

//     beforeEach(()=>{
//         fn1 = () => {};
//         fn2 = () => {};
//     });

//     it("works with single arguments", ()=>{
//         spyOn(window, "fn1").and.returnValue(1);
//         spyOn(window, "fn2").and.returnValue(2);

//         const pipe = pipeTwo(fn1, fn2);
//         const result = pipe(22);

//         expect(fn1).toHaveBeenCalledTimes(1);
//         expect(fn2).toHaveBeenCalledTimes(1);
//         expect(fn1).toHaveBeenCalledWith(22);
//         expect(fn2).toHaveBeenCalledWith(1);
//         expect(result).toBe(2);
//     });

//     it("works with multiple arguments", ()=>{
//         spyOn(window, "fn1").and.returnValue(11);
//         spyOn(window, "fn2").and.returnValue(22);

//         const pipe = pipeTwo(fn1, fn2);
//         const result = pipe(12, 4, 56);

//         expect(fn1).toHaveBeenCalledTimes(1);
//         expect(fn2).toHaveBeenCalledTimes(1);
//         expect(fn1).toHaveBeenCalledWith(12, 4, 56);
//         expect(fn2).toHaveBeenCalledWith(11);
//         expect(result).toBe(22);
//     });
// });

// describe("pipeline", function(){
//     beforeEach(()=>{
//         fn1 = ()=>{};
//         fn2 = ()=>{};
//         fn3 = ()=>{};
//         fn4 = ()=>{};
//     });

//     it("works with a single function", ()=>{
//         spyOn(window, "fn1").and.returnValue(11);

//         const pipe = pipeline(fn1);
//         const result = pipe(60);

//         expect(fn1).toHaveBeenCalledTimes(1);
//         expect(fn1).toHaveBeenCalledWith(60);
//         expect(result).toBe(11);
//     });

//     it("works with 4 functions, multiple arguments", ()=>{
//         spyOn(window, "fn1").and.returnValue(111);
//         spyOn(window, "fn2").and.returnValue(222);
//         spyOn(window, "fn3").and.returnValue(333);
//         spyOn(window, "fn4").and.returnValue(444);

//         const pipe = pipeline(fn1, fn2, fn3, fn4);
//         const result = pipe(24, 11, 63);

//         expect(fn1).toHaveBeenCalledTimes(1);
//         expect(fn2).toHaveBeenCalledTimes(1);
//         expect(fn3).toHaveBeenCalledTimes(1);
//         expect(fn4).toHaveBeenCalledTimes(1);
//         expect(fn1).toHaveBeenCalledWith(24, 11, 63);
//         expect(fn2).toHaveBeenCalledWith(111);
//         expect(fn3).toHaveBeenCalledWith(222);
//         expect(fn4).toHaveBeenCalledWith(333);
//         expect(result).toBe(444);
//     });
// });

// describe("compose", function(){
//     beforeEach(()=>{
//         fn1 = ()=>{};
//         fn2 = ()=>{};
//         fn3 = ()=>{};
//         fn4 = ()=>{};
//     });    

//     it("works with 4 functions, multiple arguments", ()=>{
//         spyOn(window, "fn1").and.returnValue(111);
//         spyOn(window, "fn2").and.returnValue(222);
//         spyOn(window, "fn3").and.returnValue(333);
//         spyOn(window, "fn4").and.returnValue(444);

//         const pipe = compose(fn4, fn3, fn2, fn1);
//         const result = pipe(24, 11, 63);

//         expect(fn1).toHaveBeenCalledTimes(1);
//         expect(fn2).toHaveBeenCalledTimes(1);
//         expect(fn3).toHaveBeenCalledTimes(1);
//         expect(fn4).toHaveBeenCalledTimes(1);
//         expect(fn1).toHaveBeenCalledWith(24, 11, 63);
//         expect(fn2).toHaveBeenCalledWith(111);
//         expect(fn3).toHaveBeenCalledWith(222);
//         expect(fn4).toHaveBeenCalledWith(333);
//         expect(result).toBe(444);
//     });
// });

var myCity;

describe("chanify", function(){
    beforeEach(()=>{
        myCity = new City("Montevideo, Uruguay", -34.9011, -56.1645);
        myCity = chainify(myCity);
    });

    it("doesn't affect get functions", ()=>{
        expect(myCity.getName()).toBe("Montevideo, Uruguay");
        expect(myCity.getCoords()[0]).toBe(-34.9011);
        expect(myCity.getCoords()[1]).toBe(-56.1645);
    });

    it("doesn't affect getting attributes", ()=>{
        expect(myCity.name).toBe("Montevideo, Uruguay");
        expect(myCity.lat).toBe(-34.9011);
        expect(myCity.long).toBe(-56.1645);
    });

    it("returns itself from setting functions", ()=>{
        expect(myCity.setName("Other name")).toBe(myCity);
        expect(myCity.setLat(11)).toBe(myCity);
        expect(myCity.setLat(22)).toBe(myCity);
    });

    it("allows chaining", ()=>{
        const newCoords = myCity
            .setName("Pune, India")
            .setLat(18.5626)
            .setLong(73.8087)
            .getCoords();

        expect(myCity.name).toBe("Pune, India");
        expect(newCoords[0]).toBe(18.5626);
        expect(newCoords[1]).toBe(73.8087);
    });
});
// describe("with partialCurryingByBind2", function(){
//     it("you could fix arguments in several steps", ()=>{
//         const suma = partialCurryingByBind2(sum2, 3);
//         const sumb = suma(1, 2);
//         const sumc = sumb(3);
//         expect(sumc).toBe(sum2(1, 2, 3));
//     });

//     it("you could fix arguments in a single step", ()=>{
//         const suma = partialCurryingByBind2(sum2, 4);
//         const sumb = suma(10, 11, 12, 13);
//         expect(sumb).toBe(sum2(10, 11, 12, 13));
//     });

//     it("you could fix ALL the arguments", ()=>{
//         const sumall = partialCurryingByBind2(sum2, 5);
//         expect(sumall(20, 21, 22, 23, 24)).toBe(sum2(20, 21, 22, 23, 24));
//     });

//     it("you could fix one argument at a time", ()=>{
//         const sumone = partialCurryingByBind2(sum2, 6)(30)(31)(32)(33)(34)(35);
//         expect(sumone).toBe(sum2(30, 31, 32, 33, 34, 35));
//     });
// });

// describe("with partialCurryingByBind", function(){
//     it("you could fix arguments in several steps", ()=>{
//         const make3a = partialCurryingByBind(make3);
//         const make3b = make3a(1, 2);
//         const make3c = make3b(3);
//         expect(make3c).toBe(make3(1, 2, 3));        
//     });
//     it("you could fix arguments in a single step", ()=>{
//         const make3a = partialCurryingByBind(make3);
//         const make3b = make3a(10, 11, 12);
//         expect(make3b).toBe(make3(10, 11, 12));
//     });
//     it("you could fix ALL the arguments", ()=>{
//         const make3all = partialCurryingByBind(make3);
//         expect(make3all(20, 21, 22)).toBe(make3(20, 21, 22));
//     });
//     it("you could fix one argument at a time", ()=>{
//         const make3one = partialCurryingByBind(make3)(30)(31)(32);
//         expect(make3one).toBe(make3(30, 31, 32));
//     });
// });

// describe("with partialByClosure()", function(){
//     it("you could fix no arguments", ()=>{
//         const nonsensePC0 = partialByClosure(nonsense);
//         expect(nonsensePC0(0,1,2,3,4)).toBe(nonsense(0,1,2,3,4));
//     });

//     it("you could fix only some initial arguments, and then some more", ()=>{
//         const nonsensePC1 = partialByClosure(nonsense, 1, 2, 3);
//         const nonsensePC1b = nonsensePC1(undefined, 5);
//         expect(nonsensePC1b(4)).toBe(nonsense(1, 2, 3, 4, 5));
//     });

//     it("you could skip some arguments", ()=>{
//         const nonsensePC2 = partialByClosure(nonsense, undefined, 22, undefined, 44);
//         expect(nonsensePC2(11, 33, 55)).toBe(nonsense(11, 22, 33, 44, 55));
//     });

//     it("you could fix only some last arguments", ()=>{
//         const nonsensePC3 = partialByClosure(nonsense, undefined, undefined, undefined, 444, 555)
//         expect(nonsensePC3(111)(222, 333)).toBe(nonsense(111, 222, 333, 444, 555));
//     });

//     it("you could simulate currying", ()=>{
//         const nonsensePC4 = partialByClosure(nonsense);
//         expect(nonsensePC4(6)(7)(8)(9)(0)).toBe(nonsense(6, 7, 8, 9, 0));
//     });

//     it("you could fix ALL the arguments", ()=>{
//         const nonsensePC5 = partialByClosure(nonsense, 16, 17, 18, 19, 20);
//         expect(nonsensePC5()).toBe(nonsense(16, 17, 18, 19, 20));
//     });
// });

// describe("with partialByEval()", function(){
//     it("you could fix no arguments", ()=>{
//         const nonsensePC0 = partialByEval(nonsense);
//         expect(nonsensePC0.length).toBe(5);
//         expect(nonsensePC0(0,1,2,3,4)).toBe(nonsense(0,1,2,3,4));
//     });
    
//     it("you could fix only some initial arguments", ()=>{
//         const nonsensePC1 = partialByEval(nonsense, 1, 2, 3);
//         expect(nonsensePC1.length).toBe(2);
//         expect(nonsensePC1(4,5)).toBe(nonsense(1,2,3,4,5));
//     });

//     it("you could skip some arguments", ()=>{
//         const nonsensePC2 = partialByEval(nonsense, undefined, 22, undefined, 44);
//         expect(nonsensePC2.length).toBe(3);
//         expect(nonsensePC2(11, 33, 55)).toBe(nonsense(11, 22, 33, 44, 55));
//     });

//     it("you could fix only some last arguments", ()=>{
//         const nonsensePC3 = partialByEval(nonsense, undefined, undefined, undefined, 444, 555);
//         expect(nonsensePC3.length).toBe(3);
//         expect(nonsensePC3(111, 222, 333)).toBe(nonsense(111, 222, 333, 444, 555));
//     });

//     it("you could fix ALL the arguments", ()=>{
//         const nonsensePC4 = partialByEval(nonsense, 6, 7, 8, 9, 0);
//         expect(nonsensePC4.length).toBe(0);
//         expect(nonsensePC4()).toBe(nonsense(6, 7, 8, 9, 0));
//     });
// });

// describe("with curryByBind2", function(){
//     it("you fix arguments one by one", ()=>{
//         const suma = curryByBind2(sum2, 5);
//         const sumb = suma(1)(2)(3)(4)(5);
//         expect(sumb).toBe(sum2(1, 2, 3, 4, 5));
//     });

//     it("you can also work with arity 1", ()=>{
//         const suma = curryByBind2(sum2, 1);
//         const sumb = suma(111);
//         expect(sumb).toBe(sum2(111));
//     });
// });

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
