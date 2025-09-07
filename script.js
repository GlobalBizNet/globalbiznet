document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica para el Botón de WhatsApp Flotante ---
    
    // Configuración
    const phoneNumber = '573023741891'; 
    const defaultMessage = 'Hola, estoy interesado en sus servicios y quisiera más información.';

    // Creación del elemento del botón
    const whatsappButton = document.createElement('a');
    whatsappButton.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    whatsappButton.target = '_blank';
    whatsappButton.id = 'whatsapp-button'; // El ID que usa nuestro CSS para darle estilo
    
    // Ícono de WhatsApp (SVG)
    whatsappButton.innerHTML = `
        <svg viewBox="0 0 32 32" fill="white" height="30" width="30">
            <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.52-1.29.372-.775.372-1.447.26-1.59-.115-.143-.372-.215-.6-.215m-6.268 8.632h-.02a9.842 9.842 0 0 1-5.034-1.37c-1.518-1.04-2.678-2.476-3.344-4.135-1.144-2.734-1.032-5.902.34-8.558.99-1.844 2.416-3.23 4.18-4.114 2.78-1.36 5.902-.888 8.444.655.99.58 1.844 1.318 2.476 2.264.63 1.04 1.032 2.263.99 3.556 C24.41 18.005 22.82 20.37 20.45 22.5s-4.842 3.344-7.602 3.344M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0z"></path>
        </svg>`;

    // Agregar el botón al cuerpo del documento
    document.body.appendChild(whatsappButton);

    // En el futuro, se podría agregar aquí código para un menú móvil, etc.
});
