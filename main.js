const sobre = document.getElementById("sobre");
const dev = document.querySelector(".Dev");
const grass = document.querySelector(".Grass"),
rocket = document.querySelector(".Rocket");
let About = document.querySelector(".content-right");
let Certificados = document.querySelector(".content-certify");
let ContentAbout = document.querySelector('.content-about');
let close = document.getElementById("close"),
galery = document.querySelector(".Dev .galery-card"),
WorkGalery = document.querySelector("#Work .galery")
const inputs = document.querySelector(".color-Switch")
const darkLight = document.querySelector(".dark-light")
const OptionMenu = document.querySelector(".options-menu");
const Langs = document.querySelector(".lang");
const options = document.querySelector(".options");


function Close(){
    ContentAbout.classList.remove("closeAbout");
    About.classList.remove("ShowAbout");
}

function ShowSobre(){
    ContentAbout.classList.add("closeAbout");
    About.classList.add("ShowAbout");
}    

function ShowCerti(){
    ContentAbout.classList.add("closeAbout");
    Certificados.classList.add("ShowCerti")    
}


function VoltaCerti(){
    Certificados.classList.remove("ShowCerti")    
    ContentAbout.classList.remove("closeAbout");  
}

function ShowRockt(){
    rocket.classList.add("ShowRock");
    Certificados.classList.remove("ShowCerti")    
}

function CloseCerti(){
    grass.classList.remove("ShowGrass");
    rocket.classList.remove("ShowRock");
    dev.classList.remove("ShowDev");
    Certificados.classList.add("ShowCerti");
}

function ShowGrass(){
    grass.classList.add("ShowGrass");
    Certificados.classList.remove("ShowCerti");  
}

function ShowDev(){
    dev.classList.add("ShowDev");
    Certificados.classList.remove("ShowCerti");    
}

window.addEventListener("scroll", ()=> {
    let btn = document.querySelector(".btn-top")
    if(window.scrollY > 205){
     btn.classList.add("ShowBtn")
    }else {
     btn.classList.remove("ShowBtn")
    }

    let header = document.querySelector("#header")

    if(window.scrollY > 105){
        header.style.background = "#0F0E0E"
        header.style.transform = "translateY(-2px)"
        header.style.transition = "all .35s ease"
    }else {
        header.style.background = "transparent"
        header.style.transform = "translateY(0px)"
    }
})

window.addEventListener("load", () => {
    let loading = document.querySelector(".bg-loading")

    setInterval(() => {
        loading.style.display = "none"
    }, 5000)
})

function OpenSettings(){
    OptionMenu.classList.toggle("ShowSettings");
}

function OpenSettings2(){
    OptionMenu.classList.toggle("ShowSettingsAll")
}

const ShowPut = () => {
    inputs.classList.add("ShowInputs")
    options.classList.add("HiddenOpt");
    OptionMenu.classList.add("ShowSettingsAll")
}

const HiddenPut = () => {
    inputs.classList.remove("ShowInputs")
    options.classList.remove("HiddenOpt");

    OptionMenu.classList.remove("ShowSettingsAll")
}

const openMenuMobile = () => {
    let header = document.querySelector("header ul")
    header.classList.toggle("ShowMenuMobile")
}