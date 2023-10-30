//FUNCION TOTAL A PAGAR
function calcularTotal(){
    //LLAMADO DE ELEMENTOS DEL HTML
    const $cantidad = document.getElementById('cantidad');
    const $categoria = document.getElementById('categoria');
    const $totalPagar = document.getElementById('totalPagar');
    const $nombre = document.getElementById('nombre');
    const $apellido = document.getElementById('apellido');
    const $mail = document.getElementById('mail');
 

    validacionNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    validacionApellido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    validacionEmail = /^\w+@(\w+\.)+\w{2,4}$/;


    if ((!$nombre.value || !validacionNombre.exec($nombre.value)) || (!$apellido.value || !validacionApellido.exec($apellido.value)) || (!$mail.value || !validacionEmail.exec($mail.value)) || ($cantidad.value === "") || ($categoria.value === "") ){
        $nombre.classList.add("error-input");
        $apellido.classList.add("error-input");
        $mail.classList.add("error-input");
        $cantidad.classList.add("error-input");
        $categoria.classList.add("error-input");

        
        alert("Complete todos los campos antes de calcular el Total.");
        
        return;
        
    }
    else{
        $nombre.classList.remove("error-input");
        $apellido.classList.remove("error-input");
        $mail.classList.remove("error-input");
        $cantidad.classList.remove("error-input");
        $categoria.classList.remove("error-input");
        //CALCULO DEL RESUMEN TOTAL A PAGAR
        if($categoria.value == ""){
           resumenTotal = "-";
    }
        if($categoria.value == 1){
             resumenTotal = 200 * $cantidad.value;
             $totalPagar.innerText = ` $${resumenTotal} `;
     }
         if($categoria.value == 2){
            descuento = 200 * 0.8;
            valorConDescuento = 200 - descuento;
            resumenTotal = valorConDescuento * $cantidad.value;
            $totalPagar.innerText = ` $${resumenTotal}` ;  
    } 
         if($categoria.value == 3){
            descuento = 200 * 0.5;
           valorConDescuento = 200 - descuento;
           resumenTotal = valorConDescuento * $cantidad.   value;
           $totalPagar.innerText = ` $${resumenTotal}` ;
        
    }
        if($categoria.value == 4){
           descuento = 200 * 0.15;
           valorConDescuento = 200 - descuento;
           resumenTotal = valorConDescuento * $cantidad.   value; 
           $totalPagar.innerText = ` $${resumenTotal}`;
    }
    }


    // $totalPagar.innerText = ` $${resumenTotal}`
}

//EVENTO TOTAL A PAGAR
const $botonTotal = document.getElementById('botonTotal');
$botonTotal.addEventListener('click', calcularTotal);





//////////////////////////////////////////////////////////////

//RESUMEN IMPRIMIR
const $botonResumen = document.getElementById("botonResumen");

//FUNCION VALIDAR ANTES DE IMPRIMIR RESUMEN
// function validarCampos() {
//     const nombre = document.getElementById("nombre").value;
//     const apellido = document.getElementById("apellido").value;
//     const email = document.getElementById("mail").value;
//     const cantidad = document.getElementById("cantidad").value;
//     const categoria = document.getElementById("categoria").value;
    
//     // Aquí debes implementar la lógica para validar los campos
//     // Por ejemplo, puedes verificar si no están vacíos o si cumplen con ciertos criterios
    
//     const camposCompletos = nombre !== "" && apellido !== "" && email !== "" && cantidad !== "" && categoria !== "";
    
//     if (camposCompletos) {
//         $botonResumen.removeAttribute("disabled");
//     } else {
//         $botonResumen.setAttribute("disabled", "true");
//     }
// }

// // Agrega un event listener para escuchar cambios en los campos
// document.getElementById("nombre").addEventListener("input", validarCampos);
// document.getElementById("apellido").addEventListener("input", validarCampos);
// document.getElementById("mail").addEventListener("input", validarCampos);
// document.getElementById("cantidad").addEventListener("input", validarCampos);
// document.getElementById("categoria").addEventListener("input", validarCampos);




///////////////////////////////////////////
//FUNCION IMPRIMIR RESUMEN
$botonResumen.addEventListener("click", function() {
    
    if(resumenTotal > 0){
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

         const ticketWindow = window.open("", "Ticket" ,"width=500, height=700", "target=_blank");
         ticketWindow.document.write(`<pre>${ticketText}</pre>`);
         ticketWindow.document.write("<button onclick='window.print()'>Imprimir</button>"); 
    }
    else if(resumenTotal == 0 || resumenTotal == "" || resumenTotal == null || resumenTotal == NaN){
        alert('Calcule el TOTAL antes de ver el Resumen');
        
    }
  


 

});    






