var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
var leftArrow = document.querySelector("#page1 .downward-arrow")
var waitingFor = document.querySelectorAll("#page4 .elem")
var cardsContainer = document.querySelectorAll("#page2 #cards")
var scrollerh4 = document.querySelectorAll("#page2 #scroller h4")
var buttons = document.querySelectorAll("body button")
var alinks = document.querySelectorAll("body a")


document.addEventListener("mousemove", function(dets){
        crsr.style.left = dets.x-12+"px";
        crsr.style.top = dets.y-12+"px";
        blur.style.left = dets.x-180+"px";
        blur.style.top = dets.y-180+"px";
})

alinks.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "0.5px solid white";
        crsr.style.transform = "scale(3)"; 
        crsr.style.zIndex = "15";
    });
    elem.addEventListener("mouseleave", function() {
        crsr.style.backgroundColor = "#a2ce04";
        crsr.style.border = "none";
        crsr.style.transform = "scale(1)";
    });
});

buttons.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "0.5px solid white";
        crsr.style.transform = "scale(3)"; 
        crsr.style.zIndex = "15";
    });
    elem.addEventListener("mouseleave", function() {
        crsr.style.backgroundColor = "#a2ce04";
        crsr.style.border = "none";
        crsr.style.transform = "scale(1)";
    });
});

scrollerh4.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "0.5px solid white";
        crsr.style.transform = "scale(3)"; 
        crsr.style.zIndex = "15";
    });
    elem.addEventListener("mouseleave", function() {
        crsr.style.backgroundColor = "#a2ce04";
        crsr.style.border = "none";
        crsr.style.transform = "scale(1)";
    });
});

waitingFor.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "0.1px solid white";
        crsr.style.transform = "scale(3)"; 
        crsr.style.zIndex = "15";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.backgroundColor = "#a2ce04";
        crsr.style.border = "none";
        crsr.style.transform = "scale(1)";
    })
})

cardsContainer.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "0.1px solid white";
        crsr.style.transform = "scale(3)"; 
        crsr.style.zIndex = "15";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.backgroundColor = "#a2ce04";
        crsr.style.border = "none";
        crsr.style.transform = "scale(1)";
    })
})

if(leftArrow){
    leftArrow.addEventListener("mouseenter", function(){
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "1px solid white"
        crsr.style.transform = "scale(3)";
    })
    leftArrow.addEventListener("mouseleave", function(){
        crsr.style.backgroundColor = "#a2ce04";
        crsr.style.border = "none";
        crsr.style.transform = "scale(1)";
    })
    leftArrow.addEventListener("click",function(){
        page2.scrollIntoView({behavior: "smooth"});
    })
}

gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height:"100px",
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        marker:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 70%",
        end: "top 55%",
        scrub: 2,
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 70%",
        end: "top 55%",
        scrub: 2,
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 2,
    }
})