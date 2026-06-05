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
