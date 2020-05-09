<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$valor = $_POST['nombre']	;

//seleccione registros tabla datos
$cadena = "SELECT
				id_tema,
				nombre_tema 
			FROM
				temas 
			WHERE
				nombre_tema = '$valor'";

$actualizar = mysqli_query($conexionLi, $cadena);

while($row = mysqli_fetch_array($actualizar)) {
	$nombretem = $row[1];
	if ($nombretem == $valor) {
		$resultado = 'Si';
	}else{
		$resultado = 'No';
	}
	echo $resultado;
	}  

print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>