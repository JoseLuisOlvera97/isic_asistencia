<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$id = $_POST["id_usuario"];
$incidencia = $_POST["incidencia"];
$fecha=date("Y-m-d"); 
$hora=date ("H:i:s");

//Inserto registro en tabla pacientes 
$cadena = "INSERT INTO asistencias
				(id_datos,
				fecha_entrada,
				hora_entrada,
				incidencia_entrada)
			VALUES
				('$id',
				'$fecha',
				'$hora',
				'$incidencia')";
$insertar = mysqli_query($conexionLi, $cadena);

//En caso de error imprime
echo true;
//Cierro la conexion
mysqli_close($conexionLi);
?> 