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
        ease: "back.out(4.5)",
        x: "50vw",
        y: -50
    })
    .from(".artPanes", {
        scrollTrigger: {
            trigger: ".sticky",
            endTrigger: ".card2",
            scrub: 1,
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
        rotation: 360
    })
    .from(".card1", {
    scrollTrigger: {
        trigger: ".card1",
        // endTrigger: ".card1",
        scrub: 1,
        start: "top 60%",
        end: "bottom 45%"
    },
    ease: "back.out(0.8)",
    x: "200"
    })
    .from(".card2", {
    scrollTrigger: {
        trigger: ".card2",
        // endTrigger: ".card4",
        scrub: 1.2,
        start: "top 60%",
        end: "bottom 55%"
    },
    ease: "back.out(1.7)",
    y: 80
    })
    .from(".card3", {
    scrollTrigger: {
        trigger: ".card3",
        endTrigger: ".card4",
        scrub: 1.2,
        start: "top 80%",
        end: "bottom bottom"
    },
    ease: "back.out(0.7)",
    rotation: 360
    })
    .from(".card4", {
    scrollTrigger: {
        trigger: ".card4",
        // endTrigger: ".card4",
        scrub: 1.2,
        start: "top 90%",
        end: "bottom bottom"
    },
    ease: "back.out(0.7)",
    x: "200"
    })
/*
gsap.from(".logo", { duration:10, x: "-100%", ScrollTrigger:".logo" });
gsap.from(".ball", { duration:10, x:"100vw", ScrollTrigger:{
    trigger:".card4",
    scrub:true,
}})
*/
