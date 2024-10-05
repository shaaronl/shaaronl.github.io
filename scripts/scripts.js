// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
  deleteSpeed: 20,
});

const fullText = `I'm passionate about building <em>cool web applications</em> 
and exploring <em>AI</em>. I've worked on various projects, including a <strong>merch-portal</strong> and a <strong>music review platform</strong>, aiming to create seamless user experiences.`;
const endText = `On this site, you'll find my latest work, including the applications and web projects I’ve been creating.`;
typewriter
  .typeString("hello world ⋆⭒˚")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString("Im sharon!")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString("I'm a third-year computer science student at <strong>Cal Poly SLO</strong>")
  .pauseFor(150)
  .deleteAll()
  .pauseFor(500)
  .typeString(fullText)
  .pauseFor(3000)
  .deleteAll()
  .pauseFor(500)
  .typeString(endText)
  .pauseFor(3000)
  .deleteAll()
  .pauseFor(500)
  .start();
