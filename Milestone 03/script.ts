// Get References to the form and display area 

const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Handle form submission

form.addEventListener('submit', (event: Event) => {
    event.preventDefault()   // prevent  page reload 

    //Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const city = (document.getElementById('city') as HTMLInputElement).value
    const profilepicture = (document.getElementById('profile-picture') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    const languages = (document.getElementById('languages') as HTMLInputElement).value

    // Generate the Resume content dynamically

    const resumeHTML = `
    <h2><b>Resume</b></h2>


    <h3>Peronal Information:</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone No:</b>${phone}</p>
    <p><b>City:</b>${city}</p>

    <h3>Education:</h3>
    <p>${education}</p>

     <h3>Experience:</h3>
    <p>${experience}</p>

     <h3>Skills:</h3>
    <p>${skills}</p>

     <h3>Languages:</h3>
    <p>${languages}</p>
    `;

    //Display the generated resume

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('Resume Display Element is missing')
    }
});