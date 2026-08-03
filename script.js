/* ==========================================================
   WANIA'S SECRET GARDEN
   SCRIPT.JS
   PART 1A
========================================================== */

"use strict";

/* ==========================================================
   ELEMENTS
========================================================== */

// Loader
const loader = document.getElementById("loader");

// Landing
const landing = document.getElementById("landing");
const garden = document.getElementById("garden");
const enterGarden = document.getElementById("enterGarden");

// Music
const bgMusic = document.getElementById("bgMusic");
const playMusic = document.getElementById("playMusic");
const musicToggle = document.getElementById("musicToggle");
const musicPlay = document.getElementById("musicPlay");
const volumeSlider = document.getElementById("volumeSlider");

// Controls
const dayNightToggle = document.getElementById("dayNightToggle");
const rainToggle = document.getElementById("rainToggle");
const galleryOpen = document.getElementById("galleryOpen");
const letterOpen = document.getElementById("letterOpen");

// Containers
const rain = document.getElementById("rain");
const gallery = document.getElementById("gallery");

// Letter Modal
const letterModal = document.getElementById("letterModal");

// State
let musicPlaying = false;
let isNight = false;

/* ==========================================================
   LOADER
========================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "0.6s";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }, 1200);

});

/* ==========================================================
   ENTER GARDEN
========================================================== */

enterGarden.addEventListener("click", () => {

    landing.classList.add("hidden");

    garden.classList.remove("hidden");

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* ==========================================================
   MUSIC FUNCTIONS
========================================================== */

bgMusic.volume = 0.7;

function updateMusicIcons() {

    const icon = musicPlaying
        ? '<i class="fa-solid fa-pause"></i>'
        : '<i class="fa-solid fa-play"></i>';

    if (musicPlay) {

        musicPlay.innerHTML = icon;

    }

}

function playGardenMusic() {

    bgMusic.play()
        .then(() => {

            musicPlaying = true;

            updateMusicIcons();

        })
        .catch(() => {});

}

function pauseGardenMusic() {

    bgMusic.pause();

    musicPlaying = false;

    updateMusicIcons();

}

function toggleMusic() {

    if (musicPlaying) {

        pauseGardenMusic();

    } else {

        playGardenMusic();

    }

}

/* ==========================================================
   MUSIC EVENTS
========================================================== */

playMusic?.addEventListener("click", toggleMusic);

musicToggle?.addEventListener("click", toggleMusic);

musicPlay?.addEventListener("click", toggleMusic);

volumeSlider?.addEventListener("input", () => {

    bgMusic.volume = volumeSlider.value / 100;

});

/* ==========================================================
   DAY / NIGHT
========================================================== */

dayNightToggle?.addEventListener("click", () => {

    isNight = !isNight;

    document.body.classList.toggle("night");

    dayNightToggle.textContent = isNight
        ? "☀️ Day"
        : "🌙 Night";

});

/* ==========================================================
   RAIN TOGGLE
========================================================== */

let rainVisible = false;

rain.style.display = "none";

rainToggle?.addEventListener("click", () => {

    rainVisible = !rainVisible;

    rain.style.display = rainVisible
        ? "block"
        : "none";

});

/* ==========================================================
   GALLERY BUTTON
========================================================== */

galleryOpen?.addEventListener("click", () => {

    gallery.scrollIntoView({

        behavior: "smooth"

    });

});

/* ==========================================================
   LETTER BUTTON
========================================================== */

letterOpen?.addEventListener("click", () => {

    letterModal.classList.add("active");

});
/* ==========================================================
   SCRIPT.JS
   PART 1B-1
   FLOWER MESSAGES + FLOWER CLICK
========================================================== */

/* ==========================================================
   FLOWER ELEMENTS
========================================================== */

const flowers = document.querySelectorAll(".flower");

const flowerModal = document.getElementById("flowerModal");

const flowerTitle = document.getElementById("flowerTitle");

const flowerText = document.getElementById("flowerText");

/* ==========================================================
   FLOWER MESSAGES
========================================================== */

const flowerMessages = {

    1: {

        title: "🌹 Rose",

        text: "Every rose reminds me how lucky I am to have you in my life."

    },

    2: {

        title: "🌷 Tulip",

        text: "You entered my life quietly, but filled it with colors forever."

    },

    3: {

        title: "🌸 Blossom",

        text: "Every moment with you becomes a beautiful memory."

    },

    4: {

        title: "🌻 Sunflower",

        text: "Just like a sunflower follows the sun, my heart always follows you."

    },

    5: {

        title: "🌼 Daisy",

        text: "Your innocence and smile make every difficult day easier."

    },

    6: {

        title: "💜 Lavender",

        text: "You bring peace to my heart in a way nobody else can."

    },

    7: {

        title: "🤍 Lily",

        text: "Your kindness is the most beautiful thing I have ever known."

    },

    8: {

        title: "✨ Golden Flower",

        text: "You found the Golden Flower... but the real treasure is you, Wania ❤️"

    }

};

/* ==========================================================
   OPEN FLOWER MODAL
========================================================== */

function openFlowerModal(id){

    const data = flowerMessages[id];

    if(!data) return;

    flowerTitle.textContent = data.title;

    flowerText.textContent = data.text;

    flowerModal.classList.add("active");

}

/* ==========================================================
   FLOWER CLICK EVENTS
========================================================== */

flowers.forEach((flower)=>{

    flower.addEventListener("click",()=>{

        const id = flower.dataset.flower;

        openFlowerModal(id);

        flower.style.transform = "scale(1.12)";

        setTimeout(()=>{

            flower.style.transform = "";

        },300);

    });

});

/* ==========================================================
   FLOWER HOVER EFFECT
========================================================== */

flowers.forEach((flower)=>{

    flower.addEventListener("mouseenter",()=>{

        flower.style.cursor = "pointer";

    });

});
/* ==========================================================
   SCRIPT.JS
   PART 1B-2
   MODAL CLOSE SYSTEM
========================================================== */

/* ==========================================================
   MODAL ELEMENTS
========================================================== */

const allModals = document.querySelectorAll(".modal");

const closeButtons = document.querySelectorAll(".close-modal");

/* ==========================================================
   CLOSE ALL MODALS
========================================================== */

function closeAllModals(){

    allModals.forEach((modal)=>{

        modal.classList.remove("active");

    });

}

/* ==========================================================
   CLOSE BUTTONS
========================================================== */

closeButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        closeAllModals();

    });

});

