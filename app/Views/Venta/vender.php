<?= $this->extend('layouts/master') ?>

<?= $this->section('titulo') ?>
Registrar Venta
<?= $this->endSection() ?>
<?= $this->section('contenido') ?>
<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="pe-7s-cash icon-gradient bg-mean-fruit">
                </i>
            </div>
            <div>Registrar Venta
                <div class="page-title-subheading">
                </div>
            </div>
        </div>
        <div class="page-title-actions">
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#cancelarModal">
                Cancelar
            </button>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12 cuadro-alertas" style="display: none;">
        <div class="alert" role="alert">

        </div>
    </div>
    <div class="col">
        <div class="main-card mb-3 card">
            <div class="card-body viewdata">
                <div class="form-group row">
                    <label for="producto" class="col-sm-2 col-form-label">Productos</label>
                    <div class="col-sm-8">
                        <select class="custom-select" id="producto">
                        </select>
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-primary" id="venderBtn">Agregar</button>
                    </div>
                </div>
                <h5 class="card-title">Ventas</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-bordered text-center" id="tabla-venta" style="width:100%">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio Unit.</th>
                                <th>Total</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                        </tbody>
                    </table>
                </div>
                <h2 class="my-2" id="total"></h2>
            </div>
        </div>
    </div>
</div>
<?= $this->endSection() ?>

<?= $this->section('scripts') ?>
<script>
    var token =  '<?= csrf_hash() ?>';
</script>
<script src="<?= base_url('js/vender.js') ?>"></script>
<?= $this->endSection() ?>
<?= $this->section('modals') ?>
<div class="modal fade" id="cancelarModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">¡Atención!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Esta a punto de cancelar la venta. Perderá todos los productos agregados a la lista de venta.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Continuar vendiendo</button>
                <?= form_open('cancelar-venta') ?>
                <button type="submit" class="btn btn-warning">Cancelar Venta</button>
                <?= form_close() ?>
            </div>
        </div>
    </div>
</div>
<div class="viewmodal"></div>
<?= $this->endSection() ?>