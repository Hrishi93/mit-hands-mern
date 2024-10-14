let student={
    firstName: "Shyam",
    lastName: "Sundar",
    age: 20,  
}

let address={
    street:"123 Main St",
    city:"Anytown",
}


//const key=Object.keys(student)
console.log("Keys ",Object.keys(student));
console.log("Values ", Object.values(student))
console.log("-------");
const newstudent=Object.assign(student, address);
console.log(newstudent);


let num1=[1,2,3,4]
let num2=[11,22,33,44]
const numbers=num1.concat(num2);
console.log(numbers);
console.log("------------");
const numbers2=[...num1, ...num2]
console.log(numbers2)