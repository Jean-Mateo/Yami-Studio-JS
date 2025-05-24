 document.addEventListener("DOMContentLoaded", function () {
            const modal = document.getElementById("modal");
            const modalImg = document.getElementById("modal-img");
            const captionText = document.getElementById("caption");
            const close = document.getElementsByClassName("close")[0];

            // Aseguramos que las imágenes no están abiertas por defecto
            modal.style.display = "none"; // Especificamos que el modal no se muestre al cargar

            // Abrimos el modal solo cuando se haga clic en una imagen de la galería
            document.querySelectorAll(".gallery img").forEach(img => {
                img.onclick = function () {
                    modalImg.scrollIntoView({ behavior: "smooth", block: "center" });
                    modal.style.display = "block"; // Mostramos el modal
                    modalImg.src = this.src; // Asignamos la imagen al modal
                    captionText.innerHTML = this.alt; // Mostramos el texto alternativo como título
                };
            });

            // Cerrar el modal al hacer clic en la "X"
            close.onclick = function () {
                modal.style.display = "none"; // Ocultamos el modal
            };

            // Cerrar el modal al hacer clic fuera de la imagen
            window.onclick = function (event) {
                if (event.target === modal) {
                    modal.style.display = "none"; // Ocultamos el modal si se hace clic fuera de la imagen
                }
            };
        });