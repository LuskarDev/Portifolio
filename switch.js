
function ChangeSection(){
    let checkedbtn = document.querySelectorAll("#checked")
    let SquareColor = document.querySelectorAll("#background-Color")

    let section = document.querySelectorAll("section")

    checkedbtn[0].addEventListener("click", e => {
        e.preventDefault();
        newColor = document.querySelector("#inicio").value;
        SquareColor[0].style.background = newColor;
        if(newColor !== ''){
            checkedbtn[0].classList.toggle("active")
            section[0].style.background = newColor
        }
    })
    
    checkedbtn[1].addEventListener("click", e => {
        e.preventDefault();
        newColor = document.querySelector("#sobre").value;
        SquareColor[1].style.background = newColor;
        if(newColor !== ''){
            checkedbtn[1].classList.toggle("active");
            section[1].style.background = newColor;
        }
    })
    
    checkedbtn[2].addEventListener("click", e => {
        e.preventDefault();
        newColor = document.querySelector("#trabalho").value;
        SquareColor[2].style.background = newColor;
        if(newColor !== ''){
            checkedbtn[2].classList.toggle("active");
            section[2].style.background = newColor;
        }
    })
    
    checkedbtn[3].addEventListener("click", e => {
        e.preventDefault();
        newColor = document.querySelector("#contatos").value;
        SquareColor[3].style.background = newColor;
        if(newColor !== ''){
            checkedbtn[3].classList.toggle("active");
            section[3].style.background = newColor;
        }
    })
}
ChangeSection()

