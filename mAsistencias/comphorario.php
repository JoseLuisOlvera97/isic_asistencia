<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$valor = $_POST['idusr']	;

//seleccione registros tabla datos
$cadena = "SELECT
				id_horario,
				id_datos_persona
			FROM
				horarios 
			WHERE
            id_datos_persona = '$valor'";

$actualizar = mysqli_query($conexionLi, $cadena);

while($row = mysqli_fetch_array($actualizar)) {
    $cvetrab = $row[1];
	if ($cvetrab == $valor) {
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