// JavaScript para animar la aparición de los productos
window.addEventListener('DOMContentLoaded', () => {
    const productos = document.querySelectorAll('.producto');

    productos.forEach((producto, index) => {
        setTimeout(() => {
            producto.classList.add('show');
        }, 100 * index); // Animación en cadena
    });
});