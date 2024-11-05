// get reference to the from and display area
var from = document.getElementById('resume-from');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission 
from.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    //collect input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education ').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHTML = "\n    \n     <h2><b>Editableresume</b></h2>\n     <h3>personal Information</h3>\n     <p><b>Name:</b><span contenteditable=\"true\">$(name)</span></p>\n     <p><b>Email:</b><span contenteditable=\"true\">$(email)</span></p>\n     <p><b>Phone:</b><span contenteditable=\"true\">$(phone)</span></p>\n\n     <h3>Education</h3>\n     <p contenteditable=\"true\">$(education)</p>\n\n     <h3>experience</h3>\n     <p contenteditable=\"true\">$(experience)</p>\n\n     <h3>skills</h3>\n    <p contenteditable=\"true\">$(skills)</p>;\n    \n    ";
    // dispaly the generate resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing.');
    }
});