/* ==========================================================
   CLICK OUTSIDE MODAL
========================================================== */

allModals.forEach((modal)=>{

    modal.addEventListener("click",(e)=>{

        if(e.target===modal){

            closeAllModals();

        }

    });

});

/* ==========================================================
   ESC KEY CLOSE
========================================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeAllModals();

    }

});

/* ==========================================================
   PREVENT MODAL CONTENT CLICK
========================================================== */

document.querySelectorAll(".modal-content").forEach((content)=>{

    content.addEventListener("click",(e)=>{

        e.stopPropagation();

    });

});

/* ==========================================================
   HELPER FUNCTION
========================================================== */

function openModal(modal){

    if(!modal) return;

    closeAllModals();

    modal.classList.add("active");

}

/* ==========================================================
   LETTER BUTTON
========================================================== */

letterOpen?.addEventListener("click",()=>{

    openModal(letterModal);

});
/* ==========================================================
   SCRIPT.JS
   PART 1B-3
   BUTTERFLY + GOLDEN FLOWER + LETTER
========================================================== */

/* ==========================================================
   ELEMENTS
========================================================== */

const butterfly = document.getElementById("butterfly");

const butterflyModal = document.getElementById("butterflyModal");

const goldenFlower = document.getElementById("goldenFlower");

const goldenModal = document.getElementById("goldenModal");

const readLetter = document.getElementById("readLetter");

/* ==========================================================
   BUTTERFLY SECRET
========================================================== */

if(butterfly){

    butterfly.addEventListener("click",()=>{

        openModal(butterflyModal);

    });

}

/* ==========================================================
   GOLDEN FLOWER
========================================================== */

if(goldenFlower){

    goldenFlower.addEventListener("click",()=>{

        openModal(goldenModal);

    });

}

/* ==========================================================
   READ LETTER
========================================================== */

if(readLetter){

    readLetter.addEventListener("click",()=>{

        closeAllModals();

        openModal(letterModal);

    });

}

