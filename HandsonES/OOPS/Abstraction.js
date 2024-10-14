//abstract Class Vehicle { }
//there is no abstract keyword in JS
// but if we want to achive abtraction
// We are not going to allow create a Object of class
  
class Vehicle{
    constructor(make, model){
       if(new.target === Vehicle){
        throw new Error("Cannot instantiate abstract class / Not able to call the Constructor ");
       }
       this.make=make;
       this.model=model;
    }


    //abtract Method  - if we took abtract method means we need to ovverride the method
    // in the child class
    //startEngine();

    startEngine(){
        //console.log("Start the Engine of ", this.make);
        throw new Error("Method must be implemented / override");
    }

    displayInfo(){
        console.log("Model of Car : ", this.make, " ", this.model)
    }
}
class Car extends Vehicle{
        constructor(make, model, doors){
            super(make, model);
            this.doors=doors;
        }

        startEngine(){
            console.log("Start the Engine of : ", this.make);
        }


        displayCarInfo(){
            this.displayInfo(); // calling the super method inside child class method
           // console.log("Model of Car ", this.make, ' ', this.model);
           console.log("Doors : ", this.doors)
        }
}

//const objVehicle= new Vehicle(); // We are not able to call the Constructore of
const objCar1=new Car("Suzuki", "Baleno" , 4);
objCar1.startEngine(); 
objCar1.displayCarInfo();




