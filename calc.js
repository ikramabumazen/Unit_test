
function readFromConsole(){
var stdin = process.openStdin();
stdin.addListener("data", function(d) {
  //console.log(d.toString());
  let userEntered= (d.toString().trim() );
   //console.log("you Entered :[" +userEntered+ "]");

return d.toString() ;
       
  });  
}//readFromConsole()

let readString =readFromConsole();

console.log( readString);