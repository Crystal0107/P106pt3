function startClassification(){
        navigator.mediaDevices.getUserMedia({ audio: true });
        classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kZoiXxQGl/,', modelReady);
    }

    function modelReady(){
        classifier.classify(gotResults);
    }
    
    var dogCount = 0;
    var catCount = 0;
    var cowCount = 0;
    var roarCount = 0;

    function gotResults(error, results) {
        if (error) {
            console.error(error);
        } else
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

         document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("earImg");

        if (results[0].label == "meow") {
            img.src = 'cat.png';
            catCount = (1 + catCount);
            console.log("catCount");
        } else if (results[0].label == "Bark") {
            img.src = 'dog.png';
            dogCount = (1 + dogCount);
            console.log("dogCount");
        } else if (results[0].label == "moo") {
            img.src = 'cow.png';
            cowCount = (1 + cowCount);
            console.log("cowCount");
        } else if (results[0].label == "roar") {  
            img.src = 'lion.png'; 
            roarCount = (1 + roarCount);
            console.log("roarCount");
        } else{
            img.src = 'ear.png';
        }
    }