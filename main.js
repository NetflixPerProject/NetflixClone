let users =  JSON.parse(localStorage.getItem("users")) || []

let singUp = () => {
    let userName = $("#userName").val()
    let password = $("#password").val() 
       let email = $("#email").val()
       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
       
      if(passwordRegex.test(password)){
        users.push({userName,password,email})
          localStorage.setItem("users",JSON.stringify(users))
       alert(`welcome ${userName}`)
       window.location.href = "http://127.0.0.1:5500/pages/profil.html"
      }
      else {
        alert("password not valide")
    }
}


let singIn = () => {
   let password = $("#pw").val()
    let email = $("#emailOf").val()
    let user = users.filter(e=>e.email === email && e.password === password)
    if(user.length) {
        alert(`welcome ${user[0].userName}`)
        window.location.href = "http://127.0.0.1:5500/pages/profil.html"
    }
    else {
        alert("worng password")
    }

}