/* ==========================================================
   DOUBLE CLICK GOLDEN FLOWER
========================================================== */

if(goldenFlower){

    goldenFlower.addEventListener("dblclick",()=>{

        goldenFlower.classList.add("glow");

        setTimeout(()=>{

            goldenFlower.classList.remove("glow");

        },1200);

    });

}

/* ==========================================================
   FLOWER UNLOCK COUNTER
========================================================== */

let openedFlowers = new Set();

flowers.forEach((flower)=>{

    flower.addEventListener("click",()=>{

        openedFlowers.add(flower.dataset.flower);

        if(openedFlowers.size === flowers.length){

            setTimeout(()=>{

                alert(
                    "🌸 Congratulations!\n\nYou discovered every flower.\nNow visit the Golden Flower for your final surprise ❤️"
                );

            },500);

        }

    });

});

/* ==========================================================
   LETTER AUTO SCROLL
========================================================== */

if(letterModal){

    letterModal.addEventListener("transitionend",()=>{

        const content = letterModal.querySelector(".letter-content");

        if(content){

            content.scrollTop = 0;

        }

    });

}

/* ==========================================================
   KEYBOARD SHORTCUTS
========================================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase()==="b"){

        openModal(butterflyModal);

    }

    if(e.key.toLowerCase()==="f"){

        openModal(goldenModal);

    }

    if(e.key.toLowerCase()==="m"){

        openModal(letterModal);

    }

});

/* ==========================================================
   PART 1B COMPLETE
========================================================== */

console.log("✅ Part 1B Loaded Successfully");
/* ==========================================================
   SCRIPT.JS
   PART 1C-1
   LOVE COUNTER
========================================================== */

/* ==========================================================
   COUNTER ELEMENTS
========================================================== */

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

/* ==========================================================
   RELATIONSHIP DATE

   👇 CHANGE THIS DATE
   Format:
   YYYY-MM-DDTHH:MM:SS
========================================================== */

const loveDate = new Date("2025-01-01T00:00:00");

/* ==========================================================
   UPDATE COUNTER
========================================================== */

function updateLoveCounter(){

    const now = new Date();

    const difference = now - loveDate;

    if(difference < 0){

        daysElement.textContent = "000";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        return;

    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor((totalSeconds % 86400) / 3600);

    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const seconds = totalSeconds % 60;

    daysElement.textContent =
        String(days).padStart(3,"0");

    hoursElement.textContent =
        String(hours).padStart(2,"0");

    minutesElement.textContent =
        String(minutes).padStart(2,"0");

    secondsElement.textContent =
        String(seconds).padStart(2,"0");

}

/* ==========================================================
   START COUNTER
========================================================== */

updateLoveCounter();

setInterval(updateLoveCounter,1000);

/* ==========================================================
   COUNTER ANIMATION
========================================================== */

const counterItems =
document.querySelectorAll(".counter-item");

counterItems.forEach((item)=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transform="translateY(-8px) scale(1.05)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="translateY(0) scale(1)";

    });

});

/* ==========================================================
   PAGE TITLE UPDATE
========================================================== */

setInterval(()=>{

    document.title =
        `${daysElement.textContent} Days ❤️ Wania's Secret Garden`;

},1000);

/* ==========================================================
   PART 1C-1 LOADED
========================================================== */

console.log("✅ Love Counter Loaded");
/* ==========================================================
   SCRIPT.JS
   PART 1C-2
   GALLERY LIGHTBOX
========================================================== */

/* ==========================================================
   GALLERY ELEMENTS
========================================================== */

const galleryImages =
document.querySelectorAll(".gallery-card img");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");

/* ==========================================================
   CURRENT IMAGE
========================================================== */

let currentImageIndex = 0;

/* ==========================================================
   OPEN LIGHTBOX
========================================================== */

function openLightbox(index){

    if(index < 0 || index >= galleryImages.length) return;

    currentImageIndex = index;

    lightboxImage.src =
        galleryImages[index].src;

    lightboxImage.alt =
        galleryImages[index].alt;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}

/* ==========================================================
   CLOSE LIGHTBOX
========================================================== */

function closeGallery(){

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}

