$("#cvetrabajador").keypress(function(e) {
    if(e.which == 13) {
      e.preventDefault();
      var now = new Date();
      var days = new Array('Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado');

      var date = now.getDate();
      var day = now.getDay();
      var Dia = days[day];

      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();

      var Hora = hour +':'+ minute +':'+ second;

      var cvetrabajador = $("#cvetrabajador").val();
      if($('#cvetrabajador').val().length == 0){
        alertify.message("Debes de colocar una clave", 2);
        mensaje = "Debes de colocar una clave";
        switchSonido(mensaje);
      }
      else{
        $.ajax({
            url:"../mAsistencias/compcve.php",
            type:"POST",
            dateType:"html",
            data:{cvetrabajador},
            success:function(respuesta){
                if (respuesta == 'a') {
                    $.ajax({
                        url:"../mAsistencias/compcveact.php",
                        type:"POST",
                        dateType:"html",
                        data:{cvetrabajador},
                        success:function(respuesta){
                            if (respuesta == 'c') {
                                $.ajax({
                                    url:"../mAsistencias/id_usuario.php",
                                    type:"POST",
                                    dateType:"html",
                                    data:{cvetrabajador},
                                    success:function(id_usuario){
                                        idusr = id_usuario;
                                        $.ajax({
                                            url:"../mAsistencias/comphorario.php",
                                            type:"POST",
                                            dateType:"html",
                                            data:{idusr},
                                            success:function(resultado){
                                                if (resultado == 'Si') {
                                                    /* $.ajax({
                                                        url:"../mAsistencias/datos.php",
                                                        type:"POST",
                                                        dateType:"html",
                                                        data:{cvetrabajador},
                                                        success:function(datos){
                                                        $('#nombre-AS').text(datos);
                                                        mensaje = datos;
                                                        switchSonido(mensaje);
                                                        },
                                                        error:function(xhr,status){
                                                            alert("Error en metodo AJAX"); 
                                                        },
                                                    }); */
                                                    $.ajax({
                                                        url:"../mAsistencias/days.php",
                                                        type:"POST",
                                                        dateType:"html",
                                                        data:{id_usuario},
                                                        success:function(datos){
                                                            if(datos == 'Si') {
                                                                
                                                            }
                                                            else{
                                                                alertify.message("Hoy no es circulas", 2);
                                                                mensaje = "Hoy no es circulas";
                                                                switchSonido(mensaje);
                                                            }
                                                            console.log(datos);
                                                        mensaje = datos;
                                                        switchSonido(mensaje);
                                                        },
                                                        error:function(xhr,status){
                                                            alert("Error en metodo AJAX"); 
                                                        },
                                                    });
                                                }else{
                                                    alertify.message("No tienes un horario asignado", 2);
                                                    mensaje = "No tienes un horario asignado";
                                                    switchSonido(mensaje);
                                                }
                                            },
                                            error:function(xhr,status){
                                                alert("Error en metodo AJAX"); 
                                            },
                                        });
                                    },
                                    error:function(xhr,status){
                                        alert("Error en metodo AJAX"); 
                                    },
                                });
                            }else{
                                alertify.message("Tu usuario esta desactivado", 2);
                                mensaje = "Tu usuario esta desactivado";
                                switchSonido(mensaje);
                            }
                        },
                        error:function(xhr,status){
                            alert("Error en metodo AJAX"); 
                        },
                    });
                }else{
                    alertify.message("La clave que escribiste no está relacionada con ningún trabajador", 2);
                    mensaje = "La clave que escribiste no está relacionada con ningún trabajador";
                    switchSonido(mensaje);
                }
            },
            error:function(xhr,status){
                alert("Error en metodo AJAX"); 
            },
        });
      }
    }
  });

  function CrearReloj() {
    var tiempoAS = new Date();
    var horaAS = tiempoAS.getHours();
    var minutosAS = tiempoAS.getMinutes();
    var segundosAS = tiempoAS.getSeconds();

    if (horaAS < 10) {
        horaAS = '0' + horaAS;
    }
    if (minutosAS < 10) {
        minutosAS = '0' + minutosAS;
    }
    if (segundosAS < 10) {
        segundosAS = '0' + segundosAS;
    }

    var tiempoActual = horaAS + ':' + minutosAS + ':' + segundosAS;
    $("#reloj").html(tiempoActual);

    setTimeout(CrearReloj, 1000);
};

function switchSonido(text){
    if($("#checksound").prop('checked')){
        hablar(text);
    }
}

$.ajax({
    url:"../mAsistencias/days.php",
    type:"POST",
    dateType:"html",
    data:{id_usuario},
    success:function(datos){
        console.log(datos);
    mensaje = datos;
    switchSonido(mensaje);
    },
    error:function(xhr,status){
        alert("Error en metodo AJAX"); 
    },
});