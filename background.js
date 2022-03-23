/*let backgroundAvant = document.querySelector("body");
backgroundAvant = 0;
function background() {
  if (backgroundAvant == 0)
    backgroundAvant = document.querySelector("body").style.backgroundColor =
      " black";
  backgroundAvant = document.querySelector("body").style.transition = "3s ease";
  if (backgroundAvant ==! 0)
  backgroundAvant = document.querySelector("body").style.backgroundColor =
      "grey";
  backgroundAvant = document.querySelector("body").style.transition = "3s ease";
}
background();
function backgroundPlusUn() {
if (backgroundAvant == 0 ) backgroundAvant = backgroundAvant +1;
if (backgroundAvant == 1 ) backgroundAvant = backgroundAvant -1;   
}
//let backgroundApres = 1;
//function background2() {
 //   if (backgroundApres == 0)
 //   backgroundAvant == backgroundApres;
 //   if (backgroundApres == 1)
 //   backgroundAvant =document.querySelector('body').style.backgroundColor =' white';
//    backgroundAvant = document.querySelector('body').style.transition = ' 3s ease';
//}
//setInterval(background, 1000);
//setInterval(background2, 1000);
//background();
*/

let body = document.querySelector('body');
let num = 0;
let plus = 0.1;
function change1() {
  num = Math.random();
  if (num > plus)
  body.classList.remove('bodyv1');
  body.classList.add('bodyv2');
}

function change2() {
  num = Math.random();
  if (num < plus)
  body.classList.add('bodyv1');
  body.classList.remove('bodyv2');

}

setInterval(change1, 12000);
setInterval(change2, 18000);