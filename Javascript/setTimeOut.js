function speak(letter){
    var audio = document.getElementById("audio");
    var speaker = document.getElementById("speaker");
    var result = document.getElementById("result");

    if(letter == 'a'){
        audio.src = "sound/apple.mp3";
        result.style.display = "block";
        result.innerHTML = "Apple";
    }else if(letter == 'b'){
        audio.src = "sound/ball.mp3";
        result.style.display = "block";
        result.innerHTML = "Ball";
    }else if(letter == 'c'){
        audio.src = "sound/cat.mp3";
        result.style.display = "block";
        result.innerHTML = "Cat";
    }else if(letter == 'd'){
        audio.src = "sound/dog.mp3";
        result.style.display = "block";
        result.innerHTML = "Dog";
    }else{
        alert("Not found");
    }
    speaker.style.color = "black";
    audio.play();

    setTimeout(function(){
        speaker.style.color = "#ddd";
        result.innerHTML = '';
        result.style.display = "none";
    }, 1000);
}