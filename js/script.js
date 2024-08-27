function encriptar() {
    let texto = document.getElementById("inputText").value;
    if (validarTexto(texto)) {
        let textoEncriptado = texto.replace(/e/g, "enter")
                                   .replace(/i/g, "imes")
                                   .replace(/a/g, "ai")
                                   .replace(/o/g, "ober")
                                   .replace(/u/g, "ufat");
        document.getElementById("outputText").value = textoEncriptado;
    } else {
        alert("Solo se permiten letras minúsculas y sin acentos.");
    }
}

function desencriptar() {
    let textoEncriptado = document.getElementById("inputText").value;
    let textoDesencriptado = textoEncriptado.replace(/enter/g, "e")
                                            .replace(/imes/g, "i")
                                            .replace(/ai/g, "a")
                                            .replace(/ober/g, "o")
                                            .replace(/ufat/g, "u");
    document.getElementById("outputText").value = textoDesencriptado;
}

function copiar() {
    let textoEncriptado = document.getElementById("outputText");
    textoEncriptado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
}

function validarTexto(texto) {
    let regex = /^[a-z\s]+$/;
    return regex.test(texto);
}
