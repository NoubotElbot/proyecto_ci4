<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="es">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <?= csrf_meta() ?>
    <title>SICV | <?= $this->renderSection('titulo') ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
    <meta name="msapplication-tap-highlight" content="no">
    <link rel="shortcut icon" href="<?= base_url('images/logo.png') ?>" type="image/png">
    <link href="<?= base_url() . '/css/main.css' ?>" rel="stylesheet">
    <link href="<?= base_url() . '/css/micss.css' ?>" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<?= base_url('DataTables/DataTables-1.10.24/css/dataTables.bootstrap4.min.css') ?>" />
</head>

<body>
    <div class=" app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <?= $this->include('layouts/header') ?>
        <div class="app-main">
            <?= $this->include('layouts/sidebar') ?>
            <div class="app-main__outer">
                <div class="app-main__inner">
                    <?= $this->renderSection('contenido') ?>
                </div>
                <?= $this->include('layouts/footer') ?>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="<?= base_url('/js/jquery-3.5.1.min.js') ?>"></script>
    <script type="text/javascript" src="<?= base_url('DataTables/DataTables-1.10.24/js/jquery.dataTables.min.js') ?>"></script>
    <script type="text/javascript" src="<?= base_url('DataTables/DataTables-1.10.24/js/dataTables.bootstrap4.min.js') ?>"></script>
    <script type="text/javascript" src="<?= base_url('/js/popper/popper.min.js') ?>"></script>
    <script type="text/javascript" src="<?= base_url('/js/bootstrap/bootstrap.min.js') ?>"></script>
    <script type="text/javascript">
        $('.dropdown-toggle').dropdown();
        $('[data-toggle="tooltip"]').tooltip()
    </script>
    <script type="text/javascript" src="<?= base_url() . '/js/main.js' ?>"></script>
    <?= $this->renderSection('scripts') ?>
    <?= $this->renderSection('modals') ?>
</body>

</html>