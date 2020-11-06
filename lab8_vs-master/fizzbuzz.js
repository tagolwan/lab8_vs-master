function fizzbuzz(number) {
    if(number % 15 == 0){
        return "FizzBuzz";
    }else if(number % 3 == 0){
        return "Fizz";
    }else if(number % 5 == 0){
        return "Buzz";
    }else if(number < 0){
        return 0;
    }else{
        return number;
    }
   }
   module.exports = fizzbuzz;