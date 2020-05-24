<?php
//Variable de Nombre
$varGral="-US";
?>
<form id="frmActualizar<?php echo $varGral?>">

    <input type="hidden"  id="eIDUs">
    <input type="hidden"  id="USress">
    <input type="hidden"  id="USres2">

    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group">
                <label for="PS_nomm">Persona:</label>
                <select id="PS_nomm" class="select2" style="width: 100%" disabled>

                </select>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <div class="form-group">
                <label for="US_nomm">Nombre de Usuario:</label>
                <input type="text" class="form-control" id="US_nomm"   autofocus required >
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group">
                <label for="FE_cadd">Fecha de Caducidad:</label>
                <input type="date" class="form-control activo" id="FE_cadd" required value="<?php echo $fecha ?>">
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group">
                <label for="TE_nomm">Temas:</label>
                <select id="TE_nomm" class="select2" style="width: 100%" >

                </select>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-12 ">
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <input type="checkbox"  data-toggle="toggle" data-size="sm" data-onstyle="outline-success" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="checkDP2">
                    &nbsp; Datos Personales
                    </button>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <input type="checkbox"  data-toggle="toggle" data-size="sm" data-onstyle="outline-success" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="checkEC2">
                    &nbsp; Estado Civil
                    </button>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <input type="checkbox"  data-toggle="toggle" data-size="sm" data-onstyle="outline-success" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="checkUS2">
                    &nbsp; Usuarios
                    </button>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <input type="checkbox"  data-toggle="toggle" data-size="sm" data-onstyle="outline-success" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="checkTM2">
                    &nbsp; Temas
                    </button>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <br>
                <div class="col text-left">
                    <br>
                    <button  type="button" class="btn btn-outline-danger  activo btnEspacio" id="btnCancelarE<?php echo $varGral?>">
                        <i class='fa fa-ban fa-lg'></i>
                        Cancelar
                    </button>
                </div>
                <div class="col text-right">
                    <br>
                    <button  type="submit" class="btn btn-outline-primary  activo btnEspacio" id="btnActualizar<?php echo $varGral?>">
                        <i class='fa fa-save fa-lg'></i>
                        Actualizar Información
                    </button>
                </div>
            </div>
        </div>
    </div>
</form>