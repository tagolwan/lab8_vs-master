const converter = require('../converter');

test('1 bath to equal $0.033', () => {
    //Arrange
    let a = 1   

    //Act
    let result = converter(a)

    // 1 bath-> 0.033 dollar
//Assert
 expect("$0.033").toBe(result);
})

test('1 bath to equal $0.033 call from api', () => {
    //Arrange
    let a = 1   

    //Act
    jest.mock('exchangeRate');
    const resp = 0.033;
    exchangeRate.mockResolvedValue(resp)

    // const myMock = jest.fn();

    let result = converter(a)
    
    

    // 1 bath-> 0.033 dollar
//Assert
 expect("$0.033").toBe(result);
})

test('1 bath to equal $0.033 call from api', () => {
    //Arrange
    let a = 1   

    //Act
    jest.mock('exchangeRate');
    const resp = 0.033;
    exchangeRate.mockResolvedValue(resp)

    // const myMock = jest.fn();

    let result = converter(a)
    
    

    // 1 bath-> 0.033 dollar
//Assert
 expect("$0.033").toBe(result);
})


