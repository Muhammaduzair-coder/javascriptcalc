function getnum(numb){
    
   var resul = document.getElementById("final")
resul.value += numb;

}
function clearbtn (){ 
    var resul = document.getElementById("final")
resul.value = ""
}
function resultvalue(){
var resul = document.getElementById("final")

 resul.value = eval(resul.value)
}