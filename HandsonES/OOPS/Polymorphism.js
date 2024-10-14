class Arethematic{
    add(){

    }

    sub(){

    }

    mul(){

    }

    div(){

    }
}

class Addition extends Arethematic{
        add(){
            let num1=10;
            let num2=20;
            return  num1+num2;
        }
}

class Subtraction{
    sub(){
        let num1=10;
        let num2=20;
        return num1-num2;
    }
}


const objAdd=new  Addition();
console.log(objAdd.add());



