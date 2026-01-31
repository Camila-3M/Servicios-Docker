function consultarBackend() {
    fetch("http://localhost:5000")
        .then(response => response.json())
        .then(data => {
            document.getElementById("estado").textContent = data.mensaje;
            document.getElementById("fecha").textContent = data.fecha;
            document.getElementById("sistema").textContent = data.sistema;
        })
        .catch(error => {
            document.getElementById("estado").textContent = "Error al conectar con el backend";
            document.getElementById("fecha").textContent = "";
            document.getElementById("sistema").textContent = "";
        });
}

// Ejecutar automáticamente al cargar la página
consultarBackend();