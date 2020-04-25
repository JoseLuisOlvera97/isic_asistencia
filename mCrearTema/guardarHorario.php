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
$cadena = "INSERT INTO horarios
				(id_datos_persona,
				turno,
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
				d_salida,
				fecha_registro,
				hora_registro)
			VALUES
				('$IdPersona',
				'$turno',
				'$Le', 
				'$Ls', 
				'$Me', 
				'$Ms', 
				'$Mie', 
				'$Mis',
				'$Je',
				'$Js',
				'$Ve', 
				'$Vs', 
				'$Se', 
				'$Ss',
				'$De',
				'$Ds',
				'$fecha', 
				'$hora')";
$insertar = mysqli_query($conexionLi, $cadena);

//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>