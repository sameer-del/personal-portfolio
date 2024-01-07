
/* main page */
var tl=gsap.timeline({
    defaults:{
      opacity:0,
      ease:"linear",
      duration:1,
      
    }
  })
  tl.fromTo(".box",{
    x:1500,

  },{
    x:0,
    opacity:1,
    ease: "bounce.out",
    duration:1,
  })
  tl.fromTo(".box1",{
    y:-1000,

  },{
    y:0,
    opacity:1,
    ease: "bounce.out",
    duration:1,
  })
  tl.fromTo(".logo",{
    x:-100,

  },{
    x:0,
    opacity:1,
    ease: "elastic.out(1,0.3)",
    duration:.5,
  })
  tl.fromTo(".navbar",{
    x:-10,

  },{
    x:0,
    opacity:1,
    ease: "elastic.out(1,0.3)",
    duration:.5,
  })

  tl.fromTo(".side-text",{
    x:-10,

  },{
    x:0,
    opacity:1,
    ease: "elastic.out(1,0.3)",
    duration:.5,
  })
  tl.fromTo(".home-content",{
    x:-20,
    
  },{
    x:0,
    opacity:1,
    ease: "elastic.out(1,0.3)",
    duration:.5,
  })
  
  
 /*  main page */
              /*---------------*/


/* about-section */
  
  const rl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-img",
      scrub:true,
      
      start: "top bottom",
      end: "bottom 80%",
      
      toggleActions: "restart none reverse none",
      markers: false,
    }
  });


 
 
  rl.fromTo(".about-img", 
  {x:800,opacity:0,}, 
  { x:0,opacity:1,duration:1.3,} 
);
  rl.fromTo(".about-content", 
  {x:-10,opacity:0,}, 
  { x:0,opacity:1,
  duration:1.5,} 
);

/* about-section */
/* project-section */


const pl = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    scrub:true,
    
    start: "top bottom",
    end: "bottom 80%",
    
    toggleActions: "restart none reverse none",
    markers: false,
  }
});

pl.fromTo(".portfolio-box", 
{x:0,opacity:0,}, 
{ x:0,opacity:1,
duration:1.5,
ease: "linear",} 
);
/* project-section */


/* responsible animation for mobile */


const adjustAnimationForMobile = () => {
  if (window.innerWidth < 450) {
    /*home page animation for mobile */
    tl.clear(); 
    
    tl.fromTo(".box",{
      x:500,
  
    },{
      x:0,
      opacity:1,
      ease: "bounce.out",
      duration:1,
    })
    tl.fromTo(".logo",{
      x:0,
  
    },{
      x:-100,
      opacity:1,
      ease: "linear",
      duration:.5,
    })
    
    tl.fromTo(".home-content",{
      x:0,
      
    },{
      x:-25,
      opacity:1,
      ease: "linear",
      duration:.5,
    })
     /*home page animation for mobile */

     /*about page animation for mobile */
    rl.clear();
    

    rl.fromTo(".about-content", 
    {x:100,opacity:0,}, 
    { x:0,opacity:1,
    duration:1,ease: "linear",} 
  );
   /*about page animation for mobile */
    
  }
};
adjustAnimationForMobile();
window.addEventListener("resize", adjustAnimationForMobile);
