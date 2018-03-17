
var stdin = process.openStdin();

function readFromConsoleAndSplit(){

stdin.addListener("data", function(d) {
  let str = d.toString().trim();
// split 
var res = str.split("");
  console.log(res);

 // filter res array according operation
//------------Addition--------------------------------
                let sum = res.filter(item =>
                item == "+");
                if (sum.length !=0) {
                  console.log("sum()");
                } 
//-----------Subtraction ------------------------------
let sub = res.filter(item =>
  item == "-");
  if (sub.length !=0) {
   console.log("sub()");
   }
//------------Multiplication --------------------------
let mult = res.filter(item =>
  item == "*");
  if (mult.length !=0) {
   console.log("multiply()");
   }             

//------------Division --------------------------
let dev = res.filter(item =>
  item == "/");
  if (dev.length !=0) {
   console.log("divide()");
   }

  });              
}//readFromConsole()

readFromConsoleAndSplit();

