function preload() {
  
    classifier=ml5.imageClassifier("DoodleNet");

}
function setup() {
  
    canvas=createCanvas(300,300);
    canvas.center();
    background("whitesmoke");
    canvas.mouseReleased(classify_canvas);
    synth= speechSynthesis;
    
}
function draw() {

    strokeWeight(10);
    stroke(0);
    if (mouseIsPressed) {
        
        line(pmouseX,pmouseY,mouseX,mouseY)

    }
    
}
function clearcanvas() {
    background("whitesmoke");
}
function classify_canvas() {

    classifier.classify(canvas,gotResult);

    
}

function gotResult(error,results) {

    if (error) {
        console.error(error);
    } else {
       console.log(results);
       document.getElementById("plabel").innerHTML="Label: "+results[0].label;
       document.getElementById("clabel").innerHTML="Confidence: "+Math.round(results[0].confidence*100)+"%";
       utterThis= new SpeechSynthesisUtterance(results[0].label);
       synth.speak(utterThis);     
    }
    
    
}