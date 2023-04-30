let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #5e4ea9"> Desarrolladora web Junior.')
  .pauseFor(200)
  .deleteChars(10)
  .start();


let app1 = document.getElementById('texto1');
 
let texto1 = new Typewriter(app1, {
  loop: true,
  delay: 75,
});
 
texto1
  .pauseFor(2500)
  .typeString('<span style="color: #5e4ea9"> ¡Hola mundo!.')
  .pauseFor(200)
  .deleteChars(10)
  .start();


  