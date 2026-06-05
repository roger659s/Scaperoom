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
