function disp(op){
    document.getElementById("result").value+=op;
}
function solve() {
    let y=eval(document.getElementById("result").value);
    document.getElementById("result").value=y;
}
function clearR()
{
    document.getElementById("result").value="";
}
function backSpace() {
    let val=document.getElementById("result").value;
    document.getElementById("result").value=val.substr(0,val.length-1);
}