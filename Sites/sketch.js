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



function preload(){

  siteData = loadJSON("siteName.json");
}

function setup() {
  // put setup code here

sites = siteData.sites;

print(sites);

canvas = createCanvas(windowWidth, windowHeight);
canvas.style("z-index", "-1");
canvas.position(0,0);

goButton()
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
  button.style('background-color', col);
  button.position(buttonX, buttonY);
  img = loadImage(sites[i].image);


  button.mouseOver(hide);
}


function hide(){
  button.hide();
  return goButton();

}

function draw() {
  // put drawing code here
  image(img, random(windowWidth-5), random(windowHeight-5), img.width / random(1,5), img.height / random(1,5));


}
