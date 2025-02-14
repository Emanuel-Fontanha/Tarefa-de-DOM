function criarCard() {

    let feedback_div = document.createElement("div")
    feedback_div.classList.add("feedback_div")

    let feedback_p = document.createElement("p")
    let nome_p = document.createElement("p")
    
    feedback_p.innerText = document.querySelector("#feedback").value
    nome_p.innerText = document.querySelector("#nome").value
    
    feedback_p.classList.add("feedback_p")
    nome_p.classList.add("feedback_nome")

    feedback_div.append(nome_p)
    feedback_div.append(feedback_p)

    document.querySelector("#opinions").append(feedback_div)

    document.querySelector("#feedback").value = ""
    document.querySelector("#nome").value = ""
}

let button = document.querySelector("#btn_fb")
button.addEventListener("click", ()=> {
    
    let text = document.querySelector("#feedback").value
    let nome = document.querySelector("#nome").value

    if (!(nome == "" || text == "")) {
        criarCard()
    } else {
        alert("Preencha todos os campos para deixar um feedback!")
    }
})