function preload(){
calssifier = ml5.imageClassifier("DoodleNet");





}
function setup(){
canvas=createCanvas(500,500,);
background("white");
canvas.mouseReleased(classifyCanvas);
canvas.center()


}
 function classifyCanvas(){
calssifier.classify(canvas,gotResults)
 }
function gotResults(error,results){
if (error) {
console.error(error);    
} else {
   console.log(results);
   document.getElementById("label").innerHTML="etiqueta: "+results[0].label;
   document.getElementById("confidence").innerHTML="precicion: " +results[0].confidence;
}
}





function draw(){
strokeWeight(12);
stroke(0);
if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY)
}
}
function eraser(){
    background("white");
}