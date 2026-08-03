const gift = document.getElementById("gift");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");
const continueBtn = document.getElementById("continueBtn");
const cards = document.getElementById("cardContainer");

const message = `Kabhi kabhi kuch baatein lafzon mein kehna mushkil hota hai...

Is liye socha...

Ek chhota sa surprise bana doon.

Bas dil se nikli hui ek chhoti si dua hai.

Allah tumhein hamesha muskuraata rakhe.

Bas itna hi kehna tha...
Khush rehna, apna khayal rakhna.

🤍`;

window.onload = () => {

setTimeout(() => {

document.getElementById("loader").style.opacity = "0";

setTimeout(() => {

document.getElementById("loader").style.display = "none";

},1000);

},1800);

};

gift.addEventListener("click", () => {

gift.classList.add("open");

setTimeout(() => {

letter.style.display = "block";

typeWriter();

createFloating();

letter.scrollIntoView({

behavior:"smooth"

});

},900);

});

function typeWriter(){

typing.innerHTML="";

let i=0;

const speed=35;

const timer=setInterval(()=>{

typing.innerHTML += message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

continueBtn.style.display="inline-block";

}

},speed);

}

continueBtn.addEventListener("click",()=>{

cards.style.display="flex";

cards.scrollIntoView({

behavior:"smooth"

});

createFloating();

});

function createFloating(){

for(let i=0;i<35;i++){

const item=document.createElement("div");

item.className="floating";

item.innerHTML=Math.random()>0.5?"🤍":"🌸";

item.style.left=Math.random()*100+"vw";

item.style.top="100vh";

item.style.fontSize=(18+Math.random()*22)+"px";

document.body.appendChild(item);

setTimeout(()=>{

item.remove();

},4000);

}

}