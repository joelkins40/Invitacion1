import {
    asistenciaInvitado,
    invitadoSinRegistro,
    menuInvitado,
    validaMenu,
    misDatosInvitados,
    misDatosInvitacion
} from './templates.js';
import {bloquearPantalla,desbloquearPantalla,validarNombre} from './helpers/funcionesHelper.js';

$(document).ready(function () {
    /* Bloqueo de pantalla*/
 /*   $(document).bind('contextmenu', function(event) {
        return false;
    });*/

    let token = $('body').data('token');
    let invitado = $('body').data('tokeninvitado');
    let numero_invit = 0;
    let numeroIn = 10;
    let publico = false;
    let invActualizada = "1";
    let invitacion = 0;
    let invitados = [];
    let nombre_invitacion = '';
    let numMesa = '';


/*  {
        propiedades:{
            titulo:'Bebidas',
                labelsOp:['Tequila','Ron','Vodka'], -Titulo del label
                tipo:'radio', - Tipo de boton (radio,text,checkbox,select)
                opciones:[], - Solo si es un selecct
                clase:'radioBebidas' - Clase para obtener datos
        }

    },*/

    //Si no se tiene opciones, mandar el arreglo vacio
    const informacionExtraInvitacion = [];
    /*const informacionExtraInvitacion = [
        {
            propiedades:{
                titulo:'Bebidas',
                labelsOp:['Tequila','Ron','Vodka'],
                tipo:'radio',
                opciones:[],
                clase:'radioBebidas'
            }
        },
        {
            propiedades:{
                titulo:'Bebidas',
                labelsOp:['Tequila'],
                tipo:'text',
                opciones:[],
                clase:'textBebida'
            }
        },
        {
            propiedades:{
                titulo:'Menu',
                labelsOp:['Taquitos','Barbacoa','Bistesisa'],
                tipo:'checkbox',
                opciones:[],
                clase:'checkMenu'
            }
        },
        {
            propiedades:{
                titulo:'Selecciona',
                labelsOp:['Taquitos'],
                tipo:'select',
                opciones:['Pastor','Suadero','Alambre'],
                clase:'selectSelcciona'
            }
        },
    ];*/


    //Si no se tiene opciones, mandar el arreglo vacio
    const informacionExtraInvitados = [];
   /* const informacionExtraInvitados = [
    {
        propiedades:{
            titulo:'Bebidas',
            labelsOp:['Tequila','Ron','Vodka'],
            tipo:'radio',
            opciones:[],
            clase:'radioBebidas'
        }
    },
    {
        propiedades:{
            titulo:'Bebidas',
            labelsOp:['Tequila'],
            tipo:'text',
            opciones:[],
            clase:'textBebida'
        }
    },
    {
     propiedades:{
         titulo:'Menu',
         labelsOp:['Taquitos','Barbacoa','Bistesisa'],
         tipo:'checkbox',
         opciones:[],
         clase:'checkMenu'
        }
     },
    {
        propiedades:{
            titulo:'Selecciona',
            labelsOp:['Taquitos'],
            tipo:'select',
            opciones:['Pastor','Suadero','Alambre'],
            clase:'selectSelcciona'
        }
    },
    ];
*/
    $.ajax({
        url: "https://admin.convitevent.com/tipo-invitacion",
        type: "POST",
        data: {token:token,invitado:invitado,invActualizada:invActualizada},
        dataType: "json"
    }).done(function (r) {
        console.log(r)
        if (r['status']) {

            invitacion = r['enviado'];
            numero_invit = r['invimax'];
            numeroIn = (r['invimax'] == 0) ? 10 :r['invimax'] ;
            invitados = r['invitados'];
            numMesa = r['numMesa'];
            console.log(numero_invit)
            console.log(r)
            nombre_invitacion = r['nombre'];
            $('#nombre').val(r['nombre']);
            $('#invitacionPara').text(r['nombre']);
            $('#email').val(r['correo']);
            $('.nombre').text(r['nombre']);
            $('#boletitosRestantes').text(numeroIn);
            $('#boletitosTotales').text(numeroIn);

            $("#datosInvitacion").append(menuInvitado(r['nombre'],numeroIn,informacionExtraInvitacion));

            if (r['invimax'] > 1){
                $('#boletoSP').text('Boletos disponibles');
            }else{
                $('#boletoSP').text('Boleto disponible');
            }
            if (r['invimax'] > 0){
                let contador = 1;
                for (let i = 0; i < numeroIn; i++) {
                    if (invitados[i]['nombreInvitado'] != "" && invitados[i]['nombreInvitado'] != "Boleto sin nombre") {

                        $("#invitados").append(asistenciaInvitado(invitados[i]['nombreInvitado'],contador,informacionExtraInvitados));
                    }else{
                        $("#invitados").append(invitadoSinRegistro(invitados[i]['nombreInvitado'],contador,informacionExtraInvitados));
                    }
                    contador++;
                }
            }
            if(r['nombre'] == ''){
                $('.etiqueda').css('display','none')
            }

            if(invitacion == 1){
                $('#datosboda').css('display','none');
                $('.c-0').show().text(r['nombre']);
                $('.c-1').text('Respuesta enviada');


                for (let x=0; x < r['invitados'].length; x++){
                    $('#listaInivtados').append('<li>'+r['invitados'][x]['nombreInvitado']+' - '+r['invitados'][x]['asistenciaInvitado']+'</li>');
                }
                if (numMesa !== ''){
                    $('#mesa').show();
                    $('#numMesa').text(numMesa);
                }
                $('#qrPase').attr('src', 'qr_invitados/'+r['qr']);
                $('#paseEntrada').show();
            }else{
                $('#paseEntrada').removeClass('d-flex');
                $('#paseEntrada').css('display','none');
            }

            if(r['nombre'] == ''){

                publico = true;
                numeroIn = 10;
                $('#boletitosTotales').text(numeroIn);
                $('#boletitosRestantes').text(numeroIn);
            }

        } else {
            location.href = "http://convitevent.com/404";
        }

    }).fail(function () {

    });

    $('#enviar_eventos').on('click', function (e) {
        e.preventDefault();
        let datos = new FormData($('#datosboda')[0]);
        let invitadosReservados = $('.invitado-l');
        let invitadosNuevos = $('.invitado-i');
        let asistencias = $('.asistencia');
        let invitados = [];
        let menu = [];
        let x = 0;
        let inv = {}
        let men = {};

        /*let mis_datos_invitacion = [];*/

/*        informacionExtraInvitacion.forEach( ({propiedades:{titulo,labelsOp,tipo,opciones}},index) => {
            mis_datos_invitacion[index] =  validaMenu(datos,tipo,nombre_invitacion,titulo,labelsOp);
        });*/

        const mis_datos_invitacion = misDatosInvitacion(datos,informacionExtraInvitacion,nombre_invitacion);

        for (let i=0; i < asistencias.length; i++){
            if (i < invitadosReservados.length){/*Boletos reservados*/
                inv = {'nombre':invitadosReservados[i].innerText, 'asist': asistencias[i].checked}
                men = {'nombre':invitadosReservados[i].innerText, 'campo_extra': misDatosInvitados(invitadosReservados[i].innerText,informacionExtraInvitados,i), 'asist': asistencias[i].checked }

            }else{ /*Boletos nuevos*/
                inv = {'nombre':invitadosNuevos[x].value, 'asist': asistencias[i].checked}
                men = {'nombre':invitadosNuevos[x].value, 'campo_extra': misDatosInvitados(invitadosNuevos[x].value,informacionExtraInvitados,i), 'asist': asistencias[i].checked }
                x++;
            }
            menu.push(men);
            invitados.push(inv);
        }


        const invitacion_invit = {
            invitacion:mis_datos_invitacion,
            invitado:menu
        }


        let jsonstring = JSON.stringify(invitados);
        let jsonMenu = JSON.stringify(menu);

        datos.append('t_invitacion', token);
        datos.append('t_invitado', invitado);
        datos.append('t_invitados', jsonstring);
        datos.append('t_menu',jsonMenu);
        datos.append('t_datos_extra',JSON.stringify(invitacion_invit));

        bloquearPantalla('Confirmando Asistencia...');
        $('.remove-this').remove();
        if (!validarNombre(datos, 'name' )){
            return false;
        }else{
            fetch('php/boda-datos.php',{
                method: 'POST',
                body: datos,
                dataType: 'JSON'
            }).then(response => response.json())
                .then(data => {
                    console.log(data)
                if (data['response'] == true) {
                    desbloquearPantalla();

                    alertify.alert("","Asistencia Confirmada.", function(){
                        alertify.message('Su asistencia ha sido confirmada');
                    });
                    setTimeout(function(){
                        window.location.reload(1);
                    }, 1000);

                }else{
                    desbloquearPantalla();
                    $.each(data, function (k, v) {
                        let padre = $("#" + k).parents('div');
                        $(padre[0]).addClass("resaltar");
                        $("#" + k).after("<p class='text-danger remove-this'>" + v + "</p>");
                    })
                }

            });
        }
    });
});



