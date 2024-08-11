const textbox=document.getElementById("textbox");
const CtoF=document.getElementById("CtoF");
const FtoC=document.getElementById("FtoC");
const result=document.getElementById("result");
let temp;

function convert(){
    if(CtoF.checked){
        temp=Number(textbox.value);
        temp=temp*9/5+32;
        result.textContent=temp+"*F"
    }
    else if(FtoC.checked){
        temp=Number(textbox.value);
        temp=(temp-32) *(5/9);
        result.textContent=temp.toFixed(1)+"*C"

    }
    else{
        result.textContent="select an option"
    }
}