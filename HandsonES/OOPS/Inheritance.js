//super class
class RBI{
    banckPolicy(){
        console.log("Bank follow the Regualtion Act 1975")
    }

    roi(){
        console.log("Rate of Intrest is = 5%")
    }
}


// subclass of rbi
class Axis extends RBI{
    roi(){
        console.log("Rate of Intrest is = 11.5")
    }

    creditCard(){
        console.log("Platinum Credit Card")
    }  
}

class SBI extends RBI {
    banckAct(){
        console.log("As per the law of 1975 for other public sector banks parental bank is SBI");
    }
    roi(){ console.log("Rate of Intrest is = 8.5%")}

    creditCard(){
        console.log("Silver Credit Card")
    }
}

// sub sub of sub class
class District extends SBI{
    roi(){ console.log("Rate of Intrest is = 12.5%")}
}

/*
const objAxis=new Axis(); // object subclass 
objAxis.banckPolicy(); // we are calling property of superclass using the object of subclass
objAxis.roi();
objAxis.creditCard(); // Platinum
console.log("---------------")
const objSBI=new SBI();
objSBI.banckPolicy();
objSBI.roi();
objSBI.creditCard(); // silver
console.log("---------------");
const objRBI=new RBI();
objRBI.banckPolicy();
objRBI.roi();
//objRBI.creditCard(); // creaditcard() is a proerty of subclass and trying to call with object of super class
*/
console.log("-----District BAnk ----------");
const objDistrict=new District();
objDistrict.banckAct(); // method of sub class of RBI
objDistrict.banckPolicy(); // method of super class 
objDistrict.roi();// super class but override in SBI 
objDistrict.creditCard()// method of sub class 
