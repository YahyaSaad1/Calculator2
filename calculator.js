let output = document.getElementById("calc");
let clear = document.getElementById("clear");



function display(num) {
    output.value += num;
}

clear.onclick = function(){
    output.value = "";
}


function Delete(){
    output.value = output.value.slice(0, -1);
}



function calc(){
   try {
    output.value = eval(output.value);
   } catch(Error) {
    output.value = "Error"
   }
}