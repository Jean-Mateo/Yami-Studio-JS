 // Función para cargar las noticias usando AJAX
        document.addEventListener("DOMContentLoaded", function() {
            const noticiasContainer = document.getElementById("noticias-container");
    
            // Usamos fetch para cargar el archivo JSON
            fetch('data/noticias.json')
                .then(response => response.json())  // Parseamos la respuesta a formato JSON
                .then(data => {
                    // Limpiamos el contenedor antes de añadir las noticias
                    noticiasContainer.innerHTML = '';
    
                    // Recorremos las noticias y las mostramos
                    data.forEach(noticia => {
                        const noticiaElement = document.createElement('div');
                        noticiaElement.classList.add('noticia');
    
                        // Creamos el HTML para cada noticia
                        noticiaElement.innerHTML = `
                            <h3>${noticia.titulo}</h3>
                            <p><strong>${noticia.fecha}</strong></p>
                            <p>${noticia.contenido}</p>
                        `;
    
                        // Añadimos la noticia al contenedor
                        noticiasContainer.appendChild(noticiaElement);
                    });
                })
                .catch(error => console.error('Error cargando las noticias:', error));  // Manejo de errores
        });