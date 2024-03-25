let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #B21A6F;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #B21A6F;">Aprendo programación y estudio Licenciatura en Biotecnología Genómica.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
