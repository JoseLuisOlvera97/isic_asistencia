<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$valor = $_POST['id_usuario']	;
$dia = date("D");

//seleccione registros tabla datos
$cadena = "SELECT
                id_datos_persona,
                l_entrada,
                l_salida,
                m_entrada,
                m_salida,
                mi_entrada,
                mi_salida,
                j_entrada,
                j_salida,
                v_entrada,
                v_salida,
                s_entrada,
                s_salida,
                d_entrada,
                d_salida
			FROM
				horarios 
			WHERE
            id_datos_persona = '$valor'";

$actualizar = mysqli_query($conexionLi, $cadena);

while($row = mysqli_fetch_array($actualizar)) {
    if ($dia == "Mon") {
		if ($row[1] == "00:00:00" && $row[2] == "00:00:00") {
			$resultado = "No";
		}
		else{
			$resultado = "Si";
		}
	}
	if ($dia == "Tue") {
		if ($row[3] == "00:00:00" && $row[4] == "00:00:00") {
			$resultado = "No";
		}
		else{
			$resultado = "Si";
		}
	}
	if ($dia == "Wed") {
		if ($row[5] == "00:00:00" && $row[6] == "00:00:00") {
			$resultado = "No";
		}
		else{
			$resultado = "Si";
		}
	}
	if ($dia == "Thu") {
		if ($row[7] == "00:00:00" && $row[8] == "00:00:00") {
			$resultado = "No";
		}
		else{
			$resultado = "Si";
		}
	}
	if ($dia == "Fri") {
		if ($row[9] == "00:00:00" && $row[10] == "00:00:00") {
			$resultado = "No";
		}
		else{
			$resultado = "Si";
		}
	}
	if ($dia == "Sat") {
		if ($row[11] == "00:00:00" && $row[12] == "00:00:00") {
			$resultado = "No";
		}
		else{
			$resultado = "Si";
		}
	}
	if ($dia == "Sun") {
		if ($row[13] == "00:00:00" && $row[14] == "00:00:00") {
			$resultado = "No";
		}
		else{
			$resultado = "Si";
		}
    }
    echo $resultado;
}

print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>