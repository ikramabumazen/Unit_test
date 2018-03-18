module.exports = isCorrectOperation;
let flag=0;
var stdin = process.openStdin();
var res =[];
function readFromConsoleAndSplit(){
stdin.addListener("data", function(d) {
  let str = d.toString().trim();
  var res = str.split("");

 // filter res array (res) according operation
 isCorrectOperation(res,str);
  
 if (flag == 0){
isAddition(res,str); 
isSubtraction(res.str);    
isMult(res,str);
isModule(res,str);
isDiv(res,str);
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
  let SplitNumbers = str.split("+");
  let sum = parseFloat(SplitNumbers[0])+parseFloat(SplitNumbers[1]);
  console.log("sum="+sum);
  return(sum);
 } 
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
  let SplitNumbers = str.split("-");
  let sub = parseFloat(SplitNumbers[0])-parseFloat(SplitNumbers[1]);
  console.log("sub="+sub);
  return(sub); } 
//--------------- Multiplication functions ---------------------------------
//IsMult
function isMult(res,str){
  let mult = res.filter(item =>item == "*");
    if (mult.length !=0) {
      mult(str);
    }
    else return ;
}
//Mult
function mult(str){
  let SplitNumbers = str.split("*");
  let mult = parseFloat(SplitNumbers[0])*parseFloat(SplitNumbers[1]);
  console.log("mult="+mult);
  return(mult);
 } 
//--------------- Module functions ---------------------------------
//IsModule
function isModule(res,str){
  let mod = res.filter(item =>item == "%");
    if (mod.length !=0) {
      mod(str);
    }
    else return ;
}
//Module
function mod(str){
  let SplitNumbers = str.split("%");
  let mod = parseFloat(SplitNumbers[0])%parseFloat(SplitNumbers[1]);
  console.log("mod="+mod);
  return(mod);
 } 
//---------------Division functions ---------------------------------
//IsDiv
function isDiv(res,str){
  let div = res.filter(item =>item == "/");
    if (div.length !=0) {
      div(str);
    }
    else return ;
}
//div
function div(str){
  let SplitNumbers = str.split("/");
  let div = parseFloat(SplitNumbers[0])/parseFloat(SplitNumbers[1]);
  console.log("Div="+div);
  return(div);
 } 
//---------------------------------------------------------------------------
function isCorrectOperation(res,str){
  flag =0 ;
  if(str == "" || res.length!=3  && res[0]!="-"  && res[0]!="+" ){ 
    // for str ="" , str= one num , or no operation 
  console.log("invalid opearation formate 1 for : "+str);
  flag=1;
  return -1;
}

  else if (isNaN(parseFloat(res[0])== false) || ( res[1]== "+" ||res[1] == "-" || res[1] == "*" || res[1] == "/" || res[1] == "%")!= true || isNaN(parseFloat(res[2]))){
    console.log("invalid opearation formate for : "+str);
    flag=1;
    return -1;
 
  }
  
}

readFromConsoleAndSplit(); 
