function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!!
        img.src = 'ftmanha.png'
        document.body.style.background = '#fdab00'
    } else if (hora >= 12 && hora <18) {
        // BOA TARDE!!
        img.src = 'fttarde.png'
        document.body.style.background = '#5c2908'
    } else {
        // BOA NOITE!!
        img.src = 'ftnoite.png'
        document.body.style.background = '#2e343b'
    }
}
