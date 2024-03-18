concatInvert = (textoEntrada01,textoEntrada02)=> {
    let textoConcatenado = textoEntrada01 + textoEntrada02
    return textoConcatenado.split("").reverse().join("")
}
let textoEntrada01 = "Mati"
let textoEntrada02 = "Thiago"
console.clear()
console.log(concatInvert(textoEntrada01,textoEntrada02))