/* ==========================================================
   NEXT IMAGE
========================================================== */

function nextImage(){

    currentImageIndex++;

    if(currentImageIndex >= galleryImages.length){

        currentImageIndex = 0;

    }

    openLightbox(currentImageIndex);

}

/* ==========================================================
   PREVIOUS IMAGE
========================================================== */

function previousImage(){

    currentImageIndex--;

    if(currentImageIndex < 0){

        currentImageIndex =
        galleryImages.length - 1;

    }

    openLightbox(currentImageIndex);

}

/* ==========================================================
   IMAGE CLICK
========================================================== */

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        openLightbox(index);

    });

});

/* ==========================================================
   CLOSE BUTTON
========================================================== */

closeLightbox.addEventListener("click",()=>{

    closeGallery();

});

/* ==========================================================
   OUTSIDE CLICK
========================================================== */

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeGallery();

    }

});

/* ==========================================================
   KEYBOARD NAVIGATION
========================================================== */

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active"))
        return;

    switch(e.key){

        case "ArrowRight":

            nextImage();

            break;

        case "ArrowLeft":

            previousImage();

            break;

        case "Escape":

            closeGallery();

            break;

    }

});

/* ==========================================================
   IMAGE DOUBLE CLICK
========================================================== */

lightboxImage.addEventListener("dblclick",()=>{

    closeGallery();

});

/* ==========================================================
   PART 1C-2 LOADED
========================================================== */

console.log("✅ Gallery Lightbox Loaded");
/* ==========================================================
   SCRIPT.JS
   PART 1C-3
   SECRET PASSWORD + EASTER EGG
========================================================== */

/* ==========================================================
   ELEMENTS
========================================================== */

const secretModal = document.getElementById("secretModal");

const secretInput = document.getElementById("secretInput");

const unlockSecret = document.getElementById("unlockSecret");

const easterEgg = document.getElementById("easterEgg");

/* ==========================================================
   SECRET PASSWORD
========================================================== */

/*
    👇 Secret password change karna ho
    to sirf is value ko change karo.
*/

const SECRET_PASSWORD = "wania";

/* ==========================================================
   OPEN SECRET MODAL
========================================================== */

function openSecretModal(){

    secretInput.value = "";

    openModal(secretModal);

    setTimeout(()=>{

        secretInput.focus();

    },200);

}

/* ==========================================================
   UNLOCK SECRET
========================================================== */

function unlockGarden(){

    const password =
        secretInput.value
        .trim()
        .toLowerCase();

    if(password === SECRET_PASSWORD){

        closeAllModals();

        showEasterEgg();

    }

    else{

        secretInput.value="";

        secretInput.placeholder="Wrong password ❤️";

        secretInput.focus();

        secretInput.style.borderColor="#ff4d6d";

        setTimeout(()=>{

            secretInput.style.borderColor="";

            secretInput.placeholder="Enter Secret Word";

        },1500);

    }

}

unlockSecret.addEventListener("click",unlockGarden);

/* ==========================================================
   ENTER KEY
========================================================== */

secretInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        unlockGarden();

    }

});

/* ==========================================================
   EASTER EGG
========================================================== */

function showEasterEgg(){

    easterEgg.style.display="flex";

    easterEgg.style.opacity="0";

    setTimeout(()=>{

        easterEgg.style.opacity="1";

    },50);

    setTimeout(()=>{

        easterEgg.style.opacity="0";

        setTimeout(()=>{

            easterEgg.style.display="none";

        },600);

    },5000);

}

/* ==========================================================
   KEYBOARD SHORTCUTS
========================================================== */

document.addEventListener("keydown",(e)=>{

    // Ignore while typing
    if(
        document.activeElement.tagName==="INPUT" ||
        document.activeElement.tagName==="TEXTAREA"
    ){
        return;
    }

    switch(e.key.toLowerCase()){

        case "s":

            openSecretModal();

            break;

        case "g":

            gallery.scrollIntoView({

                behavior:"smooth"

            });

            break;

        case "l":

            openModal(letterModal);

            break;

    }

});

/* ==========================================================
   DOUBLE CLICK LOGO
========================================================== */

const footerTitle =
document.querySelector("footer h2");

