var nombreModulo_US="Usuarios";

function llenar_lista_US(){
    abrirModalCarga('Cargando Lista');

    $("#frmGuardar-US")[0].reset();
    
    $("#Listado-US").hide();
    $.ajax({
        url:"../mUsuarios/lista.php",
        type:"POST",
        dateType:"html",
        data:{},
        success:function(respuesta){
            $("#Listado-US").html(respuesta);
            $("#Listado-US").fadeIn("slow");
            cerrarModalCarga();      
            $("#nombre").focus();
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function combopersonas()
{
    $.ajax({
        url : '../mUsuarios/combopersonas.php',
        data : {},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            
            $("#PS_nomm").empty();
            $("#PS_nomm").html(respuesta);    
            selectTwo();
            
        },
        error : function(xhr, status) {
            alert('Error en metodo AJAX');
        },
    });
}
function combopersonasu()
{
    $.ajax({
        url : '../mUsuarios/combopersonas.php',
        data : {},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            
            $("#PS_nom").empty();
            $("#PS_nom").html(respuesta);    
            selectTwo();
            
        },
        error : function(xhr, status) {
            alert('Error en metodo AJAX');
        },
    });
}
function combotemas()
{
    $.ajax({
        url : '../mUsuarios/combotemas.php',
        data : {},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            
            $("#TE_nom, #TE_nomm").empty();
            $("#TE_nom, #TE_nomm").html(respuesta);    
            selectTwo();
            
        },
        error : function(xhr, status) {
            alert('Error en metodo AJAX');
        },
    });
}

function cambiar_estatus_US(id,consecutivo){

    var valor=$("#check"+consecutivo).val();
    var contravalor=(valor==1)?0:1;
    $("#check"+consecutivo).val(contravalor);

    $.ajax({
        url:"../mUsuarios/cEstatus.php",
        type:"POST",
        dateType:"html",
        data:{id,contravalor},
        success:function(respuesta){
            if(contravalor==1){
                alertify.success("<i class='fa fa-check fa-lg'></i>", 2);
                $("#btnEditar-US"+consecutivo).removeAttr('disabled');
                $("#btnResetPass-US"+consecutivo).removeAttr('disabled');
                $("#btnPermisosUs-US"+consecutivo).removeAttr('disabled');
                actividad  ="Se ha reactivado un registro de la tabla tabla "+nombreModulo_US;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }else{
                alertify.error("<i class='fa fa-times fa-lg'></i>", 2);
                $("#btnEditar-US"+consecutivo).attr('disabled','disabled');
                $("#btnResetPass-US"+consecutivo).attr('disabled','disabled');
                $("#btnPermisosUs-US"+consecutivo).attr('disabled','disabled');
                actividad  ="Se ha desactivado un registro de la tabla tabla "+nombreModulo_US;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });

}

function nuevo_registro_US(){
    $("#lblTitular").text(nombreModulo_US);
    $("#badgeInfo").text("Nuevo registro");
    combopersonasu();
    $("#checkDP").bootstrapToggle("off");
    $("#checkEC").bootstrapToggle("off");
    $("#checkUS").bootstrapToggle("off");
    $("#checkTM").bootstrapToggle("off");

    $("#Listado-US").hide();
    $("#guardar-US").fadeIn();
    $('#frmGuardar-US')[0].reset();
    $("#clave").focus();
}

$("#btnCancelar-US , #btnCancelarE-US").click(function(){
    $("#editar-US").hide();
    $("#guardar-US").hide();

    $("#lblTitular").text(nombreModulo_US);
    $("#badgeInfo").text("Lista");

    $("#Listado-US").fadeIn();
 
});

$("#frmGuardar-US").submit(function(e){ 

    var PS_nom = $("#PS_nom").val();
    var US_nom  = $("#US_nom").val();
    var FE_cad = $("#FE_cad").val();
    var TE_nom = $("#TE_nom").val();
    var checkDP;
    var checkEC;
    var checkUS;
    var checkTM;

    if ($("#checkDP").prop( "checked" ) == true){
        checkDP="si";
    }
    else{
        checkDP="no";
    }

    if ($("#checkEC").prop( "checked" ) == true){
        checkEC="si";
    }
    else{
        checkEC="no";
    }

    if ($("#checkUS").prop( "checked" ) == true){
        checkUS="si";
    }
    else{
        checkUS="no";
    }

    if ($("#checkTM").prop( "checked" ) == true){
        checkTM="si";
    }
    else{
        checkTM="no";
    }

    CompUSR(US_nom);
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

            var US_com = $('#US_res').val();
            
            if (US_com == 'Si') {
                $.ajax({
                    url:"../mUsuarios/guardarUS.php",
                    type:"POST",
                    dateType:"html",
                    data:{PS_nom, US_nom, FE_cad, TE_nom, checkDP, checkEC, checkUS, checkTM},
                    success:function(respuesta){
                        swal({
                            title: "Usuario creado!",
                            type: "success",
                            confirmButtonClass: "btn-dark",
                            confirmButtonText: "Enterado"
                        }, function (isConfirm) {
                            swal.close();
                            $("#guardar-US").hide();
                            llenar_lista_US();
                            $("#frmGuardar-US")[0].reset();
                            selectTwo();
                            alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                            actividad  ="Se insertado un nuevo registro a la tabla "+nombreModulo_US;
                            var idUser=$("#inicioIdusuario").val();
                            
                        });
                    },
                    error:function(xhr,status){
                        alert("Error en metodo AJAX"); 
                    },
                });
            }else{
                    swal({
                        title: "Error!",
                        text: "Ya existe un usuario con ese nombre",
                        type: "error",
                        confirmButtonClass: "btn-dark",
                        confirmButtonText: "Enterado"
                    }, function (isConfirm) {
                        alertify.message("Usuario guardado!");
                    });
                
            }

        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });
    e.preventDefault();
    return false;
});

function CompUSR(US_nom){
    $.ajax({
        url:"../mUsuarios/compUSR.php",
        type:"POST",
        dateType:"html",
        data:{US_nom},
        success:function(respuesta){
            if(respuesta != 'No'){
                respuesta = 'Si';
            }
            $('#US_res').attr('value',respuesta);
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function rescon(id) {
    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas resetear las contraseña?",
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
                $.ajax({
                    url : '../mUsuarios/rescontra.php',
                    data : {id},
                    type : 'POST',
                    dataType : 'html',
                    success : function(respuesta) {
                        swal({
                            title: "Listo!",
                            text: "Contraseña restablecida",
                            type: "success",
                            confirmButtonClass: "btn-dark",
                            confirmButtonText: "Enterado"
                        }, function (isConfirm) {
                            swal.close();
                            alertify.message("Contraseña Restablecida!");
                        });
                    },
                    error : function(xhr, status) {
                        alert('Error en el metodo ajax!');
                    },
                });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });
}

function llenar_formulario_US(id,IDD,user_name,IDT, checkDp, checkEc, checkUs, checkTm, fechaC){

    $("#eIDUs").val(id);
    $("#PS_nomm").val(IDD);
    $("#TE_nomm").val(IDT);
    $("#US_nomm").val(user_name);
    $("#FE_cadd").val(fechaC);

    (checkDp == 'si') ? $("#checkDP2").bootstrapToggle('on') : $("#checkDP2").bootstrapToggle('off');
    (checkEc == 'si') ? $("#checkEC2").bootstrapToggle('on') : $("#checkEC2").bootstrapToggle('off');
    (checkUs == 'si') ? $("#checkUS2").bootstrapToggle('on') : $("#checkUS2").bootstrapToggle('off');
    (checkTm == 'si') ? $("#checkTM2").bootstrapToggle('on') : $("#checkTM2").bootstrapToggle('off');

    selectTwo();

    $("#lblTitular").text(nombreModulo_US);
    $("#badgeInfo").text("Modificar Usuario");

    $("#guardar-US").hide();
    $("#Listado-US").hide();
    $("#editar-US").fadeIn();
    $("#US_nomm").focus();
}

$("#frmActualizar-US").submit(function(e){

    var id = $("#eIDUs").val();
    var US_nomm = $("#US_nomm").val();
    var FE_cadd  = $("#FE_cadd").val();
    var PS_nomm = $("#PS_nomm").val();
    var TE_nomm = $("#TE_nomm").val();
    var checkDP2 = ($("#checkDP2").prop( "checked" ) == true) ? 'si': 'no' ;
    var checkEC2 = ($("#checkEC2").prop( "checked" ) == true) ? 'si': 'no' ;
    var checkUS2 = ($("#checkUS2").prop( "checked" ) == true) ? 'si': 'no' ;
    var checkTM2 = ($("#checkTM2").prop( "checked" ) == true) ? 'si': 'no' ;
    
    acnomus(US_nomm, id);
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
        showLoaderOnConfirm: true,
        showCloseButton: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            var UsName = $('#USress').val();
            if (UsName == 'No') {
                $.ajax({
                    url:"../mUsuarios/acUS.php",
                    type:"POST",
                    dateType:"html",
                    data:{id, PS_nomm, US_nomm, FE_cadd, TE_nomm, checkDP2, checkEC2, checkUS2, checkTM2},
                    success:function(respuesta){
                        swal({
                            title: "Listo!",
                            text: "Usuario Modificado",
                            type: "success",
                            confirmButtonClass: "btn-dark",
                            confirmButtonText: "Enterado"
                        }, function (isConfirm) {
                            swal.close();
                            llenar_lista_US();
                            $("#frmGuardar-US")[0].reset();
                            $("#frmActualizar-US")[0].reset();
                            alertify.success("<i class='fa fa-bolt fa-lg'></i>", 2);
                            $("#btnCancelarG-US , #btnCancelarE-US").click();
                            actividad  ="Se ha modificado un registro de la tabla tabla "+nombreModulo_US;
                            var idUser=$("#inicioIdusuario").val();
                            log(actividad,idUser);
                        });
                    },
                    error:function(xhr,status){
                        alert("Error en metodo AJAX"); 
                    },
                });
            }else{
                    swal({
                        title: "Error!",
                        text: "Ya existe un usuario con ese nombre",
                        type: "error",
                        confirmButtonClass: "btn-dark",
                        confirmButtonText: "Enterado"
                    }, function (isConfirm) {
                        alertify.message("Usuario actualizado!");
                    });
            }

        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

    e.preventDefault();
    return false;
});

function acnomus(US_nomm, id){
    $.ajax({
        url:"../mUsuarios/accompUSR.php",
        type:"POST",
        dateType:"html",
        data:{US_nomm, id},
        success:function(respuesta){
            if(respuesta != 'Si'){
                respuesta= 'No';
            }
            $('#USress').val(respuesta);
            console.log(respuesta);
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function abrirModalPermisos_US(id, user_name, checkDp, checkEc, checkUs, checkTm) {
    $('#IDUsM').val(id);
    $('#txtTitularPermisos').text('Permisos de "'+ user_name+'"');
    (checkDp == 'si') ? $("#checkDPM").bootstrapToggle('on') : $("#checkDPM").bootstrapToggle('off');
    (checkEc == 'si') ? $("#checkECM").bootstrapToggle('on') : $("#checkECM").bootstrapToggle('off');
    (checkUs == 'si') ? $("#checkUSM").bootstrapToggle('on') : $("#checkUSM").bootstrapToggle('off');
    (checkTm == 'si') ? $("#checkTMM").bootstrapToggle('on') : $("#checkTMM").bootstrapToggle('off');

    $("#ModalPermisos").modal("show");
}

function GuardarUS() {
    var id          = $("#IDUsM").val();
    var checkDP = ($("#checkDPM").prop( "checked" ) == true) ? 'si' : 'no' ;
    var checkEC = ($("#checkECM").prop( "checked" ) == true) ? 'si' : 'no' ;
    var checkUS = ($("#checkUSM").prop( "checked" ) == true) ? 'si' : 'no' ;
    var checkTM = ($("#checkTMM").prop( "checked" ) == true) ? 'si' : 'no' ;
    swal({
        title: "¿Deseas continuar?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-primary",
        confirmButtonText: "Si",
        cancelButtonText: "Cancelar",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
                $.ajax({
                    url : '../mUsuarios/actperUS.php',
                    data : {id, checkDP, checkEC, checkUS, checkTM},
                    type : 'POST',
                    dataType : 'html',
                    success : function(respuesta) {
                        swal({
                            title: "Listo!",
                            type: "success",
                            confirmButtonClass: "btn-dark",
                            confirmButtonText: "Enterado"
                        }, function (isConfirm) {
                            swal.close();
                            alertify.message("Permisos actualizados!");
                            llenar_lista_US();
                            $("#ModalPermisos").modal("hide");
                        });
                    },
                    error : function(xhr, status) {
                        alert('Error en el metodo ajax');
                    },
                });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });
}