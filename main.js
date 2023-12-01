nosex=0;
nosey=0;
wristxr=0;
wristxl=0;
difference=0;
function setup(){
canvas=createCanvas(550,550);
canvas.position(560,150)
v=createCapture(VIDEO);
v.size(550,500);
f=ml5.poseNet(v,modelLoaded);
f.on('pose',answer);
}
function modelLoaded(){
console.log("PoseNet Is Active")
}
function answer(result){
if (result.length>0) {
    console.log(result);
    nosex=result[0].pose.nose.x;
    nosey=result[0].pose.nose.y;
    console.log("x-coordinate of the nose",nosex);
    console.log("y-coordinate of the nose",nosey);
    wristxl=result[0].pose.leftWrist.x;
    wristxr=result[0].pose.rightWrist.x;
    difference=floor(wristxl-wristxr);
    console.log("the size of the square",difference);
}

}
function draw(){
background("black");
document.getElementById("w").innerHTML="the width and the height of the square -    "+difference+"px";
fill("yellow");
stroke("black");
square(nosex,nosey,difference);
}