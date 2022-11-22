const Jobs = [
    {
        img: "https://raw.githubusercontent.com/LuskarDev/RocketNews/main/img/rocketNews.png",
        link: "https://luskardev.github.io/RocketNews/",
        title: 'Rocket News',
        html: "assets/html.png",
        css:"assets/css-3.png" ,
        javascript: "assets/js.png" ,
        descript: "Pagina feita no estilo One page, para receber novidades no email layout por Rocketseat"
    },
    {
        img: "https://raw.githubusercontent.com/LuskarDev/RocketShoes/main/assets/rocketShoes.png",
        link: "https://luskardev.github.io/RocketShoes/",
        title: "Rocket Shoes",
        html: "assets/html.png",
        css:"assets/css-3.png" ,
        javascript: "assets/js.png",
        descript: "Loja de Sapatos feito responsivo para todos dispositivos"
    },
    {
        img: "https://raw.githubusercontent.com/LuskarDev/Rocket_NFT/main/assets/assets/rocketnfts.png",
        link: "https://luskardev.github.io/Rocket_NFT/",
        title: "Rocket NFT",
        html: "assets/html.png",
        css:"assets/css-3.png" ,
        javascript: "assets/js.png",
        descript: "Pagina de NFT para compra e vendas, layout por Rocketseat"
    },
    {
        img: "https://raw.githubusercontent.com/LuskarDev/SwitcherTheme/main/favicon/Switcher.png",
        link: "https://luskardev.github.io/SwitcherTheme/",
        title: "Switcher Theme",
        html: "assets/html.png",
        css:"assets/css-3.png" ,
        javascript: "assets/js.png",
        descript: "Pagina de Troca de Modo de leitura da Pagina"
    },
    {
        img: "https://raw.githubusercontent.com/LuskarDev/RocketCoffee/main/assets/rocketcoffe.png",
        link: "https://luskardev.github.io/RocketCoffee/",
        title: "Rocket coffee",
        html: "assets/html.png",
        css:"assets/css-3.png" ,
        javascript: "assets/js.png",
        descript: "Pagina de uma cafeteria, layout por Rockeatseat"
    },
    {
        img: "https://raw.githubusercontent.com/LuskarDev/Login_Form/main/capa-form.png",
        link: "https://luskardev.github.io/Login_Form/",
        title: "Login Form",
        html: "assets/html.png",
        css:"assets/css-3.png" ,
        javascript: "assets/js.png",
        descript: "Pagina de login, criação de conta e recuperação de conta"
    }
]

const CertGrass = [
    {img: "assets/certificadoGrass.jpeg", title:"Certificado"},
    {img: "assets/certificadoGrass2.jpeg", title:"Certificado"},
    {img: "assets/certificadoGrass3.jpeg", title:"Certificado"}
]

const CertDev = [
    {img :"assets/certificadoHTML.png",title: "Certificado"},
    {img :"assets/certificadoCss.png",title: "Certificado"},
    {img :"assets/certificadoJavascript.png",title: "Certificado"},
    {img :"assets/certificadoProgramacao.png",title: "Certificado"},
    {img :"assets/certificadoAlgoritimo.png",title: "Certificado"},
    {img :"assets/certificadoNodejs.png", title: "Certificado"}
]

const CertRocket = [
    {img : "assets/certificado1.jpeg", title : "Certificado"},
    {img : "assets/certificado2.jpeg", title : "Certificado"},
    {img :"assets/certificado3.jpeg",  title : "Certificado"}
]

const Rocket = document.querySelector(".Rocket .galery-card");
const Grass = document.querySelector(".Grass .galery-card");
const Dev = document.querySelector(".Dev .galery-card");

function Cards(data,container){

    let card = " ";
    
    data.forEach(element => {
        card += `
        <div class="card">
            <img src="${element.img}" alt="${element.title}">  
        </div>
        `
    })

    container.innerHTML = card;
}

const Projects = (Project) => {
    let projects = " ";

    let galery = document.querySelector(".galery")
    Project.forEach(e => {
        projects += `
        <div class="j-work">
        <a href="${e.link}" target="_blank">
            <img src="${e.img}" alt="${e.title}">
        </a>
        <div class="Description-work">
            <h2>${e.title}</h2>
            <p>${e.descript}</p>
        </div>
        <div class="tech">
            <img src="${e.html}" alt="html">
            <img src="${e.css}" alt="Css">
            <img src="${e.javascript}" alt="javascript">
        </div>
    </div>
        `
    });
    galery.innerHTML = projects;
}
Projects(Jobs)
Cards(CertRocket,Rocket)
Cards(CertGrass,Grass)
Cards(CertDev,Dev)

