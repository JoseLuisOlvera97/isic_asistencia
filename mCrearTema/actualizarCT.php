<?php
// Conexion mysqli
include'../conexion/conexionli.php';

//Recibo valores con el metodo POST
$id          = $_POST['id'];
$colorL = trim($_POST['colorL']);
$colorB = trim($_POST['colorB']);
$colorBF = trim($_POST['colorBF']);
$colorBD = trim($_POST['colorBD']);

$fecha=date("Y-m-d"); 
$hora=date ("H:i:s");

//Inserto registro en tabla TEMAS 
$cadena = "UPDATE temas 
			SET
                color_letra = '$colorL',
                color_base = '$colorB',
                color_base_fuerte = '$colorBF',
                color_borde = '$colorBD',
                fecha_registro = '$fecha', 
				hora_registro  = '$hora'
			WHERE 
                id_tema= $id";

$actualizar = mysqli_query($conexionLi, $cadena);

//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>