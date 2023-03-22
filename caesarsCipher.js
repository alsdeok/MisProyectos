//                                          Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as 
// a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    
    const abc = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
    ];
    const signosYEspacios = /[^(\W)]+/g;
    console.log(str.match(signosYEspacios))
    const arrayP = str.match(signosYEspacios);
    console.log(arrayP)
    const arrayTransformado = [];
    for(let i = 0; i< arrayP.length; i++)
    {
        const arrayFals = [];
        let elemMasTrece = arrayP[i].split("").map(elemento => {return abc.indexOf(elemento) + 13});
        const elemVuelta = elemMasTrece.map(elemento => 
            {
                if(elemento > 25){ 
                    elemento -= 26;
                }
                return elemento;
            })
            console.log(elemVuelta);
            for(let j = 0; j< elemVuelta.length;j++)
            {
                arrayFals.push(abc[elemVuelta[j]]);
            }
        arrayTransformado.push(arrayFals.join(""));
        
    }
    const varIf = str.slice(-1,(str.length));
    const stringFinal = arrayTransformado.join(" ");
    if(/^\W/.test(varIf)){
        return stringFinal.concat(str.slice(-1,(str.length)));
    }else return stringFinal;
    }





  
    console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT"))

    //
    function rot13Simplificado(str) {
    
        var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/","1","2","3","4","5","6","7","8","9","0"];
        
        var alphabetsMas13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/","1","2","3","4","5","6","7","8","9","0"];
        
        var resultStr = [];
        for(let i=0; i<str.length; i++){
            for(let j =0; j<alphabets.length; j++){
                if(str[i] === alphabets[j]){
                resultStr.push(alphabetsMas13[j]);
                }
            }
        }
        return resultStr.join("");
      };
    
      console.log(rot13Simplificado("SERR CVMMN!"));