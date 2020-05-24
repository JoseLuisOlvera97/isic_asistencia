<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$id          = $_POST['id'];
$checkDP    = trim($_POST['checkDP']); 
$checkEC    = trim($_POST['checkEC']); 
$checkUS    = trim($_POST['checkUS']); 
$checkTM    = trim($_POST['checkTM']); 

//Se actualiza registro en tabla usuarios
$cadena = "UPDATE usuarios 
			SET 
				permiso_datos_persona       = '$checkDP',
				permiso_ecivil              = '$checkEC',
				permiso_usuario             = '$checkUS',
				permiso_temas               = '$checkTM'
			WHERE 
				id_usuario = $id";

$actualizar = mysqli_query($conexionLi, $cadena);

//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?> 