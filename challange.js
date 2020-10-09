Q : Reverse a string

function reverseString(str) {
  
  var answer = ""
  for (var i = str.length-1; i >= 0; i--){
    answer+=str.charAt(i)
  }
  return answer;
}

reverseString("hello");


Q : Factorialize

function factorialize(num) {
var answer = 1;
  for (var i =2; i <= num; i++){
    answer = answer * i
  }
  return answer;
}

console.log(factorialize(5));



Q : Palindrome

function checkPalindromd(str){
  var answer = "";
  var tempString = ""
  
  // Filter out anything other than a-z
  for (var i = 0; i< str.length; i++){
    if (str.toUpperCase().charCodeAt(i) > 64 &&
       str.toUpperCase().charCodeAt(i) < 91 || str.
 charCodeAt(i) > 47 && str.charCodeAt(i) < 58){
        tempString +=str.charAt(i).toUpperCase()
    }
  }
  
  answer = tempString.split("").reverse().join("")
  if (answer == tempString){
    return true
  }
  
  return false;
}

console.log(checkPalindromd("hello"))
console.log(checkPalindromd("kayak"))
console.log(checkPalindromd("eye"))
console.log(checkPalindromd("malayalam"))
console.log(checkPalindromd("bonjour"))

//split("") -> CHange string to array
// reverse() -> Reverse item in an array
// join("") -> COmbine the array and return it as string

// answer == str -> palidrome



Q : Sum of Even Fibonacci Number

function sumEvenFibs(num){
  var a = 1
  var b = 1
  var sum = 0
  for (var i = 0; i < num/2; i++){
    if (a %2 == 0){
      sum += a;
    }
    if (b % 2 == 0) {
      sum += b;
    }
    
    a = a + b
    b = a + b
    
  }
  return sum
}

console.log(sumEvenFibs())
