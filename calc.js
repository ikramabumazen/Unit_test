
var stdin = process.openStdin();

function readFromConsoleAndSplit(){
stdin.addListener("data", function(d) {
  let str = d.toString().trim();
var res = str.split("");

 // filter res array according operation
isAddition(res, str);   
isSubtraction(res.str);    
isMult(res,str);
isModule(res,str);
isDiv(res,str);
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
//--------------- Module functions ---------------------------------
//IsModule
function isModule(res,str){
  let mod = res.filter(item =>item == "-");
    if (mod.length !=0) {
      mod(str);
    }
    else return ;
}
//Module
function mod(str){
 } 
//---------------------------------------------------------------------------
//---------------Division functions ---------------------------------
//IsModule
function isDiv(res,str){
  let div = res.filter(item =>item == "-");
    if (div.length !=0) {
      div(str);
    }
    else return ;
}
//Module
function div(str){
 } 
//---------------------------------------------------------------------------

readFromConsoleAndSplit(); 

