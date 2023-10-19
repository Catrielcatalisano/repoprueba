

    // Función para que se muestre la galeria a partir del boton siguiente
document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container");
    const images = imageContainer.querySelectorAll("img");
    let currentImageIndex = 0;

    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    // Función para mostrar la imagen actual
    function showImage() {
        images.forEach((image, index) => {
            if (index === currentImageIndex) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }

    //  para el boton Siguiente
    nextButton.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage();
    });

    // Evento para el boton Anterior
    prevButton.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage();
    });

    // Mostrar la primera imagen al cargar la pagina
    showImage();
});
