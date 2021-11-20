prediction = "";


Webcam.set({
    width: 350,
    height: 300,
    image_format: ProcessingInstruction,
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_Snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log("ml5version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8s8JrZ2XO/model.json", modelLoaded);

function modelLoaded() {
    console.log("modelLoaded")
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "The first prediction is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}



