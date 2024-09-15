// Función para mostrar notificación de éxito
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Función para validar el formulario
function validateForm(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        showNotification('Por favor, completa todos los campos.');
        return;
    }

    showNotification('¡Gracias por tu mensaje! Te responderemos pronto.');

    // Opcional: aquí podrías enviar el formulario a un servidor usando fetch o XMLHttpRequest.
    // Para este ejemplo, solo se muestra un mensaje.
}

// Añadir event listener al formulario
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});
