var starObj = function() {

    this.x;
    this.y;
    this.picNo;
    this.timer;
    this.xSpd;
    this.ySpd;
}
starObj.prototype.init = function() {
    this.x = Math.random() * 2000 + 200;
    this.y = Math.random() * 3000 + 150;

    this.picNo = Math.floor(Math.random() * 7);
    this.timer = 0;

    this.xSpd = Math.random() * 3 - 1.5;
    this.ySpd = Math.random() * 3 - 1.5;
}
starObj.prototype.update = function() {

    this.x += this.xSpd * deltaTime * 0.01;
    this.y += this.ySpd * deltaTime * 0.01;
    //this.x 超过范围
    if (this.x < 30 || this.x > 993) {
        this.init();
        return;
    }
    //this.y超出范围 重生
    if (this.y < 10 || this.y > 743) {
        this.init();
        return;
    }
    this.timer += deltaTime;
    if (this.timer > 60) {
        this.picNo += 1;
        this.picNo %= 7;
        this.timer = 0;
    }


}
starObj.prototype.draw = function() {

    // save()
    ctx.save();

    //globalAlpha 全局透明度
    ctx.globalAlpha = life;
    //drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
    ctx.drawImage(starPic, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7);
    //restore()

    ctx.restore();
}

function drawStars() {
    for (var i = 0; i < num; i++) {
        stars[i].update();
        stars[i].draw();
    }

}

function aliveUpdate() {
    if (switchy) { //in area
        //show stars
        life += 0.3 * deltaTime * 0.05;
        if (life > 1) {
            life = 1;
        }

    } else { //out area
        //hide stars
        life -= 0.3 * deltaTime * 0.05;
        if (life < 0) {
            life = 0;
        }
    }
}