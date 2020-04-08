<!-- Modal -->
<div class="modal fade" id="modalcontra" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Cambio de contraseña</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form action="" id="frmcontra">
          <div class="modal-body" >
            <div class="row">
              <div class="col-xs-4 col-ms-4 col-md-6 col-lg-6">
                    <label for="conn">Contraseña nueva:</label>
                    <input type="text" id="conn" class="form-control" placeholder="Escribir"  autofocus required>
                </div>
                <div class="col-xs-4 col-ms-4 col-md-6 col-lg-6">
                    <label for="reccn">Rectifica contraseña:</label>
                    <input type="text" id="reccn" class="form-control" placeholder="Escribir" onkeyup="comparepsw();" disabled required>
                </div>
                <br>
                      <div id="pswd_info" class="col-xs-4 col-ms-4 col-md-12 col-lg-12">
                        <h4>La contraseña debería cumplir con los siguientes requerimientos:</h4>
                        <ul>
                            <li id="letter" class="invalid">Al menos debería tener <strong>una letra en minuscula</strong></li>
                            <li id="capital" class="invalid">Al menos debería tener <strong>una letra en mayúsculas</strong></li>
                            <li id="number" class="invalid">Al menos debería tener <strong>un número</strong></li>
                            <li id="length" class="invalid">Debería tener <strong>8 carácteres</strong> como mínimo</li>
                            <li id="con" class="invalid">Las <strong>contraseñas</strong> deben coincidir</li>
                            <li id="car" class="invalid">Al menos deberia tener <strong>un caracter</strong> especial</li>
                        </ul>
                      </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary"><i class="fa fa-eye" id="mostrar"></i></button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" onclick="generarcontra();">Generar contraseña</button>
            <button type="button" class="btn btn-primary" onclick="cambiarPass();" id="btnguardar" disabled>Guardar</button>
          </div>
      </form>
    </div>
  </div>
</div>