<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$id          = $_POST['id'];
$TE_nomm     = $_POST['TE_nomm']; 
$PS_nomm = $_POST['PS_nomm'];
$US_nomm   = trim($_POST['US_nomm']);
$FE_cadd  = trim($_POST['FE_cadd']); 
$checkDP2    = trim($_POST['checkDP2']); 
$checkEC2    = trim($_POST['checkEC2']); 
$checkUS2    = trim($_POST['checkUS2']); 
$checkTM2    = trim($_POST['checkTM2']); 

//Se actualiza registro en tabla usuarios
$cadena = "UPDATE usuarios 
			SET 
				nombre_usuario        		= '$US_nomm',
				id_dato 		            = $PS_nomm,
				id_tema                     = $TE_nomm,
                fecha_caducidad 			= '$FE_cadd',
				permiso_datos_persona       = '$checkDP2',
				permiso_ecivil              = '$checkEC2',
				permiso_usuario             = '$checkUS2',
				permiso_temas               = '$checkTM2'
			WHERE 
				id_usuario = $id";

$actualizar = mysqli_query($conexionLi, $cadena);

//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>