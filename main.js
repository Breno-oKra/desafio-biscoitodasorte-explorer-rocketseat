const messenges = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Nunca perca a esperança de que dias melhores virão! ",
    " Comece o dia sempre com esta certeza: tudo passa!",
    "Há sempre um novo dia e uma nova chance se você se permitir.  ",
    "A felicidade não é apenas uma emoção individual, mas pode ser compartilhada com outras pessoas por pequenos atos de amor e bondade.",
    "Ame a pessoa que você vê no espelho todos os dias, porque ela é a única que estará sempre lá por você em todos os momentos da vida.",
]

const page1 = document.querySelector(".page1")
const page2 = document.querySelector(".page2")

function togglePage() {
    page1.classList.toggle("hide")
    page2.classList.toggle("hide")
}
document.querySelector(".btn-image").addEventListener("click",() => {
    const randomMenssenges = Math.round(Math.random() * (messenges.length - 1))
    togglePage()
    document.querySelector("#sorte").innerText = `${messenges[randomMenssenges]}`
})

document.querySelector(".openAnother").addEventListener('click',() => togglePage())