if(footerTitle){

    footerTitle.addEventListener("dblclick",()=>{

        openSecretModal();

    });

}

/* ==========================================================
   PART 1C-3 LOADED
========================================================== */

console.log("✅ Secret System Loaded");
/* ==========================================================
   SCRIPT.JS
   PART 1D-1
   RAIN + HEARTS + PETALS
========================================================== */

/* ==========================================================
   ELEMENTS
========================================================== */

const rainContainer = document.getElementById("rain");
const petalsContainer = document.getElementById("petals");
const heartsContainer = document.getElementById("heartContainer");

/* ==========================================================
   RAIN EFFECT
========================================================== */

function createRainDrop(){

    if(rain.style.display==="none") return;

    const drop=document.createElement("span");

    drop.className="rain-drop";

    drop.style.left=Math.random()*100+"vw";

    drop.style.animationDuration=
        (0.6+Math.random()*0.6)+"s";

    drop.style.opacity=
        0.3+Math.random()*0.7;

    rainContainer.appendChild(drop);

    setTimeout(()=>{

        drop.remove();

    },1500);

}

setInterval(createRainDrop,35);

/* ==========================================================
   FLOATING HEARTS
========================================================== */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="floating-heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
        (14+Math.random()*18)+"px";

    heart.style.animationDuration=
        (5+Math.random()*4)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,900);

/* ==========================================================
   FALLING PETALS
========================================================== */

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=
        (18+Math.random()*12)+"px";

    petal.style.animationDuration=
        (7+Math.random()*5)+"s";

    petal.style.transform=
        `rotate(${Math.random()*360}deg)`;

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,700);

/* ==========================================================
   HEART BURST ON CLICK
========================================================== */

document.addEventListener("click",(e)=>{

    for(let i=0;i<6;i++){

        const heart=document.createElement("div");

        heart.className="floating-heart";

        heart.innerHTML="❤️";

        heart.style.left=(e.clientX+(Math.random()*60-30))+"px";

        heart.style.top=(e.clientY+(Math.random()*60-30))+"px";

        heart.style.position="fixed";

        heart.style.animationDuration="2s";

        heart.style.pointerEvents="none";

        heartsContainer.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },2000);

    }

});

/* ==========================================================
   PART 1D-1 LOADED
========================================================== */

console.log("✅ Rain, Hearts & Petals Loaded");
/* ==========================================================
   SCRIPT.JS
   PART 1D-2
   STARS + FIREFLIES + FLOWER GLOW + BUTTERFLY
========================================================== */

/* ==========================================================
   ELEMENTS
========================================================== */

const starsContainer = document.getElementById("stars");
const firefliesContainer = document.getElementById("fireflies");
const butterflyElement = document.getElementById("butterfly");

/* ==========================================================
   STARS
========================================================== */

function createStars(){

    for(let i=0;i<120;i++){

        const star=document.createElement("span");

        star.className="star";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.animationDelay=
            Math.random()*3+"s";

        star.style.animationDuration=
            (2+Math.random()*3)+"s";

        starsContainer.appendChild(star);

    }

}

createStars();

/* ==========================================================
   FIREFLIES
========================================================== */

function createFireflies(){

    for(let i=0;i<25;i++){

        const fly=document.createElement("span");

        fly.className="firefly";

        fly.style.left=Math.random()*100+"vw";

        fly.style.top=Math.random()*100+"vh";

        fly.style.animationDelay=
            Math.random()*5+"s";

        fly.style.animationDuration=
            (5+Math.random()*5)+"s";

        firefliesContainer.appendChild(fly);

    }

}

createFireflies();

/* ==========================================================
   RANDOM FLOWER GLOW
========================================================== */

function glowRandomFlower(){

    if(!flowers.length) return;

    const flower =
        flowers[Math.floor(Math.random()*flowers.length)];

    flower.classList.add("glow");

    setTimeout(()=>{

        flower.classList.remove("glow");

    },1500);

}

setInterval(glowRandomFlower,2500);

/* ==========================================================
   BUTTERFLY AUTO FLY
========================================================== */

let butterflyX = 100;
let butterflyY = 200;

