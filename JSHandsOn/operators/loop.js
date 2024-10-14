// if we are not aware how many time we need to itret block that time we use while loop
let n=0;
let num=7;
while(n<=10){  
    n++; // 1 2 3 4  5
    if(n==4){
        //console.log("Terminate the perticular iteration"); // excecute
        console.log("Stop the loop")
        break;
    }
    console.log(n+" * "+num+" = "+n*num); // 7 14 21 35
}
console.log("Outside "+n)

