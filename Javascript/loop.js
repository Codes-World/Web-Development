function findTable(){
    var num = document.getElementById("num").value;
    var result = document.getElementById("result");

    for(var i = 1; i <= 10; i++){
        result.innerHTML += "<h1>"+num+"*"+i+"="+num*i+"</h1>";
    }
}

var subjects = ["math", "science", "english", "computer", "social"];
for(var i = 0; i < subjects.length; i++){
    document.writeln(subjects[i]);
}