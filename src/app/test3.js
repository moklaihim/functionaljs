function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};

function SubType(){
    this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function(){
    return this.subproperty;
};

function SubSubType(){
    this.subsubproperty = false;
}

SubSubType.prototype = Object.create(SubType.prototype);
SubSubType.prototype.getSubSubValue = function(){
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

console.log(Object.getOwnPropertyNames(dict).map(name=>name));