function calc(){
    var a = parseInt(document.querySelector("#quantity").value);
    var b = document.querySelector("#choice").value;
    var calculate;

    if (b == "choice1"){
calculate = a*1500;
    }
    else if (b == "choice2"){
        calculate = a*4000;
            }
            else if (b == "choice3"){
                calculate = a*6000;
                    }  
    console.log(calculate)
}