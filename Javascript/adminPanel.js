function toggle() {
    var sideNav = document.getElementById("sidenav");
    var section = document.getElementById("section");
    var topnav = document.getElementById("topnav");
    var width = sideNav.style.width;

    if(width == '0px'){
        sideNav.style.width = '250px';
        sideNav.style.transition = '0.3s';
        topnav.style.left = "250px";
        topnav.style.width = "100%";
        topnav.style.transition = "0.3s";
        section.style.marginLeft = "250px";
        section.style.transition = "0.3s"
        section.style.width = "100%";
    }
    else{
        sideNav.style.width = '0px';
        sideNav.style.transition = '0.3s';
        topnav.style.left = "0px";
        topnav.style.width = "100%";
        topnav.style.transition = "0.3s";
        section.style.marginLeft = "0px";
        section.style.width = "100%";
        section.style.transition = "0.3s";
    }
}

function tab(activeBtn, inActiveBtn, activeId, inActiveId){
    var active = document.getElementById(activeId);
    var inActive = document.getElementById(inActiveId);
    var activeButton = document.getElementById(activeBtn);
    var inActiveButton = document.getElementById(inActiveBtn);

    activeButton.style.backgroundColor = "darkturquoise";
    activeButton.style.color = "white";

    inActiveButton.style.background = "white";
    inActiveButton.style.color = "black";

    active.style.display = "block";
    inActive.style.display = "none";
}

function signup(event) {
    event.preventDefault();
    var form = document.forms.signupForm;
    var user = {};
    var fullname = form.elements.fullname;
    var fullnameMessage = document.getElementById("fullname-message");
    var email = form.elements.email;
    var emailMessage = document.getElementById("email-message");
    var password = form.elements.password;
    var passwordMessage = document.getElementById("password-message");

    if(fullname.value.trim().length == 0){
        fullname.style.borderColor = "red";
        fullnameMessage.style.display = "block";
        fullnameMessage.innerHTML = "Fullname is required!";
    }
    else if(email.value.trim().length == 0){
        email.style.borderColor = "red";
        emailMessage.style.display = "block";
        emailMessage.innerHTML = "Email field is required!";
    }
    else if(password.value.trim().length == 0){
        password.style.borderColor = "red";
        passwordMessage.style.display = "block";
        passwordMessage.innerHTML = "Password field is required!"
    }
    else if(password.value.length < 8){
        password.style.borderColor = "red";
        passwordMessage.style.display = "block";
        passwordMessage.innerHTML = "Minimum character length is 8!"
        passwordMessage.style.color = "red";
    }
    else{
        user.fullname = fullname.value.trim();
        user.email = email.value.trim();
        user.password = password.value.trim();
        console.log(user);
        Swal.fire({
            title:'Register Successfully',
            icon:'success'
        })
    }
}

function inputValidation(input, messageId){
    var message = document.getElementById(messageId);
    input.style.borderColor = "#ccc";
    message.style.color = "inherit";
    message.innerHTML = "";
    message.style.display = "none";
}

function togglePassword(idOfInput, iconId){
    var password = document.getElementById(idOfInput);
    var toggleIcon = document.getElementById(iconId);
    if(password.type == "password"){
        password.type = "text";
        toggleIcon.className = "fa fa-eye-slash";
    }
    else{
        password.type = "password";
        toggleIcon.className = "fa fa-eye";
    }
}

function login(event) {
    event.preventDefault();
    var user = {};
    var form = document.forms.loginForm;
    var email = form.elements.email;
    var emailMessage = document.getElementById("login-email-message");
    var password = form.elements.password;
    var passwordMessage = document.getElementById("login-password-message");
    if(email.value.trim().length == 0){
        email.style.borderColor = "red";
        emailMessage.style.display = "block";
        emailMessage.style.color = "red";
        emailMessage.innerHTML = "Email field is required!";      
    }
    else if(password.value.trim().length == 0){
        password.style.borderColor = "red";
        passwordMessage.style.display = "block";
        passwordMessage.style.color = "red";
        passwordMessage.innerHTML = "Password field is required!";
    }
    else{
        user.email = email.value.trim();
        user.password = password.value.trim();
        console.log(user);
        Swal.fire({
            title:'Login Successfully',
            icon:'success'
        });
    }
}