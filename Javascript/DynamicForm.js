function signup(event) {
    event.preventDefault();
    // var firstname = document.getElementById("firstname");
    // var lastname = document.getElementById("lastname");
    // var email = document.getElementById("email");
    // var password = document.getElementById("password");
    // console.log(firstname.value, lastname.value, email.value, password.value);

    var form = document.forms.register;
    // var firstname = form.elements.firstname;
    // var lastname = form.elements.lastname;
    // var email = form.elements.email;
    // var password = form.elements.password;
    // console.log(
    //     firstname.value,
    //     lastname.value,
    //     email.value,
    //     password.value
    // )

    var user = {
        firstname: form.elements.firstname.value,
        lastname: form.elements.lastname.value,
        email: form.elements.email.value,
        password: form.elements.password.value
    }
    
    console.log(user);
}