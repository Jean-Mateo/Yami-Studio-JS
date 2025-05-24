document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("cita-form");
            const servicio = document.getElementById("servicio");
            const extras = document.querySelectorAll("input[name='extra']");
            const totalSpan = document.getElementById("total");

            function calcularTotal() {
                let total = parseFloat(servicio.value) || 0;
                extras.forEach(extra => {
                    if (extra.checked) {
                        total += parseFloat(extra.value);
                    }
                });
                totalSpan.textContent = total;
            }

            servicio.addEventListener("change", calcularTotal);
            extras.forEach(extra => extra.addEventListener("change", calcularTotal));

            form.addEventListener("submit", function (event) {
                event.preventDefault();
                alert("¡Cita reservada con éxito!");
                form.reset();
                totalSpan.textContent = "0";
            });
        });