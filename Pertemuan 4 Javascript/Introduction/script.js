function WriteLog(LogText) {
    document.getElementById('cLine3').innerHTML = "Hello World";
    console.log(LogText);
}

function changeAll(str) {
    document.getElementById('cLine1').innerHTML = str;
    document.getElementById('cLine2').innerHTML = str;
    document.getElementById('cLine3').innerHTML = str;
    document.getElementById("cLine1").className = "MakeRed";
    document.getElementById("cLine2").className = "MakeBlue";
    document.getElementById("cLine2").className = "MakeRed";
}