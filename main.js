Webcam.set({
    width: 350,
    height:300,
    image_format: 'png',
    png_quality: 90
    });
    
    camera - document.getElementById("camera");
    Webcam.attach( '#camera' );
    
    function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
    console.log('ml5 version:', ml5.version);
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xwh8XHkwR/model.json', modelLoaded);
    
    function modelLoaded() {
        console.log("Model Loaded");
    }
    
    function speak() {
        var synth = window.speechSynthesis;
        speak_data = "The meaning of this emoji is  " + Prediction;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis)
    }
    
    function check() {
        img = document.getElementById("captured_image");
        classifier.classify(img, gotResults);
    }
    
    function gotResults(error, results) {
        if(error) {
            console.error(error);
        }
    
        else {
            console.log(results);
            document.getElementById("result_emoji_meaning").innerHTML = results[0].label;
            Prediction = results[0].label;
            speak();
    
            if(results[0].label=="Amazing") {
                document.getElementById("update_emoji").innerHTML = "&#128076";
            }
            
            if(results[0].label=="Good") {
                document.getElementById("update_emoji").innerHTML = "&#128077";
            }
            
            if(results[0].label=="Victory") {
                document.getElementById("update_emoji").innerHTML = "&#9996";
            }

            if(results[0].label=="Anger") {
                document.getElementById("update_emoji").innerHTML = "&#9994";
            }

            if(results[0].label=="Hello") {
                document.getElementById("update_emoji").innerHTML = "&#128079";
            }
        }
    }
    