var s;

var scl = 20;

var food;
var poison;

function setup() {
    createCanvas(1500, 600);
    s = new Snake();
    frameRate(15);
    pickLocation();

}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
    //poison
    poison = createVector(floor(random(cols)), floor(random(rows)));
    poison.mult(scl);

}

// function mousePressed() {
//     s.total++;
// }

function draw() {
    background('#fae');

    if (s.eat(food)) {
        pickLocation();
    }
    s.death();
    s.update();
    s.show();

    if (s.kill(poison)) {
        s.death();
    }

//apple//
    fill(255, 204, 0);
    ellipse(food.x, food.y, scl, scl);
    //poison
    fill(0,0,255);
    ellipse(poison.x, poison.y, scl, scl);
}





function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}