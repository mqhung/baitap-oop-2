/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size +'"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 100;
  }
  this.moveDown = function(){
    this.top += 100;
  }
  this.moveLeft = function(){
    this.left -= 100;
  }
  this.moveUp = function(){
    this.top -= 100;
  }
}
let flagRight = false;
let flagUp = false;
let hero = new Hero('fifa.jpg', 10, 10, 200);

function start(){
  if(hero.left <= window.innerWidth - hero.size && hero.top <=window.innerHeight - hero.size) {
    hero.moveRight();
  }else if (hero.top <= window.innerHeight - hero.size){
    hero.moveDown();
  }
  if (hero.top >= window.innerHeight - hero.size){
    flagRight = true;
  }
  if (flagRight){
    hero.moveLeft();
  }
  if (hero.left < 30){
    flagUp = true;
  }
  if (flagUp){
    hero.moveUp();
  }
  if (hero.left <= 10 && hero.top <= 10){
    return;
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 50);
}

start();