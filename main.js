canvas =document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rwidth=100;
rheight=90;
bagroundimg="mars.jpg";
roverimg="rover.png";
roverx=10;
rovery=10;
function add(){
    bagroundimgtag=new Image();
    bagroundimgtag.onload=uploadBackground;
    bagroundimgtag.src=bagroundimg;
    roverimgtag=new Image();
    roverimgtag.onload=uploadrover;
    roverimgtag.src=roverimg;
}
function uploadBackground(){
    ctx.drawImage(bagroundimgtag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(roverimgtag,roverx,rovery,rwidth,rheight)
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    if(keypress=='38'){
        up();
    }
    if(keypress=='40'){
        down();
    }
    if(keypress=='37'){
        left();
    }
    if(keypress=='39'){
        right();
    }
}
function up(){
    if(rovery>=0){
        rovery=rovery-10;
        uploadBackground();
        uploadrover();
    } 
}
function down(){
    if(rovery<=500){
        rovery=rovery+10;
        uploadBackground();
        uploadrover();
        
    }
}
function right(){
    if(roverx<=700){
        roveryx=roverx+10;
        uploadBackground();
        uploadrover();
        
    }
}
function left(){
    if(roverx>=0){
        roverx=roverx-10;
        uploadBackground();
        uploadrover();
        
    }
}