function moveButterfly(){

    butterflyX += (Math.random()*180)-90;
    butterflyY += (Math.random()*120)-60;

    butterflyX =
        Math.max(30,
        Math.min(window.innerWidth-120,butterflyX));

    butterflyY =
        Math.max(60,
        Math.min(window.innerHeight-200,butterflyY));

    butterflyElement.style.transition =
        "transform 5s ease-in-out";

    butterflyElement.style.transform =
        `translate(${butterflyX}px, ${butterflyY}px)`;

}

setInterval(moveButterfly,5000);

/* ==========================================================
   BUTTERFLY WING FLAP
========================================================== */

setInterval(()=>{

    butterflyElement.classList.add("flap");

    setTimeout(()=>{

        butterflyElement.classList.remove("flap");

    },600);

},1000);

/* ==========================================================
   STAR VISIBILITY
========================================================== */

function updateSky(){

    if(document.body.classList.contains("night")){

        starsContainer.style.opacity="1";

        firefliesContainer.style.opacity="1";

    }

    else{

        starsContainer.style.opacity="0";

        firefliesContainer.style.opacity="0.3";

    }

}

updateSky();

const observer = new MutationObserver(updateSky);

observer.observe(document.body,{

    attributes:true,

    attributeFilter:["class"]

});

/* ==========================================================
   PART 1D-2 LOADED
========================================================== */

console.log("✅ Stars, Fireflies & Butterfly Loaded");
/* ==========================================================
   SCRIPT.JS
   PART 1E-1
   FIREWORKS + LOCAL STORAGE
========================================================== */

/* ==========================================================
   FIREWORK CANVAS
========================================================== */

const fireworksCanvas = document.getElementById("fireworksCanvas");
const ctx = fireworksCanvas.getContext("2d");

let fireworks = [];

function resizeFireworks(){

    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;

}

resizeFireworks();

window.addEventListener("resize", resizeFireworks);

/* ==========================================================
   FIREWORK CLASS
========================================================== */

class Firework{

    constructor(x,y){

        this.particles=[];

        for(let i=0;i<60;i++){

            this.particles.push({

                x:x,
                y:y,

                vx:(Math.random()-0.5)*8,

                vy:(Math.random()-0.5)*8,

                alpha:1,

                size:2+Math.random()*2

            });

        }

    }

    update(){

        this.particles.forEach(p=>{

            p.x+=p.vx;

            p.y+=p.vy;

            p.vy+=0.05;

            p.alpha-=0.015;

        });

        this.particles=this.particles.filter(

            p=>p.alpha>0

        );

    }

    draw(){

        this.particles.forEach(p=>{

            ctx.save();

            ctx.globalAlpha=p.alpha;

            ctx.beginPath();

            ctx.arc(

                p.x,

                p.y,

                p.size,

                0,

                Math.PI*2

            );

            ctx.fillStyle=

                `hsl(${Math.random()*360},100%,60%)`;

            ctx.fill();

            ctx.restore();

        });

    }

}

/* ==========================================================
   FIREWORK LOOP
========================================================== */

function animateFireworks(){

    ctx.clearRect(

        0,

        0,

        fireworksCanvas.width,

        fireworksCanvas.height

    );

    fireworks.forEach(f=>{

        f.update();

        f.draw();

    });

    fireworks=

        fireworks.filter(

            f=>f.particles.length>0

        );

    requestAnimationFrame(

        animateFireworks

    );

}

animateFireworks();

/* ==========================================================
   CREATE FIREWORK
========================================================== */

function launchFirework(x,y){

    fireworks.push(

        new Firework(x,y)

    );

}

/* ==========================================================
   GOLDEN FLOWER CELEBRATION
========================================================== */

if(goldenFlower){

    goldenFlower.addEventListener("click",()=>{

        for(let i=0;i<8;i++){

            setTimeout(()=>{

                launchFirework(

                    Math.random()*window.innerWidth,

                    Math.random()*(window.innerHeight/2)

                );

            },i*250);

        }

    });

}

/* ==========================================================
   DOUBLE CLICK ANYWHERE
========================================================== */

document.addEventListener("dblclick",(e)=>{

    launchFirework(

        e.clientX,

        e.clientY

    );

});

/* ==========================================================
   LOCAL STORAGE
========================================================== */

