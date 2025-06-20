function login(event){
    event.preventDefault();
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var usernameView = document.getElementById("username-view");
    usernameView.innerHTML = username.value;
}