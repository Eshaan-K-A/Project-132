var status1 = "";
var img = "";
function preload(){
    img = loadImage("bottles.png")
}
function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("statusSpan").innerHTML = "Detecting Object(s)"
}

function modelLoaded(){
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}
function draw(){
    image(img, 0, 0, 700, 500);
}

function back(){
    window.location = "index.html";
}