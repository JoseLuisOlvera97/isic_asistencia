<?php
//Variable de Nombre
$varGral="-AS";
?>

<form id="frmAsistencia<?php echo $varGral?>">
<input type="hidden"  id="cveres">
<input type="hidden"  id="cveactivo">
<input type="hidden"  id="idusuario">
    <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="form-group reloj">
                <label for="" id="reloj">hola</label>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-10">
            <div class="form-group">
                <label for="cvetrabajador">Clave del Trabajador:</label>
                <input type="text" class="form-control " id="cvetrabajador" autofocus>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2">
            <div class="form-group">
                <label for="checksound">Sonido</label><br>
                <input type="checkbox"  data-toggle="toggle" data-size="sm" data-onstyle="outline-success" data-offstyle="outline-danger" data-on="<i class='fas fa-volume-up'></i>" data-off="<i class='fas fa-volume-mute'></i>" id="checksound">
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="form-group">
                <label id="nombre-AS">
                </label>
                <label id="insidencia-AS">
                </label>
            </div>
        </div>
    </div>

</form>