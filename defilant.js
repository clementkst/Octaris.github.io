//let a = 0;
let defilant = document.getElementById("defilant");
let slide = [
  "./images/fond1.png",
  "./images/fond3.jpg",
  "./images/fond4.jpg",
  "./images/fond5.png",
  "./images/fond2.jpg"];
let numero = 0;
/*let effectadd = defilant.classList.add("defilante");
let effectremove =defilant.classList.remove("defilante");
let effectadd1 = defilant.classList.add("defilante1");
let effectremove1 = defilant.classList.remove("defilante1");
 effectadd = +a ;
 effectadd1 = -a;
*/

function changeSlide(droite) {
  numero = numero + droite;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  defilant.src = slide[numero];
  defilant.classList.add("defilante");
  effet;
}
function effet() {
  let effect = defilant.classList.remove("defilante");
}
setInterval("changeSlide(1)", 8000);

setInterval(effet, 7900);

/*function effetadd () {
defilant.effectadd;
}
function effetremove () {
  if (effectadd == true );
  defilant.effectremove
}
function effetadd1 () {
  if (effectadd != effectadd +a);
  defilant.effectadd1
}
function effetremove1 () {
  if (effectadd == effectadd -a);
  defilant.effectremove1
}



function changeSlide(droite) {
  numero = numero + droite;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  defilant.src = slide[numero];
  defilant = effetadd;
}
setInterval("changeSlide(1)", 4000);
setInterval(effetadd, 1000);


/*defilant.addEventListener("onLoad", maTransition);

function maTransition() {
  document.getElementById('defilant').style.transition = "3sec ease";
}

console.log('transitionFond');

/* test 1
 */
