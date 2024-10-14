// if we want to ittrete the properties of object then we use for-in
let employee={
    name:"Rahul",
    age:25,
    city:"Pune"
}

console.log(employee.name);
console.log(employee.city);
console.log("-----------------")

for(let x in employee){
    console.log(x)
}

