function buscarPersonaje() {
    // Obtener el número del input
    var numero = document.getElementById("numeroPersonaje").value;

    var url = `https://swapi.dev/api/people/${numero}/`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            mostrarInformacion(data);
        })
        .catch(error => console.error('Error al obtener datos:', error));
}


function mostrarInformacion(data) {
    var informacionDiv = document.getElementById("informacionPersonaje");

    informacionDiv.innerHTML = '';

    var nombreElement = document.createElement("p");
    nombreElement.textContent = `Nombre: ${data.name}`;

    var alturaElement = document.createElement("p");
    alturaElement.textContent = `Altura: ${data.height} cm`;

    var masaElement = document.createElement("p");
    masaElement.textContent = `Masa: ${data.mass} kg`;

    var nacimientoElement = document.createElement("p");
    nacimientoElement.textContent = `Año de Nacimiento: ${data.birth_year}`;

    var generoElement = document.createElement("p");
    generoElement.textContent = `Género: ${data.gender}`;

    var colorOjosElement = document.createElement("p");
    colorOjosElement.textContent = `Color de Ojos: ${data.eye_color}`;

    var colorCabelloElement = document.createElement("p");
    colorCabelloElement.textContent = `Color de Cabello: ${data.hair_color}`;

    // Agregar los elementos al div
    informacionDiv.appendChild(nombreElement);
    informacionDiv.appendChild(alturaElement);
    informacionDiv.appendChild(masaElement);
    informacionDiv.appendChild(nacimientoElement);
    informacionDiv.appendChild(generoElement);
    informacionDiv.appendChild(colorOjosElement);
    informacionDiv.appendChild(colorCabelloElement);
}