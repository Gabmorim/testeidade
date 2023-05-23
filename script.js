function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var nasc = document.querySelector('input#ano')
    var res = document.querySelector('div#res')

    if (nasc.value.length == 0 || nasc.value > ano) {
        alert('[ERRO] Verifique os dados indicados e tente novamente')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) { // aqui, dentro do parametro eu indico o name que usei no meu html para clasificar o input
            var genero = 'um Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'menino-crianca.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'menino-jovem.png')
            } else if (idade <50) {
                // adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (sexo[1].checked) {
            var genero = 'uma Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'menina-crianca.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'menina-jovem.png')
            } else if (idade <50) {
                // adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}