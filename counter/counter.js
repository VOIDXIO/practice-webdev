const dbt=document.getElementById("decrement-btn");
const ib=document.getElementById("increment-btn");
const re=document.getElementById("reset-btn");
const countval=document.getElementById("counter-value");

let c=0;

ib.onclick=function(){
    c++;
    countval.textContent=c;
}
re.onclick=function(){
    c=0;
    countval.textContent=c;
}
dbt.onclick=function(){
    c--;
    countval.textContent=c;
}