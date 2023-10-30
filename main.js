

let height = 149 ;
let weidth = 55;
let massBody = 55 / (149 * 149)
console.log(massBody);
let mass = 15;
if(mass == 15 ){
    console.log("نقص حاد جدا في الوزن ");
}else if(mass >= 18){
    console.log("نقص حاد في الوزن ");
}else if(mass >= 25 ){
   console.log("طبيعي");
}
else if(mass >= 30 ){
    console.log("زياده في الوزن ");
 }
else if(mass >= 35 ){
    console.log("سمنه درجه اولى ");
 }
else if(mass <= 40 ){
    console.log("سمنه مفرطه");
 }

// --------------------------- //

 let i = 10;
 for ( i = 0 ; i<= 10 ; i ++)
 {
    if( i % 2 ===1 && i % 2 === 0) 
    continue;
 }
 console.log(i); 


 //--------lab 2 question number 1--------//


 let v= 25;
 for ( v = 0 ; v<= 25 ; v ++)
 {
    if (v % 2 === 0 ){
    console.log(v);

 }
 }

//  ---------question number 2 ----//

let number = 10;
for(number=1 ; number<= 10; number++)
{
    let valueSquare= number * number ;
    console.log( number  + valueSquare);
}



// ------------Question number 3 ----------------//

// same two

// -----------------question number four------//


let number1 = 0;
let number2 = 1;
let num;

console.log(number1);

for (let i = 1; i <= 9; i++) {
  console.log(number2); 
  num = number1 + number2;
  number1 = number2;
    number2 = num;
}

// -------- table----// 

for (let i= 1 ; i <= 3; i++) {
  console.log("Multiplication table " + i + ":");
  
  for (let j = 1; j <= 10; j++) {
    var result = i * j;
    console.log(i + " x " + j + " = " + result);
  }
  
  console.log("---------------------");
}
