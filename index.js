//any type
var myName = 'Md Mizanur Rahman';
myName = 21;
myName = true;
console.log(myName);
// string type
var yourName = 'Rahman';
// number type
var age = 12;
// boolean type
var isHungry = true;
//union type
var studentID = 'web-234';
studentID = 1234;
studentID = 4567;
var nameId = 2345;
nameId = 'web-123';
nameId = 1234;
var youTube = 1234;
youTube = 'sofia';
var person = {
    name: 'Shah Alam',
    age: 23,
    hobby: 'cycling'
};
var person2 = {
    name: 'Mousumi',
    age: 24,
};
console.log(person.age);
// array
var numbers = [12, 34, 45, 67, 98];
var num1 = [12, 34, 'stry'];
var persons = [
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
];
// function
var greeting = function (name) {
    console.log("Hello Mr. ".concat(name));
};
greeting('Mizan');
var add = function (a, b) {
    return a + b;
};
console.log(add(5, 7));
var introduce = function (person) {
    console.log("Hello, My name is ".concat(person.name, ", I am ").concat(person.age, " years old. My hobby is ").concat(person.hobby));
};
introduce({
    name: 'Mousumi',
    age: 24,
    hobby: 'cycling'
});
// destrucring
var introduce2 = function (_a) {
    var name = _a.name, age = _a.age, hobby = _a.hobby;
    console.log("Hello, My name is ".concat(name, ", I am ").concat(age, " years old. My hobby is ").concat(hobby));
};
introduce2({
    name: 'Shah Alam',
    age: 23,
    hobby: 'cycling'
});
// generics
var deviceName = function (id) {
    return id;
};
console.log(deviceName('this is apple phone'));
var getArray = function (arr) {
    return arr;
};
console.log(getArray([23, 34, 45, 45, 'asdd', true]));
// enum type
var Weekend;
(function (Weekend) {
    Weekend[Weekend["SAT"] = 1] = "SAT";
    Weekend["SUN"] = "Sunday";
    Weekend[Weekend["MON"] = 5] = "MON";
    Weekend[Weekend["FRI"] = 6] = "FRI";
})(Weekend || (Weekend = {}));
console.log(Weekend.SAT);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role["AUTHOR"] = "Monday";
})(Role || (Role = {}));
// Tuple type data
var people;
people = [101, "anis"];
console.log(people);
console.log(people[0]);
console.log(people[1]);
people.push(102, "sakib");
console.log(people);
var usersAll;
usersAll = [1034001, "aminqs"];
console.log(usersAll);
console.log(usersAll[0]);
console.log(usersAll[1]);
usersAll.push(34622, "sakib");
console.log(usersAll);
//Array type
var usersName;
usersName = ["anisul islam", "rabeya khatun", "pinky rani"];
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
