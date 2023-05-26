gsap.registerPlugin(ScrollTrigger);

const imageA = document.querySelectorAll(".imageA");
const imageB = document.querySelectorAll(".imageB");
const textoA = document.querySelectorAll(".textoA");
const textoB = document.querySelectorAll(".textoB");

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.contenedor_animacion',
        markers: true,
        start: 'top top',
        end: '100% 100%',
        scrub: true,
        pin: true,
    },
});



tl.to(imageA,{scale: 1.2, y: '5vh', duration: 4 });
tl.to(textoA,{scale: 1.2, opacity: 1, y: '5vh', duration: 5 });
tl.to(imageB,{scale: 1.2, opacity: 1, y: '5vh', duration: 6 });
tl.to(textoB,{scale: 1.2, opacity: 1, y: '5vh', duration: 8 });