const isCorrectOperation = require('./calc');
//let res=["1"] ,str="1";

   //one digit
    test('adds "1" to equal -1', () => {
    expect(isCorrectOperation(["1"],"1")).toBe(-1);
    }); 
   
    test('adds "" to equal -1', () => {
        expect(isCorrectOperation([],"")).toBe(-1);
        }); 

        test('adds "1+" to equal -1', () => {
            expect(isCorrectOperation(["1","+"],"1+")).toBe(-1);
            }); 

            test('adds "123" to equal -1', () => {
                expect(isCorrectOperation(["1","2","3"],"123")).toBe(-1);
                }); 
                test('adds "&15" to equal -1', () => {
                    expect(isCorrectOperation(["&","1","5"],"&15")).toBe(-1);
                    }); 
                    test('adds "1+2+3" to equal -1', () => {
                        expect(isCorrectOperation(["1","+","2","+","3"],"1+2+3")).toBe(-1);
                        }); 
   //invalid operations format "" , "1" , "1+" "+1" "123" "++1" "$12" "1&2" or isCorrectOperation() 
   // -1+2
   //test cases of subtraction => same as addition
   //other all functions 
   // div on zero 
   // div 0/num

