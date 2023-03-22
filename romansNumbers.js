// JavaScript Algorithms and Data Structures
// JavaScript Algorithms and Data Structures Projects
// Roman Numeral Converter
// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
//      M   ------->    1000
//      CM  ------->    900
//      D   ------->    500
//      CD  ------->    400
//      C   ------->    100
//      XC  ------->    90
//      L   ------->    50
//      XL  ------->    40
//      X   ------->    10
//      IX  ------->    9
//      V   ------->    5
//      IV  ------->    4
//      I   ------->    1
// All roman numerals answers should be provided in upper-case.


romanize(500);

function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      roman = '' ;
  for ( let i in lookup ) {
    while ( num >= lookup[i] ) {
    console.log(lookup[i]);
      roman += i;
      num -= lookup[i];
    }
  }
 return roman;
}
/////////////////////////////////////////////////////////////////////////

function convertToRoman(num) {
  const arrayFinal = [];
  switch (num.toString().length){
    case 1:{
      arrayFinal.push(length1(num));  
    }
      break;
    case 2:{
     let numero2 = num.toString().split("");
     arrayFinal.push(length2(parseInt(numero2[0]), parseInt(numero2[1])));
     
    }
      break;
    case 3:{
      let numero3 = num.toString().split("");
      arrayFinal.push(length3(parseInt(numero3[0]),parseInt(numero3[1]),parseInt(numero3[2])));
    }
      break;
    case 4:{
      let numero4 = num.toString().split("");
      arrayFinal.push(length4(parseInt(numero4[0]),parseInt(numero4[1]),parseInt(numero4[2]),parseInt(numero4[3])));
    }
      break;
  } 
  console.log(arrayFinal.join(""));
  return arrayFinal.join("");
}


function length1(numero)
{
  const arrayLength1 = [];
  switch(numero)
  {
    case 1:
    case 2:
    case 3:
    {
      for (let i = 1; i <= numero; i++)
      {
        arrayLength1.push("I");
      }
    }break;
    case 4:
    {
      arrayLength1.push("IV");
    } break;
  
    case 5:
    {
       arrayLength1.push("V"); 
    }break;
    case 6:
    case 7:
    case 8:
    {
      for(let i = 1 ;i <= numero-5; i++)
      {
        arrayLength1.push("I")
      }
      arrayLength1.unshift("V")
    } break;
    case 9:
      {
        arrayLength1.push("IX");
      }break;
  }
  console.log(arrayLength1);
  return arrayLength1.join("");

}  

function length2(num1, num2){
  const arrayLength2 = [];
  arrayLength2.push(length1(num2))
  if(num1 <= 3){
    for (let i = 0; i < num1; i++){
      arrayLength2.unshift("X");
    }
  }else if(num1 == 4){
    arrayLength2.unshift("XL")
  }else if(num1 == 5){
    arrayLength2.unshift("L")
  }else if(num1 > 5 && num1 < 9){
    for(let i = 0; i < num1 - 5; i++){
      arrayLength2.unshift("X");
    }
    arrayLength2.unshift("L");
  }else{
    arrayLength2.unshift("XC");
  }
  console.log(arrayLength2)
  return arrayLength2.join("");

}

function length3(num1, num2, num3){
  const arrayLength3 = [];
  arrayLength3.push(length2(num2,num3))
  if(num1 <= 3){
    for (let i = 0; i < num1; i++){
      arrayLength3.unshift("C");
    }
  }else if(num1 == 4){
    arrayLength3.unshift("CD")
  }else if(num1 == 5){
    arrayLength3.unshift("D")
  }else if(num1 > 5 && num1 < 9){
    for(let i = 0; i < num1 - 5; i++){
      arrayLength3.unshift("C");
    }
    arrayLength3.unshift("D");
  }else{
    arrayLength3.unshift("CM");
  }
  console.log(arrayLength3)
  return arrayLength3.join("");
}

function length4(num1,num2,num3,num4){
  const arrayLength4 = [];
  arrayLength4.push(length3(num2,num3,num4))
  if(num1 <= 3){
    for (let i = 0; i < num1; i++){
      arrayLength4.unshift("M");
    }}
  console.log(arrayLength4)
  return arrayLength4.join("");
};
console.log(convertToRoman(1511));

