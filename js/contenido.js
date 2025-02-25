function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML += '<p>' + texto + '</p>';
}

function nuevoTitulo() {
    var contenido = document.getElementById('contenido');
    var tituloTexto = document.getElementById("tituloTexto").value;
    contenido.innerHTML += '<h1 style="font-size: 10px; margin-top: 5px;">' + tituloTexto + '</h1>';
}

function nuevoEnlace() {
    var contenido = document.getElementById('contenido');
    var enlaceURL = document.getElementById("enlaceURL").value;
    var enlaceTexto = document.getElementById("enlaceTexto").value;
    contenido.innerHTML += '<a href="' + enlaceURL + '" target="_blank">' + enlaceTexto + '</a><br>';
}

function imprimir() {
    var divContents = document.getElementById("contenido").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
    a.document.write('<body> <h1>Resultado</h1> <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

document.getElementById('imagen').onchange = function(evt) {
    var entradaArchivo = evt.target,
        archivos = entradaArchivo.files;
    if (FileReader && archivos && archivos.length) {
        var imagen = new FileReader();
        imagen.onload = function() {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.setAttribute('src', imagen.result);
            etiquetaImg.setAttribute('width', '200px');
            etiquetaImg.setAttribute('height', '180px');
            var contenido = document.getElementById('contenido');
            contenido.appendChild(etiquetaImg);
        }
        imagen.readAsDataURL(archivos[0]);
    }
};