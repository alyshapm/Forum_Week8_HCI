// edit: fixed syntax, prints the letters on one line
   // calling the function
console.log(digitalDecipher([17,10, 17, 14, 20, 29, 7, 19, 2, 18, 24, 11, 16, 27, 9, 10], 1965)); // pakistanairforce
console.log(digitalDecipher([20, 12, 18, 30, 21], 1939)); // scout
console.log(digitalDecipher([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939)); // masterpiece
console.log(digitalDecipher([15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20], 12)); // nomoretears
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990)); // mubashir
console.log(digitalDecipher([17, 10, 15, 16, 20, 29, 5, 21], 1947)); // pakistan
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100)); // edabit
console.log(digitalDecipher([2, 13, 32, 22, 9, 2], 1173)); // alysha

   // function to decode
function digitalDecipher(eMessage, key) {
     // converts each digit/num from key into an array
 let myFunc = num => Number(num);
 var intArr = Array.from(String(key), myFunc);

     // subtracts the elements in intArr from elements in eMessage
 var mutatedArr = [];
 var startingIndex = 0;

 for(var i = 0;i <= eMessage.length-1;i++) {
   if (startingIndex==intArr.length) {
     startingIndex = 0;
     mutatedArr.push(eMessage[i] - intArr[startingIndex++]);
   }
   else {
     mutatedArr.push(eMessage[i] - intArr[startingIndex++]);
   }
 }

   // converts each number in mutatedArr to its corresponding letter in the alphabet (capital)
 function getLetter(num){
     var letter = String.fromCharCode(num + 96);
     return letter;
   }
   
 var decodedMsg = "";
 mutatedArr.forEach(function(n) {
     decodedMsg += getLetter(n);
   });

 return decodedMsg;
}