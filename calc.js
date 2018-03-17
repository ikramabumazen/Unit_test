
function readFromConsoleAndSplit(){
var stdin = process.openStdin();
stdin.addListener("data", function(d) {
  let str = d.toString().trim();

// split by ""
var res = str.split("");
console.log(res);
       
  });  
}//readFromConsole()

readFromConsole();
