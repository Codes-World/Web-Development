function toggle() {
    var img = document.getElementById("image");
    var display = img.style.display;
    if(display == "none"){
        img.style.display = "block";
    }
    else {
        img.style.display = "none";
    }
}