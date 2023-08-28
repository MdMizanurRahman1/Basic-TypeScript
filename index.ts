
//any type
let myName: any = 'Md Mizanur Rahman';
myName = 21;
myName = true;
console.log(myName);

// string type

let yourName: string = 'Rahman'

// number type
let age = 12;
// boolean type

let isHungry: boolean = true;

//union type

let studentID: string | number = 'web-234'
studentID = 1234;
studentID = 4567;

// type alies

type stringOrNumber = string | number;

let nameId: stringOrNumber = 2345;
nameId = 'web-123';
nameId = 1234;