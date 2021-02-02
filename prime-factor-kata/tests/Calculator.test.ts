import Calculator from '../src/Calculator';

describe('calculate', function() {
  it('add', function() {
    let result = Calculator.Sum(5, 2);
    expect(result).toBe(7);   
  });

  it('substract', function() {
    let result = Calculator.Difference(5, 2);
    expect(result).toBe(3);
  });

  it('multiply', function() {
    let result = Calculator.Multiply(5,2);
    expect(result).toBe(10);
  });

  it('divide', function(){
    let result = Calculator.Divide(5,2);
    expect(result).toBe(2.5);
  })
});