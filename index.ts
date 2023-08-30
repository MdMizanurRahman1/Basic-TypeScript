
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

type numOrString = string | number;
let youTube: numOrString = 1234;
youTube = 'sofia';

// object

interface Person { name: string; age: number; hobby?: string }

let person: Person = {
    name: 'Shah Alam',
    age: 23,
    hobby: 'cycling'
}

let person2: Person = {
    name: 'Mousumi',
    age: 24,

}

console.log(person.age);