//Background image slider
const bg_images=["bg1-img.jpeg","bg2-img.jpeg"];

let index=0;
const hero=document.getElementById("hero");

setInterval(()=>{
    index=(index+1)%bg_images.length;
    hero.style.backgroundImage=`url('/src/assets/images/${bg_images[index]}')`;
},5000);

//Menu burger button
const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });