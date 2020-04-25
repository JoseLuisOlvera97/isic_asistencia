//VARIABLE GLOBAL PARA NOMBRAR LOS ELEMENTOS DE LOS  FORMULARIOS
//ESTADO CIVIL-EC 
var nombreModulo_CT="Crear Temas";

$("#frmGuardar-CT").submit(function(e){

    var desc    = $("#desc").val();

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
                url:"../mEstadoCivil/guardar.php",
                type:"POST",
                dateType:"html",
                data:{desc},
                success:function(respuesta){
                    console.log(respuesta);
                    $("#guardar-EC").hide();
                    llenar_lista_EC();
                    $("#frmGuardar-EC")[0].reset();
                    selectTwo();
                    alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                    $('#desc').focus();
                    actividad  ="Se insertado un nuevo registro a la tabla "+nombreModulo_EC;
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

$("#frmActualizar-CT").submit(function(e){

    var id      = $("#eIdFC").val();
    var desc    = $("#eDesc").val();

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
                url:"../mEstadoCivil/actualizar.php",
                type:"POST",
                dataType:"html",
                data:{id,desc},
                success:function(respuesta){
                    console.log(respuesta);
                    llenar_lista_EC();
                        $("#frmGuardar-EC")[0].reset();
                        $("#frmActualizar-EC")[0].reset();
                        alertify.success("<i class='fa fa-bolt fa-lg'></i>", 2);
                    $("#btnCancelarG-EC , #btnCancelarA-EC").click();
                    actividad  ="Se ha modificado un registro de la tabla "+nombreModulo_EC;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);

                    $('#desc').focus();
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

function llenar_lista_CT(){
    abrirModalCarga('Cargando Lista');
    $("#frmGuardar-CT")[0].reset();
    $("#Listado-CT").hide();
    $.ajax({
        url:"../mCrearTema/lista.php",
        type:"POST",
        dataType:"html",
        data:{},
        success:function(respuesta){
            $("#Listado-CT").html(respuesta);
            $("#Listado-CT").fadeIn("slow");
            cerrarModalCarga();      
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function importar_registro_CT(){
    $("#modalArchivo").modal("show");
}

function llenar_formulario_CT(id,nombre_tema,color_letra,color_base,color_baseF,color_borde){
    $("#tId").val(id);
    $("#enombreTema").val(nombre_tema);
    $("#ecolorLetra").val(color_letra);
    $("#ecolorBase").val(color_base);
    $("#ecolorBaseF").val(color_baseF);
    $("#ecolorBorde").val(color_borde);

    $("#lblTitular").text(nombreModulo_CT);
    $("#badgeInfo").text("Modificar Tema");

    $("#guardar-CT").hide();
    $("#Listado-CT").hide();
    $("#editar-CT").fadeIn();
    $("#enombreTema").focus();
}

function nuevo_registro_CT(){
    $("#lblTitular").text(nombreModulo_CT);

    $("#badgeInfo").text("Nuevo registro");

    $("#Listado-CT").hide();
    $("#guardar-CT").fadeIn();
    $('#frmGuardar-CT')[0].reset();
    $("#nombreTema").focus();

};

function cambiar_estatus_CT(id,consecutivo){

    var valor=$("#check"+consecutivo).val();
    var contravalor=(valor==1)?0:1;
    $("#check"+consecutivo).val(contravalor);

    $.ajax({
        url:"../mCrearTema/cEstatus.php",
        type:"POST",
        dataType:"html",
        data:{id,contravalor},
        success:function(respuesta){
            // console.log(respuesta);
            if(contravalor==1){
                alertify.success("<i class='fa fa-check fa-lg'></i>", 2);
                $("#btnEditar-CT"+consecutivo).removeAttr('disabled');
                actividad  ="Se ha reactivado un registro de la tabla "+nombreModulo_EC;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }else{
                alertify.error("<i class='fa fa-times fa-lg'></i>", 2);
                $("#btnEditar-CT"+consecutivo).attr('disabled','disabled');
                actividad  ="Se ha desactivado un registro de la tabla "+nombreModulo_EC;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });

}

$("#btnCancelarG-CT , #btnCancelarA-CT").click(function(){
    $("#editar-CT").hide();
    $("#guardar-CT").hide();

    $("#lblTitular").text(nombreModulo_CT);
    $("#badgeInfo").text("Lista");

    $("#Listado-CT").fadeIn();
});

function nuevo_registro_CT(){
    $("#lblTitular").text(nombreModulo_CT);

    $("#badgeInfo").text("Nuevo registro");

    $("#Listado-CT").hide();
    $("#guardar-CT").fadeIn();
    $('#frmGuardar-CT')[0].reset();
    $("#nombreTema").focus();
};

$("#colorLetra").change(function () {
    var duracion = ".25s";
    var color = $("#colorLetra").val();
    $("#spanColorLetra").css({
        transition : 'color'+ duracion +' ease-in-out',
        "color": color
    });
});

$("#colorBase").change(function () {
    var duracion = ".25s";
    var color = $("#colorBase").val();
    $("#spanColorBase").css({
        transition : 'color'+ duracion +' ease-in-out',
        "color": color
    });
});

$("#colorBaseF").change(function () {
    var duracion = ".25s";
    var color = $("#colorBaseF").val();
    $("#spanColorBaseF").css({
        transition : 'color'+ duracion +' ease-in-out',
        "color": color
    });
});

$("#colorBorde").change(function () {
    var duracion = ".25s";
    var color = $("#colorBorde").val();
    $("#spanColorBorde").css({
        transition : 'color'+ duracion +' ease-in-out',
        "color": color
    });
}); 

function importarArchivo(){
    var files = $('#name')[0].files[0];
    var archivo=files.name;
    var ruta= "../expImpTemas/Temas/"+archivo;

    console.log(ruta);
    
    $.getJSON(ruta, function(data){
        //for para recorre las propiedades
        for(tema in data){

            var nombre_tema       = data[tema].nombre_tema;
            var color_letra       = data[tema].color_letra;
            var color_base        = data[tema].color_base;
            var color_base_fuerte = data[tema].color_base_fuerte;
            var color_borde       = data[tema].color_borde;
            var fecha_registro    = data[tema].fecha_registro;
            var hora_registro     = data[tema].hora_registro;

            $.ajax({
                url:"../expImpTemas/importar.php",
                type:"POST",
                dateType:"html",
                data:{nombre_tema,color_letra,color_base,color_base_fuerte,color_borde,fecha_registro,hora_registro},
                success:function(respuesta){
                    console.log(respuesta);
                    var bandera=respuesta;
                    if (bandera==0) {
                        preloader(1,"Importando Tema ...");
                        $("#modalArchivo").modal("hide");
                        alertify.message("Gracias !");
                    }else{
                        swal({
                            title: "Error!",
                            text: "Ya existe un tema con el nombre "+nombre_tema,
                            type: "error",
                            confirmButtonClass: "btn-dark",
                            confirmButtonText: "Enterado"
                        }, function (isConfirm) {
                            alertify.message("Gracias !");
                        });
                    }
                   
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }
    });
}