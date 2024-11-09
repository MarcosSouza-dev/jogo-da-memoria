const emojis = [
    "😎", "😎", "🫡", "🫡", "🤬", "🤬", "👽", "👽",
    "✌️", "✌️", "👏", "👏", "🎈", "🎈", "💎", "💎"
];

let openCards = [];

// Embaralhar os emojis
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));

// Criar os elementos de cada emoji embaralhado
for (let i = 0; i < shuffleEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    // Adiciona a classe "boxOpen" e armazena a carta se menos de duas estiverem abertas
    if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    // Chama checkMatch quando houver duas cartas abertas
    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }

    console.log(openCards)
}

function checkMatch() {
    // Verifica se as cartas abertas têm o mesmo conteúdo
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        // Se forem iguais, mantemos abertas com a classe "boxMatch"
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        openCards = [];
    } else {
        // Se não forem iguais, removemos a classe "boxOpen" para fechá-las
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        openCards = [];
    }

    if (document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você venceu!")
    }
}
