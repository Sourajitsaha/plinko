function bounceoff(Object1,Object2 ){
    if (Object1.x - fixedRect.x < fixedRect.width/2 + Object1.width/2
        && fixedRect.x - Object1.x < fixedRect.width/2 + Object1.width/2) {
            Object1.velocityX = Object1.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
    if (Object1.y - fixedRect.y < fixedRect.height/2 + Object1.height/2
      && fixedRect.y - Object1.y < fixedRect.height/2 + Object1.height/2){
        Object1.velocityY = Object1.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
}

function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }
  