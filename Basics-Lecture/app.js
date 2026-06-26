"use strict";
// Class Syntax Use In TS
class Student {
    names;
    Roll;
    constructor(n, r) {
        this.names = n;
        this.Roll = r;
    }
}
let result = new Student('maaz', 12);
console.log(result);
// Any Value Is Run No Showing Any Key
function first1(Value) {
    console.log(Value);
}
let testingFun1 = first1('hi');
console.log(testingFun1);
