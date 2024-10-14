const numbers1=[10,20,30,40];
const numbers2=[11,22,33,44];


//console.log([...numbers1,...numbers2])
const numbers=[...numbers1,...numbers2]
console.log(numbers)
console.log('-------------')
console.log(numbers1.concat(numbers2));
console.log('-------------')
console.log(numbers1+numbers2);

//for copiying the array
let copynumbers2 = [...numbers2];
console.log(copynumbers2)
copynumbers2 = [...numbers1];
console.log(copynumbers2)