function test({ age }, demo) {
    console.log(age);
    console.log(demo);

}
const result = test(
    { age: 20, name: "ross" },
    ["dell", "hp"]
)

// -------------------------------------------
function getUser({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const user = {
    name: "pooja",
    age: 22
};

getUser(user);

// ----destructuring object in function

function personInfo({ name, age, city }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
}


const a = { name: "pooja", age: 25, city: "New York" };

personInfo(a);
// ---------Destructuring Arrays in Function Parameters
function coordinate([x, y]) {
    console.log(`X: ${x}, Y: ${y}`);
}
const c = [10, 20]
coordinate(c)


// ------------------Destructuring with Default Values:----------

// function printDetails({ name = "Unknown", age = 0, city = "Unknown" }) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     console.log(`City: ${city}`);
// }

// const person = { name: "John", age: 30 };

// printDetails(person);
function print({ name = "pp", age }) {

}
print()


