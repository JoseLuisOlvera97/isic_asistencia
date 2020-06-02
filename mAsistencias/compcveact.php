<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$valor = $_POST['cvetrabajador']	;
$valor2 = 1;

//seleccione registros tabla datos
$cadena = "SELECT
				id_datos,
				clave,
                activo
			FROM
				datos 
			WHERE
				clave = '$valor'";

$actualizar = mysqli_query($conexionLi, $cadena);

while($row = mysqli_fetch_array($actualizar)) {

    $cvetrab = $row[2];
	if($cvetrab == $valor2) {
		$resultado = 'c';
	}else{
		$resultado = 'd';
	}
	echo $resultado;
	}  

print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>