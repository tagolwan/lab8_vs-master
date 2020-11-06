const Fizzbuzz = require('../fizzbuzz');

test('multiple by 3 should print Fizz', () => {
    //Arrange
    let number = 3
    

    //Act
    let result = fizzbuzz(number)

//Assert
 expect("Fizz").toEqual(result);
})

test('multiple by 5 should print Buzz', () => {
    //Arrange
    let number = 5
    

    //Act
    let result = fizzbuzz(number)

//Assert
 expect("Buzz").toEqual(result);
})

test('multiple by 15 should print FizzBuzz', () => {
     //Arrange
     let number = 15
    

     //Act
     let result = fizzbuzz(number)
 
 //Assert
  expect("FizzBuzz").toEqual(result);
})

test('multiple by 2 should print 2', () => {
     //Arrange
     let number = 2
    

     //Act
     let result = fizzbuzz(number)
 
 //Assert
  expect(result).toEqual(2);
})

test('multiple by -3 should print 0', () => {
    //Arrange
    let number = -3
   

    //Act
    let result = fizzbuzz(number)

//Assert
 expect(result).toEqual(0);
})

test('multiple by -15 should print 0', () => {
    //Arrange
    let number = -15
   

    //Act
    let result = fizzbuzz(number)

//Assert
 expect(result).toEqual(0);
})