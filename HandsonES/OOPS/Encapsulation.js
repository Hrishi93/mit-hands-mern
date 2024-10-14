class Student{
        constructor(fname, lname, age){
            let _fname=fname;
            let _lname=lname;
            let _age=age;

            //console.log(_fname," " ,_lname, " ",_age)
        }  
        
        //set methos to pass the values
        setfname(newFname){
            this._fname=newFname;
        }

        setlname(newLname){
            this._lname=newLname;
        }
        setAge(newAge){
            this._age=newAge;
        }

        //getter methods
        getfname(){
            return this._fname;
        }

        getlname(){
            return this._lname;
        }

        getAge(){
            return this._age;
        }

        
}


//const objStudent1=new Student("Sam", "Bahadur", 23);
const objStudent1=new Student();
objStudent1.setfname("Sam");
objStudent1.setlname("bahadur");
objStudent1.setAge(23);
//console.log(objStudent1);
//retrive the value using methods
console.log(objStudent1.getfname());
console.log(objStudent1.getlname());
console.log(objStudent1.getAge());