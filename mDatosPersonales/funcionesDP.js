//VARIABLE GLOBAL PARA NOMBRAR LOS ELEMENTOS DE LOS  FORMULARIOS
//DATOS PERSONALES -DP 
var nombreModulo_DP="Datos Personales";

$("#frmGuardar-DP").submit(function(e){

    var clave    = $("#clave").val();
    var nombre    = $("#nombre").val();
    var apPaterno = $("#apPaterno").val();
    var apMaterno = $("#apMaterno").val();
    var fNac      = $("#fNac").val();
    var correo    = $("#correo").val();
    var curp      = $("#curp").val();
    var domicilio = $("#domicilio").val();
    var sexo      = $("#sexo").val();
    var ecivil    = $("#ecivil").val();

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Guardar la información?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-primary",
        confirmButtonText: "Si deseo guardarla",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url:"../mDatosPersonales/guardar.php",
                type:"POST",
                dateType:"html",
                data:{clave,nombre,apPaterno,apMaterno,fNac,correo,curp,domicilio,sexo,ecivil},
                success:function(respuesta){
                    
                    $("#guardar-DP").hide();
                    llenar_lista_DP();
                    $("#frmGuardar-DP")[0].reset();
                    selectTwo();
                    alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                    $('#nombre').focus();
                    actividad  ="Se insertado un nuevo registro a la tabla "+nombreModulo_DP;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
        
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

    e.preventDefault();
    return false;
});

$("#frmActualizar-DP").submit(function(e){

    var id        = $("#eId").val();
    var nombre    = $("#eNombre").val();
    var apPaterno = $("#eApPaterno").val();
    var apMaterno = $("#eApMaterno").val();
    var fNac      = $("#eFnac").val();
    var correo    = $("#eCorreo").val();
    var curp      = $("#eCurp").val();
    var clave     = $("#eClave").val();
    var domicilio = $("#eDomicilio").val();
    var sexo      = $("#eSexo").val();
    var ecivil    = $("#eEcivil").val();

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Actualizar la información?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-success",
        confirmButtonText: "Si deseo actualizarla",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url:"../mDatosPersonales/actualizar.php",
                type:"POST",
                dateType:"html",
                data:{clave,id,nombre,apPaterno,apMaterno,fNac,correo,curp,clave,domicilio,sexo,ecivil},
                success:function(respuesta){
                    //console.log(respuesta);
                    llenar_lista_DP();
                        $("#frmGuardar-DP")[0].reset();
                        $("#frmActualizar-DP")[0].reset();
                        alertify.success("<i class='fa fa-bolt fa-lg'></i>", 2);
                    $("#btnCancelarG-DP , #btnCancelarA-DP").click();
                    actividad  ="Se ha modificado un registro de la tabla tabla "+nombreModulo_DP;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
                    
                    $('#nombre').focus();
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

    e.preventDefault();
    return false;
});

function llenar_lista_DP(){
    abrirModalCarga('Cargando Lista');
    $("#frmGuardar-DP")[0].reset();
    $("#Listado-DP").hide();
    $.ajax({
        url:"../mDatosPersonales/lista.php",
        type:"POST",
        dateType:"html",
        data:{},
        success:function(respuesta){
            $("#Listado-DP").html(respuesta);
            $("#Listado-DP").fadeIn("slow");
            cerrarModalCarga();      
            $("#nombre").focus();
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function edad(fecha){
    $.ajax({
        url:"../mDatosPersonales/calcularEdad.php",
        type:"POST",
        dateType:"html",
        data:{fecha},
        success:function(respuesta){

            $("#edad").val(respuesta);
            $("#eEdad").val(respuesta);

            xedad= parseInt(respuesta);
            if (xedad < 0) {
                
                $("#edad, #eEdad , #fNac , #efNac").css("color", rojo);
            } else {
                
                $("#edad, #eEdad , #fNac , #efNac").css("color", obscuro);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function llenar_formulario_DP(id,nombre,apPaterno,apMaterno,fNac,edad,correo,curp,clave,domicilio,sexo,ecivil){
   
    $("#eId").val(id);
    $("#eClave").val(clave);
    $("#eNombre").val(nombre);
    $("#eApPaterno").val(apPaterno);
    $("#eApMaterno").val(apMaterno);
    $("#eFnac").val(fNac);
    $("#eEdad").val(edad);
    $("#eCorreo").val(correo);
    $("#eCurp").val(curp);
    $("#eClave").val(clave);
    $("#eDomicilio").val(domicilio);
    $("#eSexo").val(sexo);
    $("#eEcivil").val(ecivil);

    selectTwo();

    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Modificar datos");

    $("#guardar-DP").hide();
    $("#Listado-DP").hide();
    $("#editar-DP").fadeIn();
    $("#eNombre").focus();
}

function cambiar_estatus_DP(id,consecutivo){

    var valor=$("#check"+consecutivo).val();
    var contravalor=(valor==1)?0:1;
    $("#check"+consecutivo).val(contravalor);

    $.ajax({
        url:"../mDatosPersonales/cEstatus.php",
        type:"POST",
        dateType:"html",
        data:{id,contravalor},
        success:function(respuesta){
            // console.log(respuesta);
            if(contravalor==1){
                alertify.success("<i class='fa fa-check fa-lg'></i>", 2);
                $("#btnEditar-DP"+consecutivo).removeAttr('disabled');
                $("#btnImprimir-DP"+consecutivo).removeAttr('disabled');
                $("#btnModal-DP"+consecutivo).removeAttr('disabled');
                $("#btnFoto-DP"+consecutivo).removeAttr('disabled');
                $("#btnSonido-DP"+consecutivo).removeAttr('disabled');
                $("#icoSound-DP"+consecutivo).removeClass("fa fa-volume-mute fa-lg");
                $("#icoSound-DP"+consecutivo).addClass("fa fa-volume-up fa-lg");
                actividad  ="Se ha reactivado un registro de la tabla tabla "+nombreModulo_DP;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }else{
                alertify.error("<i class='fa fa-times fa-lg'></i>", 2);
                $("#btnEditar-DP"+consecutivo).attr('disabled','disabled');
                $("#btnImprimir-DP"+consecutivo).attr('disabled','disabled');
                $("#btnModal-DP"+consecutivo).attr('disabled','disabled');
                $("#btnFoto-DP"+consecutivo).attr('disabled','disabled');
                $("#btnSonido-DP"+consecutivo).attr('disabled','disabled');
                $("#icoSound-DP"+consecutivo).removeClass("fa fa-volume-up fa-lg");
                $("#icoSound-DP"+consecutivo).addClass("fa fa-volume-mute fa-lg");
                actividad  ="Se ha desactivado un registro de la tabla tabla "+nombreModulo_DP;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });

}

function abrirModalDatos_DP(id,nombre,apPaterno,apMaterno,fNac,edad,correo,curp,clave,domicilio,sexo,ecivil) {
    $("#modalTitle-DP").text("Datos personales - "+nombre+' '+apPaterno);

    $("#mNombre").val(nombre);
    $("#mApPaterno").val(apPaterno);
    $("#mApMaterno").val(apMaterno);
    $("#mFnac").val(fNac);
    $("#mEdad").val(edad);
    $("#mCorreo").val(correo);
    $("#mCurp").val(curp);
    $("#mClave").val(clave);
    $("#mDomicilio").val(domicilio);
    $("#mSexo").val(sexo);
    $("#mEcivil").val(ecivil);

    selectTwo();

    $("#modalDatos-DP").modal("show");
}


//Manipulacion de eventos con jquery
$("#fNac").change(function(){
    var fecha = $(this).val();
    edad(fecha);
    ;
});

$("#efNac").change(function(){
    var fecha = $(this).val();
    edad(fecha);

});

$("#btnCancelarG-DP , #btnCancelarA-DP").click(function(){
    $("#editar-DP").hide();
    $("#guardar-DP").hide();

    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Lista");

    $("#Listado-DP").fadeIn();
 
});


$("#clave").keydown(function() {
    var valor=$(this).val();
    soloNumeros(valor);
});

$("#curp , #eCurp").keyup(function() {

    valor=$(this);
    // Convierte en mayuscula
    valor.val(valor.val().toUpperCase());
    
    //validar curp + expresion regular
    if (curpValida(valor.val())=="Si") {
        //$("#btnGuardar-DP").removeAttr('disabled');
        $(valor).css("color", obscuro);
        alertify.success("Curp valida !",1);
    }else{
        //$("#btnGuardar-DP").attr('disabled','disabled');
        $(valor).css("color", rojo);
    }

});

$("#clave").keyup(function(){
    var valor=$(this).val();
    revisar_clave(valor);
});

//Manipulacion de eventos con jquery

//Revisar clave repetida
function revisar_clave(valor){
    $.ajax({
        url:"../mDatosPersonales/rClave.php",
        type:"POST",
        dateType:"html",
        data:{valor},
        success:function(respuesta){
            res =parseInt(respuesta);
            if (res == 0) {
                $("#clave").css("color", obscuro);
            }else{
                $("#clave").css("color", rojo);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

//validar curp
function curpValida(valor) {

    var validador;
    var curp=valor;

    // Expresion regular para curp
    var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
        validado = curp.match(re);
    
    if (!validado){  //Coincide con el formato general?
        validador = "No";
    }else{
        validador = "Si";
    }
    return validador;
}

//llenar combo
function combo_ecivil()
{
    $.ajax({
        url : '../mDatosPersonales/comboEcivil.php',
        data : {},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            
            $("#ecivil , #eEcivil , #mEcivil , #eDesc").empty();
            $("#ecivil , #eEcivil , #mEcivil , #eDesc").html(respuesta);    
            selectTwo();
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });
}

function nuevo_registro_DP(){
    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Nuevo registro");

    $("#Listado-DP").hide();
    $("#guardar-DP").fadeIn();
    $('#frmGuardar-DP')[0].reset();
    $("#clave").focus();
    
}

function abrirModalFoto(id,clave,nombre,valorfoto) {

    $("#clavePersona").val(clave);
    $("#txtTitularFoto").text(nombre);

    if (valorfoto=="No") {
        $('#formVista').hide();
        $('#formSubida').fadeIn();
        $('#formSubida')[0].reset();
    }else{
        $('#formSubida').hide();
        $('#formVista').fadeIn();
        var archivo='../fotos/'+clave+".jpg";
        $("#imgFoto").attr("src",archivo);
    }
    
    $("#modalFoto").modal("show");

}

function  eliminarFoto(){

    var formData = new FormData();
    var clave=$('#clavePersona').val();
    formData.append('clave',clave);

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas eliminar la foto?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-dark",
        confirmButtonText: "Si deseo eliminarla",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url: '../mDatosPersonales/fotoBorrar.php',
                type: 'post',
                data: formData,
                contentType: false,
                processData: false,
                success: function(response) {
                  var res=parseInt(response);
                  switch(res){
                    case 0 :
                        alertify.error("<i class='fa fa-times fa-lg'></i> No se encuentra el archivo",1);
                        $("#modalFoto").modal("hide");
                        llenar_lista_DP();
                      break;
                    case 1 :
                        alertify.warning("<i class='fa fa-check fa-lg'></i> Foto Eliminada",1);
                        $("#modalFoto").modal("hide");
                        llenar_lista_DP();
                        break;
                  }
        
                },
                error:function(xhr,status){
                    alertify.error('Error en proceso');
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

}

function subirFoto(){
    var formData = new FormData();

    var files = $('#image')[0].files[0];

    var clave=$('#clavePersona').val();
    var tam=$('#tamanoKB').val();

    formData.append('file',files);
    formData.append('clave',clave);
    formData.append('tam',tam);

    $.ajax({
        url: '../mDatosPersonales/fotoSubir.php',
        type: 'post',
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
          var res=parseInt(response);
          switch(res){
            case 0 :
                alertify.success("<i class='fas fa-file-upload'></i>",1);
                $("#modalFoto").modal("hide");
                llenar_lista_DP();
              break;
            case 1 :

                swal({
                    title: "Error!",
                    text: "No ha sido posible cargar el archivo debido a que este debe de tener extención jpg y no debe de sobrepasar los 3 megabytes",
                    type: "error",
                    confirmButtonClass: "btn-dark",
                    confirmButtonText: "Enterado"
                }, function (isConfirm) {
                    alertify.message("Gracias !");
                });
              break;
            default:
                  alertify.error("<i class='fa fa-times fa-lg'></i>",1);
          }

        },
        error:function(xhr,status){
            alertify.error('Error en proceso');
        },
    });
// return false;
}

function abrirModalHorario(id, nombre, con, turno, Le, Ls, Me, Ms, Mie, Mis, Je, Js, Ve, Vs, Se, Ss, De, Ds){
    $("#idPersona").val(id);
    $("#txtTitularHorario").text("Horario de "+nombre);
    $("#Nombre").val(nombre);
    if (con == "Si") {
        $("#realizar").val("Si");
        $("#turno").val(turno);
        $("#Lentrada").val(Le);
        $("#Lsalida").val(Ls);
        $("#Mentrada").val(Me);
        $("#Msalida").val(Ms);
        $("#Mientrada").val(Mie);
        $("#Misalida").val(Mis);
        $("#Jentrada").val(Je);
        $("#Jsalida").val(Js);
        $("#Ventrada").val(Ve);
        $("#Vsalida").val(Vs);
        $("#Sentrada").val(Se);
        $("#Ssalida").val(Ss);
        $("#Dentrada").val(De);
        $("#Dsalida").val(Ds);
        TurnoHorario();
    } else {
        $("#realizar").val("No");
        $("#turno").val("Especial");
        TurnoHor();
    }
    $("#modalHorario").modal("show");
}

function inputsHorarioDis(){
    $("#Lentrada, #Lsalida, #Mentrada, #Msalida, #Mientrada, #Misalida, #Jentrada, #Jsalida, #Ventrada, #Vsalida").attr("disabled", "disabled");
    $("#Sentrada, #Ssalida, #Dentrada, #Dsalida").attr("disabled", "disabled");
}

function GuardarHorario(){
    var nom = $("#Nombre").val();
    var res = $("#realizar").val();
    var IdPersona = $("#idPersona").val();
    var turno = $("#turno").val();
    var Le = $("#Lentrada").val();
    var Ls = $("#Lsalida").val();
    var Me = $("#Mentrada").val();
    var Ms = $("#Msalida").val();
    var Mie = $("#Mientrada").val();
    var Mis = $("#Misalida").val();
    var Je = $("#Jentrada").val();
    var Js = $("#Jsalida").val();
    var Ve = $("#Ventrada").val();
    var Vs = $("#Vsalida").val();
    var Se = $("#Sentrada").val();
    var Ss = $("#Ssalida").val();
    var De = $("#Dentrada").val();
    var Ds = $("#Dsalida").val();
    if (res == 'No') {
        $.ajax({
            url:"../mDatosPersonales/guardarHorario.php",
            type:"POST",
            dateType:"html",
            data:{IdPersona, turno, Le, Ls, Me, Ms, Mie, Mis, Je, Js, Ve, Vs, Se, Ss, De, Ds},
            success:function(respuesta){
                // console.log(respuesta);
                alertify.success("<i class='fa fa-check fa-lg'></i> Horario Guardado", 2);
                $("#modalHorario").modal("hide");
                actividad  ="Se ha creado un horario para la persona "+nom;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
                llenar_lista_DP();
            },
            error:function(xhr,status){
                alert("Error en metodo AJAX"); 
            },
        });
    } else {
        $.ajax({
            url:"../mDatosPersonales/actualizarHorario.php",
            type:"POST",
            dateType:"html",
            data:{IdPersona, turno, Le, Ls, Me, Ms, Mie, Mis, Je, Js, Ve, Vs, Se, Ss, De, Ds},
            success:function(respuesta){
                // console.log(respuesta);
                alertify.success("<i class='fa fa-check fa-lg'></i> Horario Actualizado", 2);
                $("#modalHorario").modal("hide");
                actividad  ="Se ha actualizado el horario para la persona "+nom;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
                llenar_lista_DP();
            },
            error:function(xhr,status){
                alert("Error en metodo AJAX"); 
            },
        });
    }
}

function TurnoHorario(){
    if ($("#turno").val() == "Especial") {
        $("#Lentrada, #Lsalida, #Mentrada, #Msalida, #Mientrada, #Misalida, #Jentrada, #Jsalida, #Ventrada, #Vsalida").removeAttr("disabled");
        $("#Sentrada, #Ssalida, #Dentrada, #Dsalida").removeAttr("disabled");
        CalcularHoras();
    }else if ($("#turno").val() == "Matutino") {
        inputsHorarioDis()
        CalcularHoras()
    } else if ($("#turno").val() == "Vespertino") {
        inputsHorarioDis()
        CalcularHoras()
    } else if ($("#turno").val() == "Nocturno") {
        inputsHorarioDis()
        $("#htotal").text("30");
        $("#htotal").css('color', '#1e90ff');
        $("#btnGuardarHorario").removeAttr('disabled');
    }
}

function TurnoHor(){
    if ($("#turno").val() == "Especial") {
        $("#Lentrada, #Lsalida, #Mentrada, #Msalida, #Mientrada, #Misalida, #Jentrada, #Jsalida, #Ventrada, #Vsalida").removeAttr("disabled");
        $("#Sentrada, #Ssalida, #Dentrada, #Dsalida").removeAttr("disabled");
        $("#Lentrada, #Mentrada, #Mientrada, #Jentrada, #Ventrada, #Sentrada, #Dentrada").val("00:00");
        $("#Lsalida, #Msalida, #Misalida, #Jsalida, #Vsalida, #Ssalida, #Dsalida").val("00:00");
        $("#htotal").text("00");
        CalcularHoras();
    }else if ($("#turno").val() == "Matutino") {
        inputsHorarioDis()
        $("#Lentrada, #Mentrada, #Mientrada, #Jentrada, #Ventrada").val("06:00");
        $("#Lsalida, #Msalida, #Misalida, #Jsalida, #Vsalida").val("12:00");
        $("#Sentrada, #Dentrada").val("00:00");
        $("#Ssalida, #Dsalida").val("00:00");
        CalcularHoras()
    } else if ($("#turno").val() == "Vespertino") {
        inputsHorarioDis()
        $("#Lentrada, #Mentrada, #Mientrada, #Jentrada, #Ventrada").val("12:00");
        $("#Lsalida, #Msalida, #Misalida, #Jsalida, #Vsalida").val("18:00");
        $("#Sentrada, #Dentrada").val("00:00");
        $("#Ssalida, #Dsalida").val("00:00");
        CalcularHoras()
    } else if ($("#turno").val() == "Nocturno") {
        inputsHorarioDis()
        $("#Lentrada, #Mentrada, #Mientrada, #Jentrada, #Ventrada").val("18:00");
        $("#Lsalida, #Msalida, #Misalida, #Jsalida, #Vsalida").val("00:00");
        $("#Sentrada, #Dentrada").val("00:00");
        $("#Ssalida, #Dsalida").val("00:00");
        $("#htotal").text("30");
        $("#htotal").css('color', '#1e90ff');
        $("#btnGuardarHorario").removeAttr('disabled');
    }
}

$("#turno").change(function(){
    TurnoHor();
});

function CalcularHoras(){
    var Le = $("#Lentrada").val();
    var Ls = $("#Lsalida").val();
    var aux1 = Le.split(":")[0];
    var aux1_1 = Le.split(":")[1];
    var aux2 = Ls.split(":")[0];
    var aux2_1 = Ls.split(":")[1];
    var Me = $("#Mentrada").val();
    var Ms = $("#Msalida").val();
    var aux3 = Me.split(":")[0];
    var aux3_1 = Me.split(":")[1];
    var aux4 = Ms.split(":")[0];
    var aux4_1 = Ms.split(":")[1];
    var Mie = $("#Mientrada").val();
    var Mis = $("#Misalida").val();
    var aux5 = Mie.split(":")[0];
    var aux5_1 = Mie.split(":")[1];
    var aux6 = Mis.split(":")[0];
    var aux6_1 = Mis.split(":")[1];
    var Je = $("#Jentrada").val();
    var Js = $("#Jsalida").val();
    var aux7 = Je.split(":")[0];
    var aux7_1 = Je.split(":")[1];
    var aux8 = Js.split(":")[0];
    var aux8_1 = Js.split(":")[1];
    var Ve = $("#Ventrada").val();
    var Vs = $("#Vsalida").val();
    var aux9 = Ve.split(":")[0];
    var aux9_1 = Ve.split(":")[1];
    var aux10 = Vs.split(":")[0];
    var aux10_1 = Vs.split(":")[1];
    var Se = $("#Sentrada").val();
    var Ss = $("#Ssalida").val();
    var aux11 = Se.split(":")[0];
    var aux11_1 = Se.split(":")[1];
    var aux12 = Ss.split(":")[0];
    var aux12_1 = Ss.split(":")[1];
    var De = $("#Dentrada").val();
    var Ds = $("#Dsalida").val();
    var aux13 = De.split(":")[0];
    var aux13_1 = De.split(":")[1];
    var aux14 = Ds.split(":")[0];
    var aux14_1 = Ds.split(":")[1];

    var hora_diff = aux2 - aux1;
    var minuto_diff = aux2_1 - aux1_1;
    var hora_diff1 = aux4 - aux3;
    var minuto_diff1 = aux4_1 - aux3_1;
    var hora_diff2 = aux6 - aux5;
    var minuto_diff2 = aux6_1 - aux5_1;
    var hora_diff3 = aux8 - aux7;
    var minuto_diff3 = aux8_1 - aux7_1;
    var hora_diff4 = aux10 - aux9;
    var minuto_diff4 = aux10_1 - aux9_1;
    var hora_diff5 = aux12 - aux11;
    var minuto_diff5 = aux12_1 - aux11_1;
    var hora_diff6 = aux14 - aux13;
    var minuto_diff6 = aux14_1 - aux13_1;

    horatotal = parseInt(hora_diff)+parseInt(hora_diff1)+parseInt(hora_diff2)+parseInt(hora_diff3)+parseInt(hora_diff4)+parseInt(hora_diff5)+parseInt(hora_diff6);
    minutosTotal = parseInt(minuto_diff)+parseInt(minuto_diff1)+parseInt(minuto_diff2)+parseInt(minuto_diff3)+parseInt(minuto_diff4)+parseInt(minuto_diff5)+parseInt(minuto_diff6);
    if (minutosTotal >= 60 && minutosTotal <= 119) {
        horatotal += 1;
    } else {
        if (minutosTotal >= 120 && minutosTotal <= 179) {
            horatotal += 2;
        } else{
            if (minutosTotal >= 180 && minutosTotal <= 239) {
                horatotal += 3
            } else {
                if (minutosTotal >= 240 && minutosTotal <= 299) {
                    horatotal += 4
                } else {
                    if (minutosTotal >= 300 && minutosTotal <= 359) {
                        horatotal += 5
                    } else {
                        if (minutosTotal >= 360 && minutosTotal <= 419) {
                            horatotal += 6
                        } else {
                            if (minutosTotal >= 420 && minutosTotal <= 479) {
                                horatotal += 7
                            }
                        }
                    }
                }
            }
        }
    }
    $("#htotal").text(horatotal);
    if ((parseInt(hora_diff) < 0) || (parseInt(hora_diff1) < 0) || (parseInt(hora_diff2) < 0) || (parseInt(hora_diff3) < 0) || (parseInt(hora_diff4) < 0) || (parseInt(hora_diff5) < 0) || (parseInt(hora_diff6) < 0)) {
        $("#htotal").css('color', '#ff4757');
        $("#btnGuardarHorario").removeAttr('disabled');
    } else {
        if (horatotal >= 30) {
            $("#htotal").css('color', '#1e90ff');
            $("#btnGuardarHorario").removeAttr('disabled');
        } else {
            $("#htotal").css('color', '#ff4757');
            $("#btnGuardarHorario").attr('disabled', 'disabled');
        }
    }
}