
var textInput=document.querySelector('input[type="text"]');
var colorInput=document.querySelector('input[type="color"]');
var button=document.querySelector("button");


button.onclick=function(){
    var text=textInput.value;
    var p=document.createElement("p");
    p.textContent= text;
    p.style.color=colorInput.value;
    document.body.appendChild(p);
    textInput.value="";
};
            