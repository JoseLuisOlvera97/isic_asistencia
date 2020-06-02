<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$valor = trim($_POST['id_usuario']);

//seleccione registros tabla datos
$cadena = "SELECT
				*
			FROM
				horarios
			WHERE
				id_datos_persona = '$valor'";

$actualizar = mysqli_query($conexionLi, $cadena);

$arreglo = $actualizar->fetch_assoc();
	$data['result'] = $arreglo;

	if (is_null($data['result'])) {
		$data['result']['existe'] = false;
	}else{
		$data['result']['existe'] = true;
	}

echo json_encode($data);
//Cierro la conexion
mysqli_close($conexionLi);
?> 