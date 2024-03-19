const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// let matriz_code = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.valeu = textoEncriptado;
    textArea.value = "";
}

function encriptar (stringEncriptada){
    let matriz_code = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i= 0; i < matriz_code.length; i++) {
        if(stringEncriptada.includes(matriz_code[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matriz_code[i][0], matriz_code[i][1]);
        }

    }
return stringEncriptada;
}    

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.valeu = textoDesencriptado;
    textArea.value = "";
}

function desencriptar (stringDesencriptada){
    let matriz_code = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i= 0; i < matriz_code.length; i++) {
        if(stringDesencriptada.includes(matriz_code[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matriz_code[i][1], matriz_code[i][0]);
        }

}

return stringDesencriptada;

}    
