var can;
var ctx;
var w, h;
var girlPic = new Image();
var starPic = new Image();
var num = 120;
var stars = [];
var lastTime, deltaTime;
var switchy;
var life = 0;

function init() {
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");
    w = can.width;
    h = can.height;
    document.addEventListener("mousemove", mousemove, false);
    girlPic.src = "img/girl.jpg";
    starPic.src = "img/star.png";

    for (var i = 0; i < num; i++) {
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();

    }
    lastTime = Date.now();
    gameloop();

}
document.body.onload = init;

function gameloop() {

    window.requestAnimationFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawBackground();
    drawGril();
    drawStars();
    aliveUpdate();

}

function drawBackground() {
    ctx.fillStyle = "#393550";
    ctx.fillRect(0, 0, w, h);

}

function drawGril() {
    //drawImage(img,x,y,width,height)
    ctx.drawImage(girlPic, 0, 0, 1280, 853.33);

}

function mousemove(e) {

    if (e.offsetX || e.layerX) {
        var px = e.offsetX == undefined ? e.layerX : e.offsetX;
        var py = e.offsetY == undefined ? e.layerY : e.offsetY;
        //判断px py在范围内
        if (px > 0 && px < 1280 && py > 0 && py < 1450) {
            switchy = true;

        } else {
            switchy = false;
        }
        //		console.log(switchy);
    }
}