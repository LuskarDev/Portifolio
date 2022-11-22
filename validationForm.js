let Form = document.querySelector(".form")

Form.addEventListener("submit", e => {
    e.preventDefault();
    CheckInput();
})

function CheckInput(){
    let name = document.getElementById("name");
    let nameValue = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone");
    let phoneValue = document.getElementById("phone").value.trim();
    let email = document.getElementById("email");
    let emailValue = document.getElementById("email").value.trim();
    let subjet = document.getElementById("subject");
    let subjetValue = document.getElementById("subject").value.trim();

    if(nameValue === ""){
        ErrorBorder(name)
    }else {
        ValiBorder(name)
    }

    if(phoneValue === ""){
        ErrorBorder(phone)
    }else {
        ValiBorder(phone)
    }

    if(emailValue === ""){
        ErrorBorder(email)
    }else {
        ValiBorder(email)
    }

    if(subjetValue === ""){
        ErrorBorder(subjet)
    }else {
        ValiBorder(subjet)
    }
}

function ErrorBorder(input){
    input.classList.add("Error")
}

function ValiBorder(input){
    input.classList.remove("Error")
}