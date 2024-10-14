const fruits=["Banana", "Apple", "orange"];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1); // Banana


const student = {
    firstName:"Ram",
    lastName: "Mohan"
}

const {firstName, lastName} = student;
console.log(firstName);
console.log(lastName)
/*
const cities = ["Nagpur", "Pune", "Nashik", "Mumbai"]
console.log(cities)
console.log('--------------------')
console.log(cities[0])
console.log('--------------------')

let n;
for(n=0; n<cities.length; n++){
    console.log(cities[n])
}
console.log('--------------------')

for(city of cities){
        console.log(city)
}

console.log('--------------------')
const [city1, city2, city3, city4] = cities;
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);





/*const employee ={
 employeeName:"Sameer Kulkarni",
 employeeId: 1234,
 employeeAge: 28,
 employeeSalary: 25000
}

console.log(employee);

const {employeeName, employeeId, employeeAge,employeeSalary} = employee;
console.log(employeeName); // variable Name
console.log(employeeId);
console.log(employeeAge);
console.log(employeeSalary);
/*
console.log(employee.employeeName);
console.log(employee.employeeAge);
*/

