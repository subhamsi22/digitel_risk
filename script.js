gsap.to(".loader-logo",{
    x:100,
    y:100,
    opacity:1,
ease:"bounce",
duration:1,
delay:2,

})  


var p = document.getElementById("p");
var newtext = p.innerText.split("");
p.innerText="";
newtext.forEach((word)=>{
   
    p.innerHTML += `<span>${word}</span>`;
});
gsap.from("#p span",{
   
    opacity:0,
    ease:"bounce",
    duration:1,
   
    stagger:.5,
})

var loader = document.querySelector(".loader");
var main  = document.querySelector(".main");
setTimeout(()=>{
    loader.style.display="none";
    main.style.display="block";
    initMainAnimations();
},15000)

function initMainAnimations() {
//   main start hear 
var main_logo = document.querySelector(".main_logo");
var hey = document.querySelector(".hey");
var head = document.querySelector("#head");

main_logo.addEventListener("mouseover",()=>{
gsap.to(hey,{
    x:20,
    display:"block",
    opacity:1,
    duration:1,
})
gsap.to(head,{
        left:"-10%",

    duration:1,
})
})
main_logo.addEventListener("mouseout",()=>{
    gsap.to(hey,{
        display:"none",
        opacity:0,
    });
    gsap.to(head,{
        left:"-15%",
    });
})
// slide 
var slide = document.querySelector(".slide");
var box = document.querySelectorAll(".box");

var a = 0;

function move(){
    a = (a + 1) % box.length;
    const boxHeight = box[0]?.getBoundingClientRect().height || 457;
    slide.style.transform = `translateY(-${a * boxHeight}px)`;
}

setInterval(move, 2000);

// banner3 auto slider
var slide2 = document.querySelector(".slide2");
var box2 = document.querySelectorAll(".box2");
var b = 0;

function move2() {
    b = (b + 1) % box2.length;
    slide2.style.transform = `translateX(-${b * 100}%)`;
}

setInterval(move2, 3000);

// shrink banner2 images based on scroll position
gsap.to(".banner1",{
    scale:0.9,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:"#banner2",
        // markers:true,
        start:"top top",
        end:"bottom bottom",
        scrub:1,
    }
})
gsap.from(".vd1",{
    x:20,
    delay:1,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#banner2",
         // markers:true,
        start:"top top",
        end:"bottom bottom",
        scrub:1,
    }
})
var b2h1 = document.querySelector("#b2h1");
var newb2text = b2h1.innerText.split("");
b2h1.innerText = "";
newb2text.forEach((word)=>{
    b2h1.innerHTML +=  `<span>${word}</span>`;
})
gsap.from("#b2h1 span",{
   
    opacity:0,
    ease:"bounce",
    stagger:0.1,  
    scrollTrigger:{
        trigger:"#vd1",
        start:"top top",
        end:"bottom bottom",
        // scrub:1,
        // markers:true
    }
});

// Collage grid scroll animation
gsap.from(".grid img", {
    opacity: 0,
    y: 50,
    scale: 0.8,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".grid",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        // markers: true
    }
});

// Card section animation
gsap.from(".card", {
    opacity: 0,
    y: 100,
    stagger: 0.3,
    delay:1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".card_secion",
        start: " top",
        end: "bottom bottom"
    }
});
gsap.registerPlugin(ScrollTrigger);

gsap.to(".card2",{
  y:-50,
  scrollTrigger:{
    trigger:".stack-section",
    start:"top top",
    end:"+=500",
    scrub:true
  }
});

gsap.from(".contact__header h2", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        end: "top 60%",
        scrub: 1
    }
});

gsap.from(".contact__field", {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        end: "top 60%",
        scrub: 1
    }
});

gsap.from(".contact__info", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".contact",
        start: "top 85%",
        end: "top 65%",
        scrub: 1
    }
});

gsap.from(".contact__button", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".contact",
        start: "top 75%",
        end: "top 60%",
        scrub: 1
    }
});

gsap.to(".card3",{
  y:-100,
  scrollTrigger:{
    trigger:".stack-section",
    start:"top top",
    end:"+=500",
    scrub:true
  }
});

gsap.to(".card4",{
  y:-150,
  scrollTrigger:{
    trigger:".stack-section",
    start:"top top",
    end:"+=500",
    scrub:true
  }
});
}
