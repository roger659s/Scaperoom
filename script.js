function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => section.classList.remove('active-section'));

    // Quitar la clase active de todos los botones
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active-section');

    // Añadir clase active al botón clickeado
    event.currentTarget.classList.add('active');
}
// Función para abrir la imagen en grande
function openModal(imageSrc) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Función para cerrar la imagen
function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none";
}
// Función para comprobar el asesino sin spoilers en el código fuente
function checkResolution() {
    // Captura lo que habéis escrito, lo pasa a minúsculas y quita espacios extra
    const input = document.getElementById('culprit-input').value.toLowerCase().trim();
    const msgBox = document.getElementById('resolution-message');
    
    // Las respuestas correctas encriptadas en Base64 (¡no intentes descifrarlas!)
    const validTargets = ["anVsaWFu", "anVsaWFuIGNyb3Nz", "ZWxpYXM=", "ZWxpYXMgdGhvcm5l"];
    
    // Encriptamos vuestra respuesta para compararla
    const encodedInput = btoa(unescape(encodeURIComponent(input)));
    
    msgBox.style.display = "block";
    
    // Comprobación
    if (validTargets.includes(encodedInput)) {
        msgBox.className = "success-msg";
        msgBox.innerHTML = "¡ORDEN DE ARRESTO APROBADA! <br><br> Habéis hilado las pruebas y las horas correctamente. Buen trabajo, detectives. Caso cerrado.";
    } else {
        msgBox.className = "error-msg";
        msgBox.innerHTML = "ORDEN DENEGADA. <br><br> Las pruebas y las líneas temporales no sostienen esta acusación. Hay algo que habéis pasado por alto.";
    }
}
// Función que arranca el vídeo y el audio
function startIntro() {
    // Ocultar el botón principal
    document.getElementById('intro-btn').style.display = 'none';
    
    // Cambiar el texto para dar inmersión
    const msg = document.getElementById('intro-msg');
    msg.innerHTML = "> Desencriptando archivo de audio...<br>> Reproduciendo transmisión...";
    msg.style.color = "#4caf50"; // Verde terminal
    
    // Reproducir el audio
    const audio = document.getElementById('intro-audio');
    audio.play();
    
    // Cuando el audio termine de reproducirse por completo, entra al Bureau
    audio.onended = function() {
        enterBureau();
    };
}

// Función que hace desaparecer la intro con un fundido
function enterBureau() {
    const introScreen = document.getElementById('intro-screen');
    
    // Empieza a desvanecerse
    introScreen.style.opacity = '0';
    
    // Espera 1.5 segundos (lo que dura la transición CSS) y lo borra del todo
    setTimeout(() => {
        introScreen.style.display = 'none';
        
        // Opcional: Pausar el vídeo oculto para que no consuma recursos
        document.getElementById('intro-video').pause();
    }, 1500);
}
