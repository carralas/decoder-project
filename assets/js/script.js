view = {
    inputText: document.querySelector('.input__box'),
    outputText: document.querySelector('.output__box'),
    encodeButton: document.querySelector('.encode'),
    decodeButton: document.querySelector('.decode')
}

code = {
    encrypt: {'a': 'AI',
              'e': 'ENTER',
              'i': 'IMES',
              'o': 'OBER',
              'u': 'UFAT'},
    decrypt: {'ai': 'A',
              'enter': 'E',
              'imes': 'I',
              'ober': 'O',
              'ufat': 'U'}
}

function translator(input, model) {
    let output = input
    /* o looping é feito por chave */
    /* isso faz com que só ocorra cinco vezes */
    /* evita que a etapa de encriptação passe em uma posição com caracter recém criado */
    /* facilita a etapa de desencriptação */
    Object.keys(model).forEach(key => output = output.replaceAll(key, model[key]))
    alert(output.toLowerCase())
}

function main() {
    view.encodeButton.addEventListener('click', () => translator(view.inputText.value, code.encrypt))
    view.decodeButton.addEventListener('click', () => translator(view.inputText.value, code.decrypt))
}

main();