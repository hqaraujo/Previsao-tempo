let chave = "60b5400df52ec6135752c35405f55679"

function colocarTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)+ "ºC"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML ="Umidade: " + dados.main.humidity
}

async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric")
        .then(resposta => resposta.json())
    colocarTela(dados)
    

}

function cliqueBotao() {
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}