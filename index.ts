
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

// array

const numbers: number[] = [12, 34, 45, 67, 98];
let num1: (number | string)[] = [12, 34, 'stry'];

const persons: Person[] = [
    {
        name: 'Shah Alam',
        age: 23,
        hobby: 'cycling'
    },
    {
        name: 'Shaham',
        age: 20,
        hobby: 'chilling'
    },
    {
        name: 'Shahamam',
        age: 45,
        hobby: 'swimming'
    }
]

// function

const greeting = (name: string): void => {
    console.log(`Hello Mr. ${name}`);
}

greeting('Mizan');

const add = (a: number, b: number): number => {
    return a + b
}

console.log(add(5, 7));

const introduce = (person: Person): void => {
    console.log(`Hello, My name is ${person.name}, I am ${person.age} years old. My hobby is ${person.hobby}`);
}
introduce({
    name: 'Mousumi',
    age: 24,
    hobby: 'cycling'
})

// destrucring

const introduce2 = ({ name, age, hobby }: Person): void => {
    console.log(`Hello, My name is ${name}, I am ${age} years old. My hobby is ${hobby}`);
}
introduce2({
    name: 'Shah Alam',
    age: 23,
    hobby: 'cycling'
})

// generics

const deviceName = <T>(id: T): T => {
    return id
}
console.log(deviceName('this is apple phone'))

const getArray = <T>(arr: T[]): T[] => {
    return arr;
}

console.log(getArray([23, 34, 45, 45, 'asdd', true]));


// enum type

enum Weekend {
    SAT = 1,
    SUN = 'Sunday',
    MON = 5,
    FRI
}

console.log(Weekend.SAT);

enum Role {
    ADMIN = 5,
    READ_ONLY,
    AUTHOR = 'Monday'
}

// Tuple type data

let people: [number, String];
people = [101, "Joyela"];

console.log(people);
console.log(people[0]);
console.log(people[1]);

people.push(102, "sakib");
console.log(people);

let usersAll: [number, String];
usersAll = [1034001, "aminqs"];

console.log(usersAll);
console.log(usersAll[0]);
console.log(usersAll[1]);

usersAll.push(34622, "sakib");
console.log(usersAll);

//Array type

let usersName: Array<string>;
usersName = ["Joyelaul islam", "rabeya khatun", "pinky rani"];

// users.sort();
console.log(usersName);

usersName.push("alamin hossain");
console.log(usersName);

usersName.pop();
console.log(usersName);

usersName.unshift("mizan mia");
console.log(usersName);

usersName.shift();
console.log(usersName);


// object type


let personName: object;
personName = { name1: "Joyela" };
console.log(personName);

let userSample: object[];
userSample = [];

let user3: { userName: string, userId: number };
user3 = { userName: "Joyela", userId: 187 };
userSample.push(user3);

let user4: { userName: string, userId: number };
user4 = { userName: "bura", userId: 155 };

userSample.push(user4);

// enum string type

enum NormalDirections {
    NorthWest,
    Eastern,
    Southern,
    Westest
}
let recentDirection = NormalDirections.NorthWest;

console.log(recentDirection);
