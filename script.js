// Agregar funcionalidades dinámicas aquí, como el carrusel de imágenes.

// Ejemplo de carrusel simple con la biblioteca Swiper.js
var mySwiper = new Swiper('#imageCarousel', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// Asegúrate de incluir estas líneas después de la carga de jQuery y Swiper.js

$(document).ready(function () {
    // Carrusel con Swiper.js
    var mySwiper = new Swiper('#imageCarousel', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});




