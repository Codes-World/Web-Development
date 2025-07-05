// var btn = document.getElementById("btn");
// var btn = document.getElementsByClassName("btn");
// var len = btn.length;

// for(var i = 0; i < len; i++){
//     btn[i].style.color = "red";
//     btn[i].style.border = "none";
// }

//tag selector
// var btn = document.getElementsByTagName("button");
// var len = btn.length;

// for(var i = 0; i < len; i++){
//     btn[i].style.color = "blue";
//     btn[i].style.border = "none";
// }

var btn = document.getElementsByClassName("btn");
for(var i = 0; i < btn.length; i++){
    btn[i].onclick = function(){
        this.style.color  = "red";
    }
}
