<?php
//Variable de Nombre
$varGral="-US";
?>
<form id="frmGuardar<?php echo $varGral?>">


    <input type="hidden"  id="US_res">
    <input type="hidden"  id="PerNameCompG">
    
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group">
                <label for="PS_nom">Persona:</label>
                <select id="PS_nom" class="select2" style="width: 100%" >

                </select>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <div class="form-group">
                <label for="US_nom">Nombre de Usuario:</label>
                <input type="text" class="form-control" id="US_nom"   autofocus required >
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group">
                <label for="FE_cad">Fecha de Caducidad:</label>
                <input type="date" class="form-control activo" id="FE_cad" required value="<?php echo $fecha ?>">
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="form-group">
                <label for="TE_nom">Temas:</label>
                <select id="TE_nom" class="select2" style="width: 100%" >

                </select>
            </div>
        </div>

        <div class="container">
            <div class="row">
                
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <br>
                    <section id = "DP">
                        <input type="checkbox"  data-toggle="toggle" data-size="sm" data-onstyle="outline-success" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="checkDP">
                        &nbsp; Datos Personales
                        </button>
                    </section>
                </div>
                
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <br>
                    <section id = "EC">
                        <input type="checkbox"  data-toggle="toggle" data-size="sm" data-onstyle="outline-success" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="checkEC">
                        &nbsp; Estado Civil
                        </button>
                    </section>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <section id = "US">  
                        <br>                  
                        <input type="checkbox"  data-toggle="toggle" data-size="sm" data-onstyle="outline-success" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="checkUS">
                        &nbsp; Usuarios
                        </button>
                    </section>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <section id = "TM">
                        <br>
                        <input type="checkbox"  data-toggle="toggle" data-size="sm" data-onstyle="outline-success" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="checkTM">
                        &nbsp; Temas
                        </button>
                    </section>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <br>
                <div class="col text-left">
                    <br>
                    <button  type="button" class="btn btn-outline-danger  activo btnEspacio" id="btnCancelar<?php echo $varGral?>">
                        <i class='fa fa-ban fa-lg'></i>
                        Cancelar
                    </button>
                </div>
                <div class="col text-right">
                    <br>
                    <button  type="submit" class="btn btn-outline-primary  activo btnEspacio" id="btnGuardar<?php echo $varGral?>">
                        <i class='fa fa-save fa-lg'></i>
                        Guardar Información
                    </button>
                </div>
            </div>
        </div>
    </div>


</form>