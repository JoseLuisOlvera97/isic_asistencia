
<?php

include'../conexion/conexionli.php';

//Variable de Nombre
$varGral="-US";
$PS_nom = trim($_POST['PS_nom']);
$US_nom   = trim($_POST['US_nom']);
$FE_cad  = trim($_POST['FE_cad']);
$TE_nom      = trim($_POST['TE_nom']);
$checkDP     = trim($_POST['checkDP']);
$checkEC     = trim($_POST['checkEC']);
$checkUS     = trim($_POST['checkUS']);
$checkTM     = trim($_POST['checkTM']);
$activo      = 1;
$contra      = 12345678;
$fecha       = date("Y-m-d"); 

$cadenaMenu = "INSERT INTO usuarios
                            (id_dato,
                            id_tema,
                            nombre_usuario,
                            contra,
                            permiso_datos_persona,
                            permiso_ecivil,
                            permiso_usuario,
                            permiso_temas,
                            fecha_caducidad,
                            fecha_registro,
                            activo)
                            VALUES
                            ('$PS_nom',
                            '$TE_nom',
                            '$US_nom',
                            $contra,
                            '$checkDP',
                            '$checkEC',
                            '$checkUS',
                            '$checkTM',
                            '$FE_cad',
                            '$fecha',
                            $activo)";
$consultarMenu = mysqli_query($conexionLi, $cadenaMenu);
//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>