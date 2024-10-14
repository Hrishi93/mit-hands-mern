
//Normal Function
function add(){
    let num1=10;
    let num2=20;
    return num1+num2;
}

function addPara(num1, num2){
        return num1+num2;
}

function msg(){
    return "Hello MIT Students in Normal"
}

//arrow Function
addArrow = () => (10+20);

addParaArrow = (num1, num2) =>(num1+num2);

msgArrow = () =>("Hello MIT Students in Arrow")

console.log("Normal Function ",add());
console.log("Arrow Function ",addArrow());

console.log("----------------")
console.log("Normal Function ",msg());
console.log("Arrow Function ",msgArrow());

console.log("----------------")
console.log("Normal Function ",addPara(23, 45));
console.log("Arrow Function ",addParaArrow(56,76));
