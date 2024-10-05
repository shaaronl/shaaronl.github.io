// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
  deleteSpeed: 10,
});

typewriter
  .typeString("when I'm not coding, I love to experiment in the kitchen. ♨")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString("here are some of my fave recipes :P")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .start();


