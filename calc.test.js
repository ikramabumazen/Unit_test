const addition = require('./calc');
   //one digit
    test('adds "1+2" to equal 3', () => {
    expect(addition("1+2")).toBe(3);
    }); 
   //multi digits
   test('adds "100+2" to equal 102', () => {
    expect(addition("100+2")).toBe(102);
   }); 
   //double
   test('adds "1.43+2.5" to equal 3', () => {
    expect(addition("1.43+2.5")).toBe( 3.9299999999999997);
   }); 
   