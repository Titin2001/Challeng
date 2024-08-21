var inputMessage = document.getElementById("inputMessage");
var outputMessage = document.getElementById("outputMessage");
var encryptButton = document.getElementById("encryptButton");
var decryptButton = document.getElementById("decryptButton");
var copyButton = document.getElementById("copyButton");
var errorMessage = document.createElement("p");
errorMessage.style.color = "red";
inputMessage.parentNode.insertBefore(errorMessage, inputMessage.nextSibling);

encryptButton.addEventListener("click", encryptMessage);
decryptButton.addEventListener("click", decryptMessage);
copyButton.addEventListener("click", copyToClipboard);

function validarEntrada(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function encryptMessage() {
    var entrada = inputMessage.value.trim();
    if (!validarEntrada(entrada)) {
        mostrarError("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    ocultarError();
    console.log("Texto antes de encriptar:", entrada);
    outputMessage.value = encriptarTexto(entrada);
    console.log("Texto encriptado:", outputMessage.value);
    inputMessage.value = "";
}

function decryptMessage() {
    var entrada = outputMessage.value.trim();
    if (!validarEntrada(entrada)) {
        mostrarError("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    ocultarError();
    console.log("Texto antes de desencriptar:", entrada);
    outputMessage.value = desencriptarTexto(entrada);
    console.log("Texto desencriptado:", outputMessage.value);
}

function mostrarError(mensaje) {
    errorMessage.textContent = mensaje;
}

function ocultarError() {
    errorMessage.textContent = "";
}

function encriptarTexto(mensaje) {
    var textoFinal = "";
    for (var i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case "a":
                textoFinal += "ai";
                break;
            case "e":
                textoFinal += "enter";
                break;
            case "i":
                textoFinal += "imes";
                break;
            case "o":
                textoFinal += "ober";
                break;
            case "u":
                textoFinal += "ufat";
                break;
            default:
                textoFinal += mensaje[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    return mensaje
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e")
        .replace(/ai/g, "a");
}

function copyToClipboard() {
    var contenido = outputMessage.value;
    if (contenido) {
        navigator.clipboard.writeText(contenido).then(function() {
            alert("Texto copiado al portapapeles.");
        }).catch(function(error) {
            console.error("Error al copiar el texto: ", error);
        });
    } else {
        alert("No hay texto para copiar.");
    }
}
