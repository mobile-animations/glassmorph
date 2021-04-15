const btn = document.querySelector(".sticky");

btn.addEventListener('click', function() {
    alert('Scroll down')
})


gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({defaults: {}})
timeline
    .from(".ball", {
        scrollTrigger: {
            trigger: ".sticky",
            endTrigger: ".card1",
            scrub: 1.5,
            start: "top top",
            end: "top top"
        },
        x: "50vw",
        y: -50
    })
    .from(".artPanes", {
        scrollTrigger: {
            trigger: ".sticky",
            endTrigger: ".card2",
            scrub: true,
            start: "top top"
        },
        x: "50vw",
        y: -50,
        rotation: 180
    })
    .from(".paperweight", {
        scrollTrigger: {
            trigger: ".sticky",
            endTrigger: ".card2",
            scrub: 2.5,
            // markers: true,
            start: "top top",
            end: "top top"
        },
        x: "-50vw",
        y: -50,
        rotationY: 360
    })

gsap.from(".card3", {
    scrollTrigger: {
        trigger: ".card2",
        endTrigger: ".card4",
        scrub: 1.2,
        start: "bottom 80%",
        end: "bottom bottom"
    },
    rotationY: 180
})
/*
gsap.from(".logo", { duration:10, x: "-100%", ScrollTrigger:".logo" });
gsap.from(".ball", { duration:10, x:"100vw", ScrollTrigger:{
    trigger:".card4",
    scrub:true,
}})
*/
