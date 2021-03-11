const appleVariety = { typeA: "Jonathan", typeB: "Cameo", typeC: "Empire"};
const { typeA, typeB, typeC } = appleVariety;
console.log("Variety of apple", typeA);


const fruits = {firstFruit: "Banana", SecondFruit: "Cherry", thirdFruit: "Apple"};
const { firstFruit, SecondFruit, thirdFruit} = fruits
console.log(fruits)

const arr = ["banana", "cherry", "apple"];
const[a, b, c] = arr;
console.log(a,b,c)


function beverages() {
    return ["Coffee", "Cola", "Mohito"];
}
let m, n, o;
[m, n, o] = beverages();
console.log(m)


let p, q, rest;
[p, q] = [21, 22]
rest = [10, 20, 3, 4, 5]
console.log(p, q, ...rest);
console.log(rest)


const user = [
    {
        Pname: "Sherafgan Mirov",
        family: {
            mother: "Stefannie Smith",
            father: "Mike Smith",
            sister: "Cabrerra Smith"
        },
        age: 19
    },
    {
        Pname: "Tommy Hilfigger",
        family: {
            father: "John Hilfigger",
            mother: "Britney Hilfigger",
            brother: "Howard Hilfigger"
        },
        age: 20
    }
];
for (var {Pname: x, family: {mother: t} } of user ){
    console.log("userName: " + x + ", Mother: " + t)
}
