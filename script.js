let buttonChangeMessage = document.querySelector("#changeMessage")
let cookieButton = document.querySelector("#cookieButton")
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2") 
let arrayLuckyPhrase = document.querySelector(".luckyPhrase")

function stopButton(e){
    e.preventDefault()
}

function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

arrayLuckyPhrase = []
arrayLuckyPhrase[0] = "O sucesso chegará quando você persistir com determinação e encarar desafios como oportunidades de crescimento."
arrayLuckyPhrase[1] = "A vida é uma jornada, não um destino."
arrayLuckyPhrase[2] = "Grandes realizações exigem tempo e paciência."
arrayLuckyPhrase[3] = "Acredite no impossível e faça acontecer."
arrayLuckyPhrase[4] = "O maior tesouro é a sabedoria."
arrayLuckyPhrase[5] = "O sucesso está sempre à frente dos obstáculos."
arrayLuckyPhrase[6] = "O amor é a resposta para todas as perguntas."
arrayLuckyPhrase[7] = "Seja a mudança que você deseja ver no mundo."
arrayLuckyPhrase[8] = "A sorte favorece a mente preparada."
arrayLuckyPhrase[9] = "Um sorriso sincero abre portas e corações."
arrayLuckyPhrase[10] = "A melhor maneira de prever o futuro é criá-lo."


function changePhrases(){
    if(arrayLuckyPhrase !== screen2.querySelector("p")){
        const textoAleatorio = Math.floor(Math.random() * arrayLuckyPhrase.length);
        screen2.querySelector("p").textContent = arrayLuckyPhrase[textoAleatorio] 
    }
}

buttonChangeMessage.addEventListener("click", stopButton)
cookieButton.addEventListener("click", stopButton) 
cookieButton.addEventListener("click", toggleScreen)
buttonChangeMessage.addEventListener("click", changePhrases)