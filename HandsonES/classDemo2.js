class Employee{
    //data property
  

    constructor(empName, empSalary){
        this.ename = empName;
        this.esalary=empSalary;
        console.log("Hello, ", this.ename, " salary is ", this.esalary, ". Rs")
    }


    //method
    annualSalary(){
        this.totalSalary=12*this.esalary
    }

    packageyr(){
        console.log(this.totalSalary)
    }


    add(num1, num2){
        this.num1=num1;
        this.num2=num2;
        //console.log(num1+num2);
        return num1+num2;
    }
   
}// end class

function add(num1, num2){
    return num1+num2;
}


const objEmp=new Employee("Sameer", "250000");
objEmp.annualSalary();
objEmp.packageyr();
console.log(objEmp.add(23,45));// call the method of Class Employee
console.log(add(100,45)) // call the functioncls
