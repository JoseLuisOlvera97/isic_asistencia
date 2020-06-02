<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

include ("../funciones/calcularEdad.php");
//Recibo valores con el metodo POST
$valor = $_POST['cvetrabajador']	;

//seleccione registros tabla datos
$cadena = "SELECT
				id_datos,
				clave,
                nombre,
                ap_paterno,
                ap_materno,
                fecha_nac,
                correo,
                id_ecivil,
                curp
			FROM
				datos 
			WHERE
				clave = '$valor'";

$actualizar = mysqli_query($conexionLi, $cadena);

while($row = mysqli_fetch_array($actualizar)) {
    $nCompleto  = $row[2].' '.$row[3].' '.$row[4];
    $cve = $row[1];
    $fnac = $row[5];
    $nacimiento = date("d-m-Y", strtotime($row[5]));
    $edad       = CalculaEdad($fnac);
    $correo = $row[6];
    $ecivil = $row[7];
    $curp = $row[8];
    //$datos = 'Nombre de usuario: ', $row[2].' '.$row[3].' '.$row[4].' '.$row[1].' '.CalculaEdad($fnac).' '.$row[6].' '.$row[7].' '.$row[8];
    echo 'Nombre de usuario: ',$row[2].' '.$row[3].' '.$row[4], ' Clave: ',$row[1];
}

print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>