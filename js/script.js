//FUNCION TOTAL A PAGAR
function calcularTotal(){
    //LLAMADO DE ELEMENTOS DEL HTML
    let $cantidad = document.getElementById('cantidad');
    let $categoria = document.getElementById('categoria');
    let $totalPagar = document.getElementById('totalPagar');
    let $nombre = document.getElementById('nombre');
    let $apellido = document.getElementById('apellido');
    let $mail = document.getElementById('mail');

    


    //VALIDACION NOMBRE
    if(!$nombre.value || ! /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.exec($nombre.value)) { 
        $nombre.style.border = "1px solid #ff000075"
        $nombre.style.boxShadow = '0px 0px 6px 0px #ff0000eb'
        $totalPagar.innerText = '-'
    }
    else if($nombre.value !== ""){
        $nombre.style.border = ""
        $nombre.style.boxShadow = ""
    }

    //VALIDACION APELLIDO
    if(!$apellido.value || ! /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.exec($apellido.value)) { 
        $apellido.style.border = "1px solid #ff000075"
        $apellido.style.boxShadow = '0px 0px 6px 0px #ff0000eb'
        $totalPagar.innerText = '-'
    }
    else if($apellido.value !== ""){
        $apellido.style.border = ""
        $apellido.style.boxShadow = ""
    }

    //VALIDACION MAIL
    function validarMail(){
        return /\S+@\S+\.\S+/.exec($mail.value);
    }

    if(!validarMail($mail)){
        $mail.style.border = "1px solid #ff000075"
        $mail.style.boxShadow = '0px 0px 6px 0px #ff0000eb'
        $totalPagar.innerText = '-'
     }
     else {
        $mail.style.border = ""
        $mail.style.boxShadow = ""
     }

     //VALIDACION CANTIDAD
    if($cantidad.value === "") { 
        $cantidad.style.border = "1px solid #ff000075"
        $cantidad.style.boxShadow = '0px 0px 6px 0px #ff0000eb'
        $totalPagar.innerText = '-'
    }
    else{
        $cantidad.style.border = ""
        $cantidad.style.boxShadow = ""
    }


    //VALIDACION CATEGORIA
     if($categoria.value === "") { 
        $categoria.style.border = "1px solid #ff000075"
        $categoria.style.boxShadow = '0px 0px 6px 0px #ff0000eb'
        $totalPagar.innerText = '-'

    }
    else{
        $categoria.style.border = ""
        $categoria.style.boxShadow = ""
    }
    
 


    //CALCULO DEL RESUMEN TOTAL A PAGAR
    if($categoria.value == ""){
        resumenTotal = "-";
    }
    if($categoria.value == 1){
        resumenTotal = 200 * $cantidad.value;
    }
    if($categoria.value == 2){
        let descuento = 200 * 0.8;
        let valorConDescuento = 200 - descuento;
        resumenTotal = valorConDescuento * $cantidad.value;
    }
    if($categoria.value == 3){
        let descuento = 200 * 0.5;
        let valorConDescuento = 200 - descuento;
        resumenTotal = valorConDescuento * $cantidad.value;
    }
    if($categoria.value == 4){
        let descuento = 200 * 0.15;
        let valorConDescuento = 200 - descuento;
        resumenTotal = valorConDescuento * $cantidad.value;
    }

    $totalPagar.innerText = ` $${resumenTotal}`
}




//FORMULARIO

const $formulario = document.getElementById('formulario')
$formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
})


//EVENTO DEL RESUMEN TOTAL A PAGAR
const $botonResumen = document.getElementById('botonResumen');
$botonResumen.addEventListener('click', calcularTotal);








