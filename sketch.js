
function setup() {
  createCanvas(1000, 800);
  palavra=camilacorna();
}

function draw() {
 background("blue");
  
  gabriellindo();
  giovannafeia();
  camilacorna();
}


function gabriellindo(){
  let minimo = 0;
  let maximo = width

  let seguir = map (mouseX, 0, width,1,palavra.length)
  let gabriel = palavra.substring(0,seguir);
  text(gabriel,500,400)

}

function giovannafeia(){
fill("black")
  textSize(70);
  textAlign(CENTER,CENTER);
}

function camilacorna(){
  let palavras=["gabi","gabriellindo","giovannafeia","paloma sapatao","blsonaro","petistas","haaaa"];
  return random(palavras);
}
