<?php
//Variable de Nombre
$varGral="-CT";
?>

<form id="frmActualizar<?php echo $varGral?>">
    <input type="hidden"  id="tId">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="form-group">
                <label for="enombreTema">Nombre:</label>
                <input type="text" class="form-control " id="enombreTema" disabled required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group centrar">
                <label for="ecolorLetra">Color de Letra:</label>
                <input type="color" class="form-control inputColor" id="ecolorLetra" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group centrar">
                <label for="ecolorBase">Color Base:</label>
                <input type="color" class="form-control inputColor" id="ecolorBase" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group centrar">
                <label for="ecolorBaseF">Color Base Fuerte:</label>
                <input type="color" class="form-control inputColor" id="ecolorBaseF" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group centrar">
                <label for="ecolorBorde">Color de Borde:</label>
                <input type="color" class="form-control inputColor" id="ecolorBorde" autofocus required>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col text-left">
                    <button  type="button" class="btn btn-outline-danger  activo btnEspacio" id="btnCancelarA<?php echo $varGral?>">
                        <i class='fa fa-ban fa-lg'></i>
                        Cancelar
                    </button>
                </div>

                <div class="col text-center">
                    <button  type="button" class="btn btn-outline-success  activo btnEspacio" onclick="ProbartemaE(), audio()" id="btnProbarA<?php echo $varGral?>">
                        <i id="icoprobb<?php echo $varGral?>" class='fas fa-caret-square-right fa-lg'></i>
                        Probar Tema
                    </button>
                </div>

                <div class="col text-right">
                    <button  type="submit" class="btn btn-outline-primary  activo btnEspacio" id="btnActualizar<?php echo $varGral?>">
                        <i class='fa fa-sync-alt fa-lg'></i>
                        Actualizar Información
                    </button>
                </div>
            </div>
        </div>

    </div>

</form> 