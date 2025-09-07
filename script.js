document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica para el Botón de WhatsApp Flotante ---
    
    // Configuración
    const phoneNumber = '573023741891'; 
    const defaultMessage = 'Hola, estoy interesado en sus servicios y quisiera más información.';

    // Creación del elemento del botón
    const whatsappButton = document.createElement('a');
    whatsappButton.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    whatsappButton.target = '_blank';
    whatsappButton.id = 'whatsapp-button';
    
    // --- CORRECCIÓN AQUÍ: Insertamos la imagen directamente como innerHTML ---
    whatsappButton.innerHTML = `<img src="logowhatsapp.jpg" alt="Contactar por WhatsApp" class="whatsapp-icon">`;

    // Agregar el botón al cuerpo del documento
    document.body.appendChild(whatsappButton);
});
