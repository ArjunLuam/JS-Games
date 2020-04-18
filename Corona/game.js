function load_images(){
	virus_image = new Image;
	virus_image.src = "Assets/v1.png";

	player_img = new Image;
	player_img.src = "Assets/superhero.png";

	gem_image = new Image;
	gem_image.src = "Assets/gemm.png";

}
function init(){
canvas=document.getElementById("mycanvas")
pen=canvas.getContext('2d');
W=700
H=400
canvas.width= W
canvas.height=H
e1 = {
    x : 150,
    y : 10,
    w : 60,
    h : 50,
    speed :20,
};
e2 = {
    x : 350,
    y : 30,
    w : 60,
    h : 60,
    speed :15,
};
e3 = {
    x : 500,
    y : 70,
    w : 80,
    h : 80,
    speed :30,
};
enemy=[e1,e2,e3];
player = {
    x : 20,
    y : H/2,
    w : 60,
    h : 60,
    speed : 20,
    moving : "false",
}
gem = {
    x : W-100,
    y : H/2,
    w : 60,
    h : 60,
}
}
function draw(){
    pen.clearRect(0,0,W,H);
    pen.drawImage(player_img,player.x,player.y,player.w,player.h);
	pen.drawImage(gem_image,gem.x,gem.y,gem.w,gem.h);
    for(let i=0;i<enemy.length;i++){
        pen.drawImage(virus_image,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h); 
    }
     
}

function update(){
    
    for(let i=0;i<enemy.length;i++){
        enemy[i].y=enemy[i].y+enemy[i].speed;
        if(enemy[i].y>H-enemy[i].h || enemy[i].y<0){
            enemy[i].speed=enemy[i].speed*(-1);
        }
    } 
}

function gameloop(){
    draw();
    update();
}
load_images();
init();
setInterval(gameloop,100);