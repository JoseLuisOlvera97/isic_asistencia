<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$valor = $_POST['cvetrabajador']	;

//seleccione registros tabla datos
$cadena = "SELECT
				id_datos,
				clave
			FROM
				datos 
			WHERE
				clave = '$valor'";

$actualizar = mysqli_query($conexionLi, $cadena);

while($row = mysqli_fetch_array($actualizar)) {
    $id_usuario = $row[0];
	
	echo $id_usuario;
	}  

print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>