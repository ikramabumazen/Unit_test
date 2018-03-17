
var stdin = process.openStdin();

function readFromConsoleAndSplit(){
stdin.addListener("data", function(d) {
  let str = d.toString().trim();
var res = str.split("");

 // filter res array according operation
isAddition(res, str);   
isSubtraction(res.str);    
isMult(res,str);

//------------Division --------------------------
let dev = res.filter(item =>
  item == "/");
  if (dev.length !=0) {
   console.log("divide()");
   }
//------------Module --------------------------
let mod = res.filter(item =>
  item == "%");
  if (mod.length !=0) {
   console.log("module()");
   }

  });              
}//readFromConsole()
//--------------- Addition functions ---------------------------------
//Isaddition 
function isAddition(res,str){
  let sum = res.filter(item =>item == "+");
    if (sum.length !=0) {
      addition(str);
    }
    else return ;
}
//addition
function addition(str){
 } 
//---------------------------------------------------------------------------
//--------------- Subtraction functions ---------------------------------
//IsSubtraction
function isSubtraction(res,str){
  let sub = res.filter(item =>item == "-");
    if (sub.length !=0) {
      sub(str);
    }
    else return ;
}
//subtraction
function sub(str){
 } 
//---------------------------------------------------------------------------
//--------------- Multiplication functions ---------------------------------
//IsMult
function isMult(res,str){
  let mult = res.filter(item =>item == "-");
    if (mult.length !=0) {
      mult(str);
    }
    else return ;
}
//Mult
function mult(str){
 } 
//---------------------------------------------------------------------------
readFromConsoleAndSplit(); 