function saveSettings(){

    localStorage.setItem(

        "garden_music",

        musicPlaying

    );

    localStorage.setItem(

        "garden_volume",

        bgMusic.volume

    );

    localStorage.setItem(

        "garden_night",

        isNight

    );

}

/* ==========================================================
   LOAD SETTINGS
========================================================== */

function loadSettings(){

    const savedVolume=

        localStorage.getItem(

            "garden_volume"

        );

    if(savedVolume!==null){

        bgMusic.volume=

            Number(savedVolume);

        volumeSlider.value=

            savedVolume*100;

    }

    const savedNight=

        localStorage.getItem(

            "garden_night"

        );

    if(savedNight==="true"){

        isNight=true;

        document.body.classList.add("night");

        dayNightToggle.textContent="☀️ Day";

    }

}

/* ==========================================================
   AUTO SAVE
========================================================== */

musicPlay?.addEventListener(

    "click",

    saveSettings

);

musicToggle?.addEventListener(

    "click",

    saveSettings

);

dayNightToggle?.addEventListener(

    "click",

    saveSettings

);

volumeSlider?.addEventListener(

    "input",

    saveSettings

);

loadSettings();

/* ==========================================================
   PART 1E-1 LOADED
========================================================== */

console.log("✅ Fireworks & Local Storage Loaded");
/* ==========================================================
   SCRIPT.JS
   PART 1E-2
   FINAL INITIALIZATION + PERFORMANCE
========================================================== */

/* ==========================================================
   AUTO DAY / NIGHT
========================================================== */

function autoDayNight(){

    const hour = new Date().getHours();

    if(hour >= 19 || hour <= 6){

        document.body.classList.add("night");

        isNight = true;

        if(dayNightToggle){

            dayNightToggle.textContent = "☀️ Day";

        }

    }else{

        document.body.classList.remove("night");

        isNight = false;

        if(dayNightToggle){

            dayNightToggle.textContent = "🌙 Night";

        }

    }

}

autoDayNight();

/* ==========================================================
   RESIZE HANDLER
========================================================== */

window.addEventListener("resize",()=>{

    resizeFireworks();

});

/* ==========================================================
   PAGE VISIBILITY
========================================================== */

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        if(musicPlaying){

            bgMusic.pause();

        }

    }else{

        if(musicPlaying){

            bgMusic.play().catch(()=>{});

        }

    }

});

/* ==========================================================
   IMAGE PRELOADER
========================================================== */

const preloadImages = [

    "assets/images/photo1.jpg",
    "assets/images/photo2.jpg",
    "assets/images/photo3.jpg",
    "assets/images/photo4.jpg",
    "assets/images/photo5.jpg",
    "assets/images/photo6.jpg"

];

preloadImages.forEach(src=>{

    const img = new Image();

    img.src = src;

});

/* ==========================================================
   SMOOTH SECTION REVEAL
========================================================== */

const revealElements = document.querySelectorAll(

    "section, footer"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.15

}

);

revealElements.forEach(section=>{

    revealObserver.observe(section);

});

/* ==========================================================
   WELCOME MESSAGE
========================================================== */

setTimeout(()=>{

    console.log("🌸 Welcome to Wania's Secret Garden ❤️");

},1500);

/* ==========================================================
   FINAL STARTUP
========================================================== */

window.addEventListener("load",()=>{

    updateLoveCounter();

    updateMusicIcons();

    saveSettings();

});

/* ==========================================================
   ERROR PROTECTION
========================================================== */

window.addEventListener("error",(e)=>{

    console.warn(

        "Garden Warning:",

        e.message

    );

});

/* ==========================================================
   FINAL CONSOLE MESSAGE
========================================================== */

console.log(

"%c🌸 Wania's Secret Garden 🌸",

"color:#ff4f87;font-size:28px;font-weight:bold;"

);

console.log(

"%cMade with ❤️ by Muhammad Subhan",

"color:#42b883;font-size:18px;"

);

/* ==========================================================
   PROJECT COMPLETE
========================================================== */

console.log("✅ HTML Loaded");
console.log("✅ CSS Loaded");
console.log("✅ JavaScript Loaded");
console.log("✅ Garden Ready");

/* ==========================================================
   END OF SCRIPT
========================================================== */