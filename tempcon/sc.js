 let re=document.getElementById("result");
 let opt=document.getElementById("tempScale");
 let to=document.getElementById("toScale");
 let input=document.getElementById("inputbox");
let convertbutton=document.getElementById("convertBtn");

convertbutton.onclick=function convert(){
    if((opt.value=='celsius' && to.value=='celsius') || (opt.value=='fahrenheit' && to.value=='fahrenheit') || (opt.value=='kelvin' && to.value=='kelvin')){
    re.textContent='please select different scales';
 }
 if(opt.value=='celsius' && to.value=='fahrenheit'){
    let fahrenheit = parseFloat(input.value) * 9 / 5 + 32;
    re.textContent=`${fahrenheit.toFixed(4)} °F`;
 }
 if(opt.value=='celsius' && to.value=='kelvin'){
    let kelvin = parseFloat(input.value) + 273.15;
    re.textContent=`${kelvin.toFixed(4)} K`;
 }
 if(opt.value=='fahrenheit' && to.value=='celsius'){
    let celsius = (parseFloat(input.value) - 32) * 5 / 9;
    re.textContent=`${celsius.toFixed(4)} °C`;
 }
 if(opt.value=='fahrenheit' && to.value=='kelvin'){
    let kelvin = (parseFloat(input.value) - 32) * 5 / 9 + 273.15;
    re.textContent=`${kelvin.toFixed(4)} K`;
 }
 if(opt.value=='kelvin' && to.value=='celsius'){
    let celsius = parseFloat(input.value) - 273.15;
    re.textContent=`${celsius.toFixed(4)} °C`;
 }
 if(opt.value=='kelvin' && to.value=='fahrenheit'){
    let fahrenheit = (parseFloat(input.value) - 273.15) * 9 / 5 + 32;
    re.textContent=`${fahrenheit.toFixed(4)} °F`;
 }
}
