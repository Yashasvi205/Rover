canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var r_width=100;
var r_height=90;
var r_x=10;
var r_y=100;
var bg_image="img1.jpg";
var r_image="img2.png";
var background_img;
var rover_img;
var nasa_imgs=["nas1.jpg","nas2.jpg","nas3.jpg"];
var rando=Math.floor(Math.random()*3);

window.addEventListener("keydown",keyDown_function);
function keyDown_function(e){
      keyPressed=e.keyCode;
      if (keyPressed == '38')
      {
        up();
      }
      if (keyPressed == '40')
      {
        down();
      }
      if (keyPressed == '39')
      {
        right();
      }
      if (keyPressed == '37')
      {
        left();
      }
}

function add(){
    background_img = new Image();
    background_img.onload=uploadBackground;
    background_img.src = nasa_imgs[rando];
    rover_img=new Image();
    rover_img.onload = uploadRover;
    rover_img.src = r_image;
}
function uploadBackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_img,r_x,r_y,r_width,r_height);
}
function up(){ 
  if(r_y>=0){
    r_y=r_y-10;
    uploadBackground();
    uploadRover(); 
  }

}
function down(){
  if(r_y<=510){
    r_y=r_y+10;
    uploadBackground();
    uploadRover();
  }

}
function left(){
  if(r_x>=0){
    r_x=r_x-10;
    uploadBackground();
    uploadRover();
  }
  
}
function right(){
  if(r_x<=700){
    r_x=r_x+10;
    uploadBackground();
    uploadRover();
  }


}

