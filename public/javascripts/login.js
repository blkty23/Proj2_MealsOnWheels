// This function verifies if the Username & Password are correct
function login(form){
    if(ty.Email.value == "Gtjames1867@gmail.com" && form.Password.value == "Koolkid86"){
        window.open('/Cooks')
    }
    else{
        alert("You have entered an invalid Username and Password")
    }
}
console.log(ty.Email.value);