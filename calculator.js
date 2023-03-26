let outputt = document.getElementById("outputt");


clearr.onclick = function(){
    outputt.value = "";
}

Delett.onclick = function(){
    outputt.value = outputt.value.slice(0, -1)
}

function btn(num){
    outputt.value += num ;
}

equal.onclick = function(){
    try{
        outputt.value = eval(outputt.value);
    } catch {
        outputt.value = "ERROR";
    }
}
