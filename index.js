/*
 * This is index.js
 * Start by modifying the id function to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';


// draws a stick figure on the canvas
// the stick figure will stand over the point X,Y (default: 100,150)
// facing is a degree in which the stick figure is facing: 0 is to the right, 90 is towards us
function drawStickFigure(el, x, y, facing) {
  var c = el.getContext("2d");

  // set our drawing style
  c.lineWidth = 2;
  c.lineCap = "round";
  c.lineJoin = "round"
  c.strokeStyle = "#000";

  if (x == null) x = 100;
  if (y == null) y = 150;

  // the arms and the legs look the same
  drawLimbs(c, x, y)            // legs
  drawLimbs(c, x, y-40)         // arms

  // body is just a line
  line(c, x, y-40, x, y-80)     // body

  // head is a circle with eyes and a smile
  circle(c, x, y-100, 20)       // head
  drawFace(c, x, y-100, facing) // face


  // helpful functions start here
  function drawLimbs(c, x, y) {
    line(c, x-20, y, x, y-40)
    line(c, x+20, y, x, y-40)
  }

  function drawFace(c, x, y, facing) {
    // if the `facing` parameter is not given, the stick figure will face towards us
    if (facing == null) facing = 90;

    // make sure the `facing` parameter is between 0 and 360
    facing = facing % 360; // that's like the mathematical remainder after a division
    if (facing < 0) facing += 360;

    if (facing > 180) return;  // facing away from us, don't draw a face

    // we'll fake the turning of the face by shifting the eyes and the smile by an offset of up to 10 pixels
    var faceOffset = 0;
    if (facing <= 180) {
      faceOffset = (facing-90)/9;
    }

    circle(c, x-7-faceOffset, y-5, 1)  // 7 is distance from center, 5 is how high the eyes are from the head's center, 1 is eye size
    circle(c, x+7-faceOffset, y-5, 1)

    // decrease the smile size here
    var smileSize = 70; // size of smile in degrees of angle; 360 would be a full circle
    var startAngle = rad(90-smileSize/2-2*faceOffset)
    var endAngle   = rad(90+smileSize/2-2*faceOffset)
    arc(c, x-faceOffset, y, 12, startAngle, endAngle) // 12 is the radius of the smile circle
  }

  // draw a line on canvas context `c`, from point x1,y1 to point x2,y2
  function line(c, x1, y1, x2, y2) {
    c.beginPath();
    c.moveTo(x1,y1);
    c.lineTo(x2,y2);
    c.stroke();
  }

  // draw a circle on canvas context `c`, centered on x,y, with radius r
  // also fill the circle with white (so it's not transparent)
  function circle(c, x, y, r) {
    c.beginPath()
    c.fillStyle="#fff"
    c.arc(x, y, r, 0, 6.3, false); // 6.3 is bigger than 2π so the arc will be a whole circle
    c.fill()
    c.stroke()
  }


  // draw an arc on canvas context `c`, cenetered on x,y, with radius r, from angleStart to angleEnd
  function arc(c, x, y, r, angleStart, angleEnd) {
    c.beginPath();
    c.arc(x, y, r, angleStart, angleEnd, false)
    c.stroke();
  }

  // convert from degrees to radians
  function rad(x) {
    return x * Math.PI / 180;
  }

}

/*Create a `drawLines` function which accepts a single parameter, a canvas
 element, where it will draw two parallel lines. The first line should begin
 at a point 100 pixels to the right of, the origin (i.e. 0,0) and 100 pixels
 below it. It should be 400 pixels long. The second line should run parallel
 to the first line, exactly 100 pixels below it. It should start at a point
 100 pixels from the edge of the canvas and be 200 pixels long.*/
function drawLines(canvas){
    const c = canvas.getContext("2d");
    //const rect = canvas.getBoundingClientRect();
    c.beginPath();
    c.moveTo(100, 100);
    c.lineTo(500, 100);
    c.stroke();

    c.beginPath();
    c.moveTo(100, 200);
    c.lineTo(300, 200);
    c.stroke();
}

/*Create a function `drawTriangle` that takes seven parameters: a
canvas element, and x1, y1, x2, y2, x3, y3. The function draws a red
triangle, filled solid with green, between the three points given by
the parameters.*/
function drawTriangle(canvas, x1, y1, x2, y2, x3, y3){
    const c = canvas.getContext("2d");
    c.strokeStyle = "red";
    c.fillStyle = "#00FF00";
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.lineTo(x3, y3);
    c.lineTo(x1, y1);
    c.fill();
    c.stroke();
}

