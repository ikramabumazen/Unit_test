
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

                
  }); 
}//readFromConsole()



readFromConsoleAndSplit();
