const c=document.getElementById("generate-btn");
const number=document.getElementById("number");
c.onclick=function(){
    randomNum=Math.floor(Math.random()*10)+1;
    number.textContent=randomNum;
}