/*Write a drawGrid function that fills the canvas with a grid to
make squares 50px big.*/
function drawGrid(canvas){
    const rect = canvas.getBoundingClientRect();
    const c = canvas.getContext("2d");
    c.beginPath();
    for (let i = 0; i <= rect.width; i += 50){
        c.moveTo(i, 0);
        c.lineTo(i, rect.height);
    }
    for (let i = 0; i <= rect.height; i += 50){
        c.moveTo(0, i);
        c.lineTo(rect.width, i);
    }
    c.stroke();
}

/*Write a drawCzechFlag function to draw the Czech flag.*/
function drawTriangle2(c, x1, y1, x2, y2, x3, y3){
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.lineTo(x3, y3);
    c.lineTo(x1, y1);
    c.fill();
    c.stroke();
}

function drawCzechFlag(canvas){
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const c = canvas.getContext("2d");
    c.strokeStyle = "#10457E";
    c.fillStyle = "#10457E";
    drawTriangle2(c,
        0, 0,
        w / 2, h / 2,
        0, h);
    c.strokeStyle = "#D71319";
    c.fillStyle = "#D71319";
    drawTriangle2(c,
        0, h,
        w / 2, h / 2,
        w, h);
    drawTriangle2(c,
        w, h / 2,
        w / 2, h / 2,
        w, h);
}

/*Create a function `drawSpartacus` that takes one parameter, a canvas
element. The function will draw the stick figure Spartacus on the provided
canvas. Make sure he wields a sword in his hand. For convenience, index.js
contains a function `drawStickFigure` that does most of the job, given a
canvas element. Challenge: make him walk around.*/

function drawSpartacus(canvas){
    let raf;
    let x = 100;
    let y = 150;
    let speed = 0.5;
    let vx = speed;
    let vy = speed;
    let destx = 100;
    let desty = 150;
    let destAngle = 0;
    let angle = 0;
    const c = canvas.getContext("2d");

    function drawLine(x1, y1, x2, y2){
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x2, y2);
        c.stroke();
    }

    function drawSword(x, y){

        c.strokeStyle = "grey";
        // middle line
        drawLine(x+15, y-40, x+70, y-96);

        c.strokeStyle = "black";
        // sides of the sword - right
        drawLine(x+28, y-50, x+70, y-91);
        // left
        drawLine(x+24, y-53, x+65, y-96);

        // end of the sword
        drawLine(x+70, y-91, x+70, y-96);
        drawLine(x+65, y-96, x+70, y-96);

        c.lineWidth = 3;
        // holder for the hand
        drawLine(x+15, y-40, x+25, y-50);

        // protector for hands
        drawLine(x+20, y-56, x+30, y-46);
    }

    function rad(x) {
      return x * Math.PI / 180;
    }

    function draw(){
        c.clearRect(0, 0, canvas.width, canvas.height);
        // calculate the angle which he is facing
        angle = Math.abs(Math.atan(vy/vx)) * 180 / Math.PI;
        if (vx <= 0){
            if (vy <= 0){
                angle += 180;
            } else angle += 90;
        } else if (vy < 0){
            angle += 270;
        }
        animateSpartacus(angle);
        x += vx;
        y += vy;

        // calculate new vx and vy

        destAngle = Math.abs(Math.atan(desty - y / destx - x)) * 180 / Math.PI;

        if (destx - x <= 0){
            if (desty - y <= 0){
                destAngle += 180;
            } else destAngle += 90;
        } else if (desty - y < 0){
            destAngle += 270;
        }

        if (Math.abs(destx - x) <= 1){
            vx = 0;
        } else {
            // vx = Math.cos(destAngle);
            vx = destx > x ? speed : -speed;
        }
        if (Math.abs(desty - y) <= 1){
            vy = 0;
        } else {
            // vy = Math.sin(destAngle);
            vy = desty > y ? speed : -speed;
        }
        console.log("x: " + destx + ", y : " + desty + ", angle: " + angle + ", destAngle: " + destAngle);


        raf = window.requestAnimationFrame(draw);
    }

    function animateSpartacus(facing){
        drawStickFigure(canvas, x, y+50, facing);
        drawSword(x, y+50);
    }

    canvas.addEventListener('mouseover', function(e) {
        // start animation
        raf = window.requestAnimationFrame(draw);
    });

    canvas.addEventListener('mousemove', function(e) {
        // set new destination
        const rect = canvas.getBoundingClientRect();
        destx = (e.clientX - rect.left);
        desty = (e.clientY - rect.top);
    });

    canvas.addEventListener('mouseout', function(e) {
        window.cancelAnimationFrame(raf);
    });

    animateSpartacus(angle);

}
