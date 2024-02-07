document.getElementById("btn").onclick = () => {
    const temp = Number(document.getElementById("tempinput").value);
    console.log(temp, typeof temp)
    if(document.getElementById("ctof").checked){
        document.getElementById("result").innerText = temp*9/5+32 +  "°F";
    }
    else if(document.getElementById("ftoc").checked){
        document.getElementById("result").innerText = (temp-32)*(5/9) +  "°C";
    }
    else{
        document.getElementById("result").innerText = "Select  a conversion type.";
    }
}