const PASSWORD = "teddy";

function checkPassword(){

const input=document.getElementById("password").value;

const music=document.getElementById("music");

if(input===PASSWORD){

document.getElementById("loginScreen").style.display="none";

document.getElementById("website").style.display="block";

music.play();

}else{

document.getElementById("error").innerHTML="you ain't gonna access it if your aren't ml!😂💍❤️";

}

}
/* ========================= */
/* SLIDESHOW */
/* ========================= */

const images=[

"images/teddy1.jpg",
"images/teddy2.jpg",
"images/teddy3.jpg",
"images/teddy4.jpg",
"images/teddy5.jpg",
"images/teddy6.jpg"

];

let current=0;

const slide=document.getElementById("slide");

function showSlide(){

slide.src=images[current];

}

function nextSlide(){

current++;

if(current>=images.length){

current=0;

}

showSlide();

}

function previousSlide(){

current--;

if(current<0){

current=images.length-1;

}

showSlide();

}

setInterval(nextSlide,4000);

/* ========================= */
/* LIGHTBOX */
/* ========================= */

function openImage(img){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightboxImage").src=img.src;

}

function closeImage(){

document.getElementById("lightbox").style.display="none";

}
setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

},500);
function openLetter(){

document.getElementById("letter").style.display="block";

document.getElementById("letter").scrollIntoView({

behavior:"smooth"

});

}

function openGift(){

document.getElementById("giftBox").innerHTML="💝";

document.getElementById("giftMessage").style.display="block";

document.getElementById("giftMessage").scrollIntoView({

behavior:"smooth"

});

}
/* ========================= */
/* GRAND FINALE */
/* ========================= */

const finalText =

`Happy Birthday Teddy ❤️

I hope every dream you have becomes reality.

May this year bring you happiness,
peace,
good health,
success
and endless reasons to smile.

Thank you for allowing me to be part of your life.

I love you more than words can explain.

Happy Birthday Beautiful ❤️`;

function blowCandles(){

document.getElementById("cake").innerHTML="🧁";

document.getElementById("wishMessage").style.display="block";

typeWriter();

confetti();

}

let i=0;

function typeWriter(){

if(i<finalText.length){

document.getElementById("typingText").innerHTML+=finalText.charAt(i);

i++;

setTimeout(typeWriter,45);

}else{

document.getElementById("lastButton").style.display="inline-block";

}

}

function lastSurprise(){

document.getElementById("hiddenMessage").style.display="block";

document.getElementById("hiddenMessage").scrollIntoView({

behavior:"smooth"

});

}
function confetti(){

const duration=5000;

const end=Date.now()+duration;

(function frame(){

canvasConfetti({

particleCount:4,

angle:60,

spread:70,

origin:{x:0}

});

canvasConfetti({

particleCount:4,

angle:120,

spread:70,

origin:{x:1}

});

if(Date.now()<end){

requestAnimationFrame(frame);

}

})();

}
for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

document.body.appendChild(star);

}