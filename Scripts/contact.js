function validateDetails(){
    const name = form.name.value;
    const validName=/^[a-zA-Z]{4,}$/;
    const email = form.email.value;
    const validemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!validName.test(name)){
        alert("Please enter name with atleast 4 letters...");
        return false;
    }
    if(!validemail.test(email)){
        alert("Please enter a valid email address...");
        return false;
    }
    
    

}