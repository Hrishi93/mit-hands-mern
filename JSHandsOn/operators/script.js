
let city={ name:"Nagpur", pin:445000 }; //
let state={name:"MH", city:"Nagpur", pin:445001};
//delete city.pin
console.log(city);
console.log(state);
console.log("pin" in city); // true
console.log("pin" in state);