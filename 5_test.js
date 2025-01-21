function getUser(name) {
    return {
        fname: name,
        skills: ["js", "react"]
    }
}
//                     rename             nested destructring
const { result, fname: fullName, skills: [x, y] } = getUser("john")
console.log(fullName)
console.log(result)
console.log(y)