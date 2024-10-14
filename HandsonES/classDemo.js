
let fname="Kaushal";
let age="27";

//function
function msg(){
    console.log("Hello ",fname," your age is ",age);
    //console.log("Hello ",firstName," your age is ",age1);
}


class Hello{
    fname="Hrishikesh";// data prop
    age=30; // data prop

    //methods
    msg(){
       //console.log("Hello ",fname," your age is ",age) // global variable
        console.log("Hello ",this.fname," your age is ",this.age)
    }
}

const hello=new Hello(); // object 
console.log(hello);
console.log("-------------------")
console.log(fname)
console.log(age)
msg();

console.log("-------------------")
console.log(hello.fname)  // calling the properties of Hello Call syntax objectName.propert
console.log(hello.age)
hello.msg();


