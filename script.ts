// get reference to the from and display area

const from = document.getElementById('resume-from') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// handle form submission 

from.addEventListener('submit' , (event: Event) => {
    event.preventDefault(); // prevent page reload


    //collect input value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education ') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    
    // generate the resume content dynamically

    const resumeHTML = `
    
     <h2><b>Editableresume</b></h2>
     <h3>personal Information</h3>
     <p><b>Name:</b><span contenteditable="true">$(name)</span></p>
     <p><b>Email:</b><span contenteditable="true">$(email)</span></p>
     <p><b>Phone:</b><span contenteditable="true">$(phone)</span></p>

     <h3>Education</h3>
     <p contenteditable="true">$(education)</p>

     <h3>experience</h3>
     <p contenteditable="true">$(experience)</p>

     <h3>skills</h3>
    <p contenteditable="true">$(skills)</p>;
    
    `;
      
    
     
     
    
 

    // dispaly the generate resume

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('the resume display element is missing.');
    }


})
