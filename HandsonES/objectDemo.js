//Object using Leterals

/*
const bojectNAme={}
const objName= new Object()
*/
const employee={
    empName:"Sohel Khain",
    city: "Mumbai",
    age: 25,
   
    address:{
        street:"Marin Line",
        pincode:400002
    },

    info : function(){
        console.log("Employee Informatiuon : ", employee.empName, employee.city, employee.age)
        console.log("Address : ",employee.address.street, employee.address.pincode)
    }
}

//console.log("Employee Informatiuon : ", employee.empName, employee.city, employee.age)
//console.log("Address : ",employee.address.street, employee.address.pincode)
employee.info()
console.log("-------------------")

const students={}
console.log(students)// Empty Object
students.stdName="Ram Mohan";
students.year="2nd Year"
console.log(students.stdName, students.year)
console.log("-------------------")


//Object Consturctor  - buit in Object()
const banks=new Object();
banks.bankName="SBI";
banks.bankBranch="Alandi"

banks.bankInfo=function(){
    console.log("Bank Name: ", this.bankName, "Branch: ", this.bankBranch)
}

console.log(banks.bankName);
console.log(banks.bankBranch);
banks.bankInfo();


