<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$valor = trim($_POST['id_usuario']);
$fechaentrada = $_POST['fecha_entrada'];

$fecha=date("Y-m-d"); 

//seleccione registros tabla datos
$cadena = "SELECT
				*
			FROM
				asistencias
			WHERE
				id_datos='$valor' 
				AND 
				fecha_entrada='$fecha'";

$actualizar = mysqli_query($conexionLi, $cadena);

$arreglo = $actualizar->fetch_assoc();
	$data['result'] = $arreglo;

	if (is_null($data['result'])) {
		$data['result']['existe'] = false;
	}else{
		$data['result']['existe'] = true;
	}

echo json_encode($data);

mysqli_close($conexionLi);
?>