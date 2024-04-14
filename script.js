const contactForm=document.getElementById('contact-form'),
contactMessage=document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    //servicesId- templateId - #form - publicKey
    emailjs.sendForm('abhiji4221@gmail.com','template_j13pwu2','#contact-form','_WgP77NBzvL_at6IT')
    .then(()=>{
      //Show sent message
      contactMessage.textContent='Message sent succesfully'
      setTimeout(() =>{
        contactMessage.textContent=''
      },5000)
      //reset input
      contactForm.reset()
    },()=>{
        //Show error message
        contactMessage.textContent='Message not sent (Service error)'
    })
}
contactForm.addEventListener('submit' , sendEmail)