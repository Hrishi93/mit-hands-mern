let math=80;
let english=80;
let science=81;

let obtain=math+english+science;
console.log("Obtain Marks ="+obtain);

let perc = (obtain/300)*100
console.log("Percentage = "+perc+"%");

switch (true){
    case (perc>100):
        console.log("There will no percentage more than 100%");
        break;
        
    case (perc >= 90 && perc<=100):
        console.log("Grade A");
        break;

    case (perc >=80 && perc<90):
        console.log("Grade B");
        break;
        
    case (perc >=70 && perc<80):
        console.log("Grade C");  
        break;
    
    default:
        console.log("Failed");
        break;
}
console.log("Out of swith")





/*

let result=(perc>=60) ? "Passed" : "Failed";
//short hand for if-else
console.log("Result = "+result);
        per=(obtain marks/ total)*100


let perc = (obtain/300)*100
console.log("Percentage = "+perc+"%");

if (perc>100)
    console.log("There will no percentage more than 100%");
else if (perc >= 90 && perc<=100)
    console.log("Grade A");
else if(perc >=80 && perc<90)
    console.log("Garde B")
else if(perc >=70 && perc<80)
    console.log("Grade C");
else 
    console.log("Failed");
*/