document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica para el Botón de WhatsApp Flotante ---
    
    const phoneNumber = '573023741891'; 
    const defaultMessage = 'Hola, estoy interesado en sus servicios y quisiera más información.';

    const whatsappButton = document.createElement('a');
    whatsappButton.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    whatsappButton.target = '_blank';
    whatsappButton.id = 'whatsapp-button';
    
    whatsappButton.innerHTML = `<img src="whatsapplogo.webp" alt="Contactar por WhatsApp" class="whatsapp-icon">`;

    document.body.appendChild(whatsappButton);

});
