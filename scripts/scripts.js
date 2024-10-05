// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
  deleteSpeed: 5,
});

const fullText = `I'm a third-year computer science student at <strong>Cal Poly SLO</strong>, passionate about building <em>cool web applications</em> and exploring <em>AI</em>. I've worked on various projects, including a <strong>merch-portal</strong> and a <strong>music review platform</strong>, aiming to create seamless user experiences. Let's connect and explore new possibilities together!`;

typewriter
  .typeString("hello world ⋆⭒˚")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString("im sharon!")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString(fullText)
  .pauseFor(3000)
  .deleteAll()
  .pauseFor(500)
  .start()
  .deleteAll();

