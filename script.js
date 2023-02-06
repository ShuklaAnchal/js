var tl = gsap.timeline(
   {
      
   }
);

tl.from("#nav a",{
    y:-40,
    delay:0.2,
    opacity:0,
    scale:0
})
tl.from("#image",{
   opacity:0,
   delay:0.3
})
tl.from("#services h2",{
    x:-90,
    delay:-0.2
})
.from("#text h3",{
    x:-90,
    opacity:0,
  
 })
 .from("#text h1",{
    x:-90,
    opacity:0,
    delay:-0.2
 })
 .from("#text p",{
    x:-90,
    opacity:0,
 })