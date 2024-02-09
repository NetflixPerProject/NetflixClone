let isValide=(password)=>{
 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (passwordRegex.test(password)){
        return"password valide"
    }
    else{
             alert("password not valide")
    }
    
}

