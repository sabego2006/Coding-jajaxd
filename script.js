// Función para mostrar un mensaje cuando se envía el formulario de contacto
document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    const nombre = document.getElementById('nombre').value;
    
    // Mensaje de confirmación
    alert(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado.`);
    
    // Limpia el formulario después de enviarlo
    document.getElementById('form-contacto').reset();
});

// Animación al cargar la página
window.addEventListener('load', function() {
    document.querySelector('header').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('header').style.transition = 'opacity 2s';
        document.querySelector('header').style.opacity = '1';
    }, 200);
});
