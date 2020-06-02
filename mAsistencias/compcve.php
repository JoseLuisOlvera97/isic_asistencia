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
    $cvetrab = $row[1];
	if ($cvetrab == $valor) {
		$resultado = "a";
	}else{
		$resultado = "b";
	}
	echo $resultado;
	}  

print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>