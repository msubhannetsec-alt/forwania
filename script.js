*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{

font-family:'Poppins',sans-serif;

height:100vh;

overflow:hidden;

display:flex;

justify-content:center;

align-items:center;

background:linear-gradient(-45deg,#0f172a,#172554,#312e81,#1e1b4b);

background-size:400% 400%;

animation:bg 15s ease infinite;

color:white;

}

@keyframes bg{

0%{background-position:0% 50%;}

50%{background-position:100% 50%;}

100%{background-position:0% 50%;}

}

.background-hearts{

position:fixed;

width:100%;

height:100%;

overflow:hidden;

z-index:-1;

}

.background-hearts::before{

content:"🤍 🤍 ❤️ 🤍 ❤️ 🤍";

position:absolute;

font-size:28px;

width:100%;

animation:floatHearts 18s linear infinite;

opacity:.18;

}

@keyframes floatHearts{

0%{

transform:translateY(100vh);

}

100%{

transform:translateY(-120vh);

}

}

.container{

text-align:center;

width:90%;

max-width:700px;

background:rgba(255,255,255,.08);

backdrop-filter:blur(18px);

padding:45px;

border-radius:30px;

box-shadow:0 25px 60px rgba(0,0,0,.4);

border:1px solid rgba(255,255,255,.15);

}

.title{

font-family:'Dancing Script',cursive;

font-size:58px;

margin-bottom:12px;

}

.subtitle{

opacity:.9;

margin-bottom:40px;

font-size:20px;

}

.gift-area{

display:flex;

justify-content:center;

margin-bottom:30px;

}

.gift-box{

width:170px;

height:170px;

position:relative;

cursor:pointer;

transition:.6s;

}

.gift-box:hover{

transform:scale(1.05);

}

.box{

position:absolute;

bottom:0;

width:170px;

height:120px;

background:#ff5c8d;

border-radius:0 0 14px 14px;

}

.lid{

position:absolute;

top:20px;

width:170px;

height:40px;

background:#ff7ca5;

border-radius:10px;

transition:.8s;

transform-origin:left;

z-index:5;

}

.ribbon-v{

position:absolute;

left:78px;

width:14px;

height:170px;

background:white;

z-index:6;

}

.ribbon-h{

position:absolute;

top:35px;

width:170px;

height:14px;

background:white;

z-index:6;

}

.open .lid{

transform:rotate(-45deg) translate(-40px,-45px);

}

.letter{

display:none;

animation:fade .8s;

}

.letter h2{

font-family:'Dancing Script',cursive;

font-size:45px;

margin-bottom:20px;

}

.letter p{

line-height:2;

font-size:18px;

margin-bottom:30px;

}

button{

padding:15px 32px;

border:none;

border-radius:50px;

cursor:pointer;

font-size:18px;

background:white;

transition:.3s;

}

button:hover{

transform:scale(1.08);

}

.surprise{

display:none;

animation:fade .8s;

margin-top:30px;

}

.surprise h2{

font-size:70px;

margin-bottom:20px;

}

.surprise p{

font-size:19px;

line-height:2;

}

@keyframes fade{

from{

opacity:0;

transform:translateY(30px);

}

to{

opacity:1;

transform:translateY(0);

}

}