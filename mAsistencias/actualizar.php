<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$id = $_POST["id_usuario"];
$incidencia = $_POST["incidencia"];
$fecha=date("Y-m-d"); 
$hora=date ("H:i:s");

//Inserto registro en tabla pacientes 
$cadena = "UPDATE asistencias
			SET
				fecha_salida         = '$fecha',
				hora_salida     = '$hora', 
				incidencia_salida     = '$incidencia'
			WHERE 
				id_datos= $id";
$actualizar = mysqli_query($conexionLi, $cadena);

//En caso de error imprime
echo true;
//Cierro la conexion
mysqli_close($conexionLi);
?> 