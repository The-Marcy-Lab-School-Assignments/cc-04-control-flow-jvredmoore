//1
function fizzBuzz(){
 for(let i = 1; i <= 100; i++){
     if(i % 5 === 0 && i % 3 === 0){
         console.log("fizzbuzz");
     }else if(i % 5 === 0){
         console.log("buzz");
     }else if(i % 3 === 0 && i % 5 === 0){
         console.log("fizzbuzz")
     }else{
         console.log(i);
     }
  } 
}

// fizzBuzz();

//2
function fizzBuzz(number){
  let answer = []
  for(let i = 1; i <= number; i++){
      if(i % 3 === 0 && i % 5 === 0){
          answer.push("FizzBuzz")
      }else if(i % 5 === 0){
          answer.push("Buzz")
      }else if(i % 3 === 0){
          answer.push("Fizz")
      }else {
          answer.push(i)
      }
  
}

return answer