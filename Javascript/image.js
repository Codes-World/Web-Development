window.onload = function(){
    var thumb = document.getElementsByClassName("thumb");
    for(var i=0; i < thumb.length; i++){
        thumb[i].onclick = function() {
            for(var j = 0; j < thumb.length; j++){
                thumb[j].style.border = "none";
                this.style.boxShadow = "none";
            }
            this.style.border = "5px solid white";
            this.style.boxShadow = "0 0 10px 0 #ddd";
            var newSrc = this.src;
            var preview = document.getElementById("preview");
            preview.className = "animate__animated animate__fadeIn";
            preview.src = newSrc;
            setTimeout(function(){
                preview.className = "";
            },500)
        }
    }
}