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
                                                    $.ajax({
                                                        url:"../mAsistencias/days.php",
                                                        type:"POST",
                                                        dateType:"html",
                                                        data:{id_usuario},
                                                        success:function(datos){
                                                            if(datos == 'Si') {
                                                                rHorario(id_usuario)
                                                                .then((horario) => {
                                                                    var incidencia;
                                                                    var tipo;
                                                                    rChAsistencia(id_usuario, now)
                                                                    .then(function(asistencia){
                                                                        if (asistencia.fecha_salida) {
                                                                            alertify.error("Ya asististe hoy");
                                                                            mensaje = "Ya asististe hoy";
                                                                            switchSonido(mensaje);
                                                                        }else{
                                                                            if (asistencia.fecha_entrada) {
                                                                                tipo = "Salida";
                                                                                incidencia = rInciencia(Dia, now, horario, tipo);
                                                                                mensajefin = incidencia.mensaje;
                                                                                colorfin = incidencia.color;
                                                                                if (mensajefin == "Fuera de rango") {
                                                                                    alertify.error("Estas fuera de tu hora de salida",2);
                                                                                    mensaje = "Estas fuera de tu hora de salida";
                                                                                    switchSonido(mensaje);
                                                                                }else{
                                                                                    Salida(id_usuario, mensajefin, colorfin);
                                                                                }
                                                                            }else{
                                                                                tipo = "Entrada";
                                                                                incidencia = rInciencia(Dia, now, horario, tipo);
                                                                                mensajefin = incidencia.mensaje;
                                                                                colorfin = incidencia.color;
                                                                                if (mensajefin == "Fuera de rango") {
                                                                                    alertify.error("Estas fuera de tu hora de entrada",2);
                                                                                    mensaje = "Estas fuera de tu hora de entrada";
                                                                                    switchSonido(mensaje);
                                                                                }else{
                                                                                    Entrada(id_usuario, mensajefin, colorfin);
                                                                                }
                                                                            }
                                                                        }
                                                                    })
                                                                });
                                                            }
                                                            else{
                                                                alertify.message("Hoy no circulas", 2);
                                                                mensaje = "Hoy no circulas";
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

function rHorario(id_usuario){
    return new Promise((resolve, reject) => {
        $.ajax({
            url:"../mAsistencias/rHorario2.php",
            type:"POST",
            dataType:"json",
            data:{id_usuario},
            success:function(respu){
                resolve(respu.result);
            },error:function(xhr,status){
                reject("Error en el metodo AJAX Horario");
            },
        });
    });
}

function rInciencia(Dia, now, horario, tipo){
    switch (Dia) {
        case 'Lunes':
            var entrada = new Date(now.toDateString() + " " + horario.l_entrada);
            var salida = new Date(now.toDateString() + " " + horario.l_salida);
            break;
        case 'Martes':
            var entrada = new Date(now.toDateString() + " " + horario.m_entrada);
            var salida = new Date(now.toDateString() + " " + horario.m_salida);
            break;
        case 'Miercoles':
            var entrada = new Date(now.toDateString() + " " + horario.mi_entrada);
            var salida = new Date(now.toDateString() + " " + horario.mi_salida);
            break;
        case 'Jueves':
            var entrada = new Date(now.toDateString() + " " + horario.j_entrada);
            var salida = new Date(now.toDateString() + " " + horario.j_salida);
            break;
        case 'Viernes':
            var entrada = new Date(now.toDateString() + " " + horario.v_entrada);
            var salida = new Date(now.toDateString() + " " + horario.v_salida);
            break;
        case 'Sabado':
            var entrada = new Date(now.toDateString() + " " + horario.s_entrada);
            var salida = new Date(now.toDateString() + " " + horario.s_salida);
            break;
        case 'Domingo':
            var entrada = new Date(now.toDateString() + " " + horario.d_entrada);
            var salida = new Date(now.toDateString() + " " + horario.d_salida);
            break;
        default:
            return false;
            break;
    }

    var mensaje;
    var color;

    if (tipo == "Entrada") {
        if (now.getTime() < (entrada.getTime() - 1000*60*10) || now.getTime() > salida.getTime() - 1000*60*5){
            mensaje = "Fuera de rango";
            color = "azul";
        }else if (now.getTime() >= (entrada.getTime() - 1000*60*10) && now.getTime() <= (entrada.getTime() + 1000*60*5)) {
            mensaje = "Entrada Puntual";
            color = "verde2";
        }else if (now.getTime() >= (entrada.getTime() + 1000*60*5) && now.getTime() <= (entrada.getTime() + 1000*60*15)) {
            mensaje = "Retardo Menor";
            color = "naranja";
        }else if (now.getTime() >= (entrada.getTime() + 1000*60*15) && now.getTime() <= (salida.getTime() - 1000*60*5)){
            mensaje = "Retardo Mayor";
            color = "rojo2";
        }
    }else{ 
    if (tipo == "Salida") {
        if (now.getTime() < (salida.getTime() - 1000*60*5) || now.getTime() > (salida.getTime() + 1000*60*30)) {
            mensaje = "Fuera de rango";
            color = "azul";
        }else if (now.getTime() >= (salida.getTime() - 1000*60*5) && now.getTime() <= (salida.getTime() + 1000*60*30)) {
            mensaje = "Salida";
            color = "azul";
        }
    }
}

    return{
        mensaje,
        color
    }
}

function rChAsistencia(id_usuario, now){
    fecha_entrada = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDay();
    return new Promise((resolve, reject) => {
        $.ajax({
            url:"../mAsistencias/rChAsistencia.php",
            type:"POST",
            dataType:"json",
            data:{id_usuario, fecha_entrada},
            success:function(respuest){
                resolve(respuest.result);
            },
            error:function(xhr,status){
                alert("Error en metodo AJAX"); 
                reject("Error en el metodo AJAX Horario");
            },
        });
    });
}

function Salida(id_usuario, incidencia, colorfin){

    $.ajax({
        url:"../mAsistencias/actualizar.php",
        type:"POST",
        dateType:"html",
        data:{id_usuario, incidencia},
        success:function(respue){
            mensaje = "Gracias por registrar su salida";
            switchSonido(mensaje);
            alertify.success("Gracias por registrar su salida");
            datos_mos(id_usuario, colorfin);
            actividad  ="Se ha registrado una salida para la clave "+id_usuario;
            log(actividad,id_usuario);
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
            reject("Error en el metodo AJAX Salida");
        },
    });
}

function Entrada(id_usuario, incidencia, colorfin){

    $.ajax({
        url:"../mAsistencias/guardar.php",
        type:"POST",
        dateType:"html",
        data:{id_usuario, incidencia},
        success:function(respue){
            $('#insidencia-AS').html(mensajefin);
            datos_mos(id_usuario, colorfin);
            alertify.success("Gracias por registrar su entrada");
            actividad  ="Se ha registrado una entrada para la clave "+id_usuario;
            log(actividad,id_usuario);
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
            reject("Error en el metodo AJAX Entrada");
        },
    });
}

function Time(colorfin, colo){
    setTimeout(function(){
    $("#nombre-AS").html("");
    $("#insidencia-AS").html("");
    $("#nombre-AS").removeClass(colorfin);
    $("#insidencia-AS").removeClass(colo);
    },6000);
}

function datos_mos(id_usuario, colorfin){
    $.ajax({
        url:"../mAsistencias/datos.php",
        type:"POST",
        dateType:"html",
        data:{id_usuario},
        success:function(datos){
            colo = "pers";
            $("#cvetrabajador").val("");
            $("#cvetrabajador").focus();
            $("#insidencia-AS").html(mensajefin);
            $('#nombre-AS').html(datos);
            $("#nombre-AS").addClass(colorfin);
            $("#insidencia-AS").addClass(colo);
            Time(colorfin, colo);
        mensaje = datos;
        switchSonido(mensaje);
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}