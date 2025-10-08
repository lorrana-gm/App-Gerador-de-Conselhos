const idDoConselho = document.querySelector('.titulo');
const descricaoDoConselho = document.querySelector('.descricao')

const botao = document.getElementById('botao')
botao.addEventListener('click', pegarConselhos)

async function pegarConselhos() {
    try {
        const resposta = await fetch('https://api.adviceslip.com/advice')
        const conteudoDoConselho = await resposta.json()
        idDoConselho.innerText = "Advice #" + conteudoDoConselho.slip.id
        descricaoDoConselho.innerText = `"${conteudoDoConselho.slip.advice}"`
    } catch (err) {
        console.log("Ocorreu um erro ao tentar buscar as informações da API", err);
    }
}

pegarConselhos()







