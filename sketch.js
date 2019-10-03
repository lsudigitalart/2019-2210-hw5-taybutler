//wall drawing 340

function setup() {
    //put things you want to run once in here
    createCanvas(900, 600);
    background(237, 12, 79);
}

function draw() {
    //put things you want to run over and over here
    frameRate(30);

    //middle square
    noStroke();
    fill(237, 12, 79);
    rect(200,150,500,300);
    
    //vertical lines
    fill(0, 60, 181);
    push();
    translate(random(100,500), 50);
    rect(150, 100, 5, 300);
    pop();

    push();
    translate(random(100,500), 50);
    rect(150, 100, 5, 300);
    pop();

    push();
    translate(random(100,500), 50);
    rect(150, 100, 5, 300);
    pop();

    push();
    translate(random(100,500), 50);
    rect(150, 100, 5, 300);
    pop();

    push();
    translate(random(100,500), 50);
    rect(150, 100, 5, 300);
    pop();

    push();
    scale(random(2.0,50.0,), 1);
    rect(100, 150, 5, 300);
    rect(110, 150, 5, 300);
    rect(90, 150, 3, 300);
    pop();

    //borders
    fill(237, 12, 79)
    noStroke();
    rect(0, 0, 200, 900);
    rect(700, 0, 200, 900);

    //horizontal lines
    strokeWeight(3);
    stroke(0, 60, 181);
    for (var l = 0; l < 160; l += 15) {
    line(0, l, 900, l);
    }
    for (var l = 450; l < 610; l += 15) {
        line(0, l, 900, l);
    }
    for (var l = 150; l < 610; l += 15) {
        line(0, l, 200, l);
        line(700, l, 900, l);
    }
    
}