function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}






let smallSections = document.querySelectorAll(".small-section");
let upperDiv = document.querySelectorAll(".upper-div");
let upperDivText = document.querySelectorAll(".upper-div p");
let lowerDiv = document.querySelectorAll(".lower-div");
let lowerDivVideo = document.querySelectorAll(".lower-div video");
let lowerDivImage = document.querySelectorAll("lower-div img");




function navAnimation(){
    var nav = document.querySelector("nav");
    nav.addEventListener("mouseenter",function(){
        let tl = gsap.timeline()
        tl.to("#nav-bottom",{
            height:"20vh",
            duration:0.1,
        })
        tl.to(".nav-part2 h5",{
            display:"block",
        })
        tl.to(".nav-part2 h5 span",{
            y:0,
            stagger:{
                amount:0.6,
            }
        })
    })
    nav.addEventListener("mouseleave",function(){
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span",{
            transform:"translateY(25px)",
            stagger:{
                amount:0.1,
            }
        })
        tl.to(".nav-part2 h5",{
            display:"none",
            duration:0.1,
        })
        tl.to("#nav-bottom",{
            height:0,
            duration:0.1,
        })
    })
}

function rightElemAnimation(){
    var rightElems = document.querySelectorAll(".right-elem");
    rightElems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1,
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0,
            })
        })
        elem.addEventListener("mousemove",function(dets) {
            gsap.to(elem.childNodes[3],{
                x:dets.x - elem.getBoundingClientRect().x -60,
                y:dets.y - elem.getBoundingClientRect().y-90,
    
            })
        })
    })
    

}

function page3VideoAnimation(){
    var page3Center = document.querySelector(".page3-center");
var video = document.querySelector("#page3 video");

page3Center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        opacity:1,
        transform:"scaleX(1) scaleY(1)",
        borderRadius:0,
        duration:1,
    })
})

video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        opacity:0,
        transform:"scaleX(0.7) scaleY(0)",
        borderRadius:"30px",
    })
})
}

function page7VideoAnimation(){
    let sections = document.querySelectorAll(".right-section");

sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity=1;
        elem.childNodes[3].play();
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity=0;
        elem.childNodes[3].load();
    })
})

}



function page7BottomVideo(){

    smallSections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[1].style.borderTop = "2px solid #111";
        elem.childNodes[1].childNodes[3].style.opacity = 0;
        elem.childNodes[3].style.height = "78%";
        elem.childNodes[3].childNodes[3].style.opacity = 1;
        elem.childNodes[3].childNodes[3].play();
    })
    elem.addEventListener("mouseleave",function(){
    elem.childNodes[1].style.borderTop = "1.5px solid #dadada";
    elem.childNodes[1].childNodes[3].style.opacity = 1;
    elem.childNodes[3].style.height = "50%";
    elem.childNodes[3].childNodes[3].style.opacity = 0;
    elem.childNodes[3].childNodes[3].load();
    })
    
    })
}

function page10Animation(){
    gsap.from(".black-div1",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:".black-div1",
            scroller:"#main",
            // markers:true,
            start:"top 90%",
            end:"top 0%",
            scrub:true,
        }
    })
    
    gsap.from(".black-div2",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:".black-div2",
            scroller:"#main",
            // markers:true,
            start:"top 90%",
            end:"top 0%",
            scrub:true,
        }
    })
    gsap.from(".black-div3",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:".black-div3",
            scroller:"#main",
            // markers:true,
            start:"top 90%",
            end:"top 0%",
            scrub:true,
        }
    })
    
}

function loadingAnimation(){
var tl = gsap.timeline()
tl.from("#page1",{
    opacity:0,
    duration:0.3,
    delay:0.2,
})
tl.from("#page1",{
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "50px",
    duration:2,
    ease:"expo.out"
})
tl.from("nav",{
    opacity:0,
    delay:-0.2,
})
tl.from("#page1 h1, #page1 p, #page1 div",{
    opacity:0,
    duration:0.5,
    stagger:0.2,
})
}

locomotiveAnimation();
loadingAnimation();
navAnimation();
rightElemAnimation();
page3VideoAnimation();
page7VideoAnimation();
page7BottomVideo();
page10Animation()







