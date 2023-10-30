$botonResumen.addEventListener("click", function () {
    if (resumenTotal > 0) {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("mail").value;
        const cantidad = document.getElementById("cantidad").value;
        const categoria = document.getElementById("categoria").value;

        const ticketText = `
               Nombre: ${nombre}
               Apellido: ${apellido}
               Email: ${email}
               Cantidad: ${cantidad}
               Categoría: ${categoria}
               Total a pagar: $${resumenTotal}
              `;

        const ticketWindow = window.open("", "Ticket", "width=500, height=700");
        ticketWindow.document.write(`<pre>${ticketText}</pre>`);
        ticketWindow.document.write("<button onclick='window.print()'>Imprimir</button>");
    }
    else if ((resumenTotal == 0 || resumenTotal == "") || (resumenTotal == null) || (resumenTotal == NaN)) {
        alert('Calcule el TOTAL antes de ver el Resumen');
        return;
    }





});
