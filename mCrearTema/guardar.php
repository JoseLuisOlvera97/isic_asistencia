<?php

include'../conexion/conexionli.php';

//Variable de Nombre
$varGral="-CT";

$nombre = trim($_POST['nombre']);
$colorL = trim($_POST['colorL']);
$colorB = trim($_POST['colorB']);
$colorBF = trim($_POST['colorBF']);
$colorBD = trim($_POST['colorBD']);

$activo    = 1;

$fecha=date("Y-m-d"); 
$hora=date ("H:i:s");
//Inserto registro en tabla pacientes 
$cadena = "INSERT INTO temas
				(nombre_tema,
				color_letra, 
				color_base, 
				color_base_fuerte, 
				color_borde, 
				fecha_registro, 
				hora_registro,
				activo)
			VALUES
				('$nombre',
				'$colorL',
				'$colorB', 
				'$colorBF', 
				'$colorBD', 
				'$fecha', 
				'$hora',
				$activo)";
$insertar = mysqli_query($conexionLi, $cadena);

//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>