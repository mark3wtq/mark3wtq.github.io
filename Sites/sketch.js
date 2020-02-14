let button;
let button1;
let siteData;
let sites;
let names
let i;
let img;
let col;
let r;
let g;
let b;
let a;
let buttonX;
let buttonY;

let rectx;
let recty;

let sizew;
let sizeh;






function preload(){

  siteData = loadJSON("siteName.json");
}


function setup() {

sites = siteData.sites;

print(sites);

canvas = createCanvas(windowWidth, windowHeight);
canvas.style("z-index", "-1");
canvas.position(0,0);



goButton();





}

function goButton(){
  r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200,255); // a is a random number between 200 - 255
  col = color(r, g, b, a);

  buttonX = random(windowWidth-5);
  buttonY = random(windowHeight-5);



  i = int(random(0, 24));
  names = sites[i].name;
  button = createButton(names);
  sizew = 200;
  sizeh = 30;
  button.size(sizew, sizeh);
  button.style('background-color', col);
  button.position(buttonX, buttonY);
  img = loadImage(sites[i].image);




  button.mouseOver(hide);

}


function hide(){
  button.hide();
  return goButton();

}



function mouseMoved(){
  image(img, mouseX*random(1,5), mouseY*random(1,5), img.width / random(1,5), img.height / random(1,5));

  sizew = sizew + 1;
  sizeh = sizeh + 1;
  buttonX = buttonX - 1;
  buttonY = buttonY - 1;

  if (buttonX <= 0){
    buttonX = buttonX +1;
    sizew = sizew - 1;

  }
  if (buttonY <= 0){
    buttonY = buttonY +1;
    sizeh = sizeh - 1;
  }
  button.size(sizew, sizeh);
  button.position(buttonX, buttonY);





}



function draw() {
  fill('rgb(100%,0%,10%)');
  noStroke();
  circle(rectx, recty, 66);

  rectx = mouseX;
  recty = mouseY;


  }
