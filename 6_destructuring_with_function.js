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
