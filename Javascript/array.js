//this is array
//var arr = ["aman", 123, 'a', 34.34];

//this is object
// var student = {
//     name: "Aman Kumar Soni",
//     course: "MCA",
//     roll: 32,
//     grade: 'A'
// }

// console.log(student.name);

function signup(event){
    event.preventDefault();
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    // console.log(event.target[2].value);
    // console.log(event.target[3].value);
    // console.log(event.target[4].value);
    var user = {
        firstname: event.target[0].value,
        lastname: event.target[1].value,
        mobile: event.target[2].value,
        password: event.target[3].value,
        email: event.target[4].value
    }

    console.log(user);
}