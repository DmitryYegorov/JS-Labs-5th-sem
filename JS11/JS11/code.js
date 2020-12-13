let ball = document.getElementById('ball');

ball.onmousedown = function(e) {

  let coordX = 0;
  let coordY = 0;

  function animate(){
    document.onmousemove = null;
    ball.onmouseup = null;
    function V0(){
        if(coordX > 0 && coordX < 67){
          return 300;
        }
        if(coordX > 66 && coordX < 133){
          return 200;
        }
        if(coordX > 132 && coordX < 200){
          return 100;
        }
    }
    let V = V0();
    let X = 201;
    let Y = 314;
    let g = 9.8;
    let alpha = Math.atan((coordY - Y) / (X - coordX));
    let x = coordX;
    let y = coordY;
    let t = 0;

    let step = setInterval( () => {
        x = coordX + V * Math.cos(alpha) * t;
        y = coordY - (V * Math.sin(alpha) * t - (g * t**2) / 2);
        t += 0.1;

        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        if((x + ball.offsetWidth) > 1330){
          clearInterval(step);
        }
        if((y + ball.offsetHeight) > 628){
          clearInterval(step);
        }
        
    },20);
  }

  ball.ondragstart = function() {
  return false;
  };

  ball.style.position = 'absolute';
  moveAt(e);
  document.body.appendChild(ball);

  ball.style.zIndex = 1000; 

  function moveAt(e) {
    coordX = e.pageX - ball.offsetWidth / 2;
    coordY = e.pageY - ball.offsetHeight / 2;
    ball.style.left = coordX + 'px';
    ball.style.top = coordY + 'px';

    if(e.pageX > 200){
      ball.style.left = 200 - ball.offsetWidth / 2 + 'px';
    }

    console.log(coordX);
  }

  document.onmousemove = function(e) {
    moveAt(e);
  }

  ball.onmouseup = function(){
      animate();
  };

}