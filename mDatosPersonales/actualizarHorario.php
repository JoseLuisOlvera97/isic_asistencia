<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$IdPersona = trim($_POST['IdPersona']);
$turno     = trim($_POST['turno']);
$Le        = trim($_POST['Le']);
$Ls        = trim($_POST['Ls']);
$Me        = trim($_POST['Me']);
$Ms        = trim($_POST['Ms']);
$Mie       = trim($_POST['Mie']);
$Mis       = trim($_POST['Mis']);
$Je        = trim($_POST['Je']);
$Js        = trim($_POST['Js']);
$Ve        = trim($_POST['Ve']);
$Vs        = trim($_POST['Vs']);
$Se        = trim($_POST['Se']);
$Ss        = trim($_POST['Ss']);
$De        = trim($_POST['De']);
$Ds        = trim($_POST['Ds']);

$fecha=date("Y-m-d"); 
$hora=date("H:i:s");

//Inserto registro en tabla pacientes 
$cadena = "UPDATE horarios
			SET
				turno            = '$turno',
				l_entrada        = '$Le',
				l_salida         = '$Ls', 
				m_entrada        = '$Me', 
				m_salida         = '$Ms', 
				mi_entrada       = '$Mie', 
				mi_salida        = '$Mis', 
				j_entrada        = '$Je', 
				j_salida         = '$Js', 
				v_entrada        = '$Ve', 
				v_salida         = '$Vs',
				s_entrada        = '$Se', 
				s_salida         = '$Ss', 
				d_entrada        = '$De', 
				d_salida         = '$Ds', 
				fecha_registro   = '$fecha', 
				hora_registro    = '$hora'
			WHERE 
				id_datos_persona=$IdPersona";
$actualizar = mysqli_query($conexionLi, $cadena);

//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>