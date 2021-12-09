   // insert key below
var myInt = 1939;
    // insert eMessage below.
var myArray = [20, 12, 18, 30, 21]; // output: SCOUT

    // function to convert each digit/num from myInt into an array
let myFunc = num => Number(num);
var intArr = Array.from(String(myInt), myFunc);

    // function to subtract the elements in intArr from elements in myArray
var mutatedArr = []
var startingIndex = 0;

for(var i = 0;i <= myArray.length-1;i++) {
  if (startingIndex==intArr.length) {
    startingIndex = 0;
    mutatedArr.push(myArray[i] - intArr[startingIndex++]);
  }
  else {
    mutatedArr.push(myArray[i] - intArr[startingIndex++]);
  }
}

   // function to convert each number in mutatedArr to its corresponding letter in the alphabet (capital)
function getLetter(num){
    var letter = String.fromCharCode(num + 64);
    return letter
  }
  
mutatedArr.forEach(function(n) {
    console.log(getLetter(n));
  });