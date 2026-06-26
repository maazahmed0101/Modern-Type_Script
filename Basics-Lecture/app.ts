// Class Syntax Use In TS

class Student {
    names: string;
    Roll: number
    constructor(n: string, r: number) {
        this.names = n;
        this.Roll = r
    }
}
let result = new Student('maaz', 12)
console.log(result);

// Any Value Is Run No Showing Any Key
function first1<t>(Value: t) {
    console.log(Value);
}
let testingFun1 = first1('hi')
console.log(testingFun1);

let maaz: string = 'user'

enum adding  {
names = 'user',

}
