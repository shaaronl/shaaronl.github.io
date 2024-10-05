// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
  deleteSpeed: 10,
});

typewriter
  .typeString("I'd love to connect! ⋆⭒˚")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString("Feel free to reach out with any questions or collaboration ideas :)")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .start();


