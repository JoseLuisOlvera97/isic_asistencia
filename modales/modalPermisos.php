<div class="modal fade" id="ModalPermisos" tabindex="-1" role="dialog" aria-labelledby="ModalPermisosLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="txtTitularPermisos">Horarios</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <input type="hidden"  id="IDUsM">
      <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <input type="checkbox"  data-toggle="toggle" data-size="sm" data-onstyle="outline-success" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="checkDPM">
                    &nbsp; Datos Personales
                    </button>
                </div>
                <div class="col-lg-6">
                    <input type="checkbox"  data-toggle="toggle" data-size="sm" data-onstyle="outline-success" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="checkECM">
                    &nbsp; Estado Civil
                    </button>
                </div>
                <div class="col-lg-6">
                  <br>
                    <input type="checkbox"  data-toggle="toggle" data-size="sm" data-onstyle="outline-success" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="checkUSM">
                    &nbsp; Usuarios
                  </button>
                </div>
                <div class="col-lg-6">
                    <br>
                    <input type="checkbox"  data-toggle="toggle" data-size="sm" data-onstyle="outline-success" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="checkTMM">
                    &nbsp; Temas
                    </button>
                </div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button class="btn btn-primary" type="button" id="BtnGuardarH" disable onclick="GuardarUS();">Guardar</button>
      </div>
    </div>
  </div>
</div> 