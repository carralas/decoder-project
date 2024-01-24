view = {
    inputText: document.querySelector('.input__box'),
    outputText: document.querySelector('.output__filled__box'),
    encodeButton: document.querySelector('.encode'),
    decodeButton: document.querySelector('.decode'),
    copyButton: document.querySelector('.copy'),
    outputBoxEmpty: document.querySelector('.output__empty'),
    outputBoxFilled: document.querySelector('.output__filled')
}

value = {
    inputFirstClick: false
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
    view.outputBoxEmpty.style.display = 'none'
    view.outputBoxFilled.style.display = 'flex'
    view.outputText.innerHTML = output.toLowerCase()
}

function inputCleaner() {
    console.log('clicou')
    if (value.inputFirstClick == false) {
        console.log('limpou')
        view.inputText.innerHTML = ''
        value.inputFirstClick = true
    }
}

function copyTranslation() {
    navigator.clipboard.writeText(view.outputText.innerHTML)
}

function main() {
    view.encodeButton.addEventListener('click', () => translator(view.inputText.value, code.encrypt))
    view.decodeButton.addEventListener('click', () => translator(view.inputText.value, code.decrypt))
    view.inputText.addEventListener('click', () => inputCleaner())
    view.copyButton.addEventListener('click', () => copyTranslation())
}

main();