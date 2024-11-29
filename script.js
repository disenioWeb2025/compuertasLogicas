function switchTab(tabNumber) {
    // Eliminar la clase "active" de todas las pestañas y contenidos
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    // Agregar la clase "active" a la pestaña y contenido seleccionados
    document.getElementById('tab' + tabNumber).classList.add('active');
    document.getElementById('content' + tabNumber).classList.add('active');
}

// Mostrar la primera pestaña por defecto
document.addEventListener('DOMContentLoaded', () => switchTab(1));
