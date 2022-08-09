function attach(val){
    document.getElementById("display").value += val;
 
   
 }

 function solve(){
    document.getElementById("display").value = eval( document.getElementById("display").value) ;
 }

 function cansel(){
    document.getElementById("display").value = "";
 }