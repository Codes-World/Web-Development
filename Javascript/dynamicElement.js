// function create(){
//     var h1 = document.createElement("h1");
//     h1.innerHTML = "CodesWorld";

//     //how to set attribute in element
//     h1.style.color = "red";
//     h1.id = "m-h1";
//     h1.className = "c-h1";
//     // var body = document.body;
//     // body.append(h1);
//     var heading = document.getElementById("heading");
//     heading.append(h1);
// }

function elementCreator(event){
    event.preventDefault();
    var form = document.forms['element-form'];
    var elementName = form.elements.element.value;
    var text = form.elements.text.value;
    var tag = document.createElement(elementName);
    tag.innerHTML = text;
    var result = document.getElementById("result");
    result.append(tag);
}