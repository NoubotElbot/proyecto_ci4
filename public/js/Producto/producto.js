function agregar() {
  $.ajax({
    type: "POST",
    url: "producto/new",
    data: {
      csrf_test_name: $("meta[name='X-CSRF-TOKEN']").attr("content"),
    },
    dataType: "json",
    beforeSend: function () {
      $("#agregarBtn").attr("disable", "disabled");
      $("#agregarBtn").html('<i class="fa fa-spin fa-spinner"></i>');
    },
    complete: function () {
      $("#agregarBtn").removeAttr("disable");
      $("#agregarBtn").html(`<span class="btn-icon-wrapper pr-2 opacity-7">
                                 <i class="fa fa-plus-circle fa-w-20"></i>
                            </span>Nuevo Producto`);
    },
    success: function (response) {
      if (response.success) {
        $(".viewmodal").html(response.success);
        $("#producto-agregar-modal").on("shown.bs.modal	", function (event) {
          // do something...
          $("#codigo").focus();
        });
        $("#producto-agregar-modal").modal("show");
      }
    },
    error: function (xhr, ajaxOption, thrownError) {
      alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError);
    },
  });
}

function edit(id) {
  $.ajax({
    type: "POST",
    url: "producto/editar",
    data: {
      id: id,
      csrf_test_name: $("meta[name='X-CSRF-TOKEN']").attr("content"),
    },
    dataType: "json",
    success: function (response) {
      if (response.success) {
        $(".viewmodal").html(response.success);
        $("#producto-editar-modal").modal("show");
      }
    },
    error: function (xhr, ajaxOption, thrownError) {
      alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError);
    },
  });
}

function activar_desactivar(id) {
  $.ajax({
    type: "POST",
    url: "producto/borrar",
    data: {
      id: id,
      csrf_test_name: $("meta[name='X-CSRF-TOKEN']").attr("content"),
    },
    dataType: "json",
    success: function (response) {
      if (response.success) {
        $(".viewmodal").html(response.success);
        $("#producto-borrar-modal").modal("show");
      }
    },
    error: function (xhr, ajaxOption, thrownError) {
      alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError);
    },
  });
}
var table = $("#myTable").DataTable({
  language: {
    processing: "Procesando...",
    lengthMenu: "Mostrar _MENU_ registros",
    zeroRecords: "No se encontraron resultados",
    emptyTable: "Ningún dato disponible en esta tabla",
    info:
      "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
    infoFiltered: "(filtrado de un total de _MAX_ registros)",
    search: "Buscar:",
    infoThousands: ",",
    loadingRecords: "Cargando...",
    paginate: {
      first: "Primero",
      last: "Último",
      next: "Siguiente",
      previous: "Anterior",
    },
    aria: {
      sortAscending: ": Activar para ordenar la columna de manera ascendente",
      sortDescending: ": Activar para ordenar la columna de manera descendente",
    },
    buttons: {
      copy: "Copiar",
      colvis: "Visibilidad",
      collection: "Colección",
      colvisRestore: "Restaurar visibilidad",
      copyKeys:
        "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br /> <br /> Para cancelar, haga clic en este mensaje o presione escape.",
      copySuccess: {
        1: "Copiada 1 fila al portapapeles",
        _: "Copiadas %d fila al portapapeles",
      },
      copyTitle: "Copiar al portapapeles",
      csv: "CSV",
      excel: "Excel",
      pageLength: {
        "-1": "Mostrar todas las filas",
        1: "Mostrar 1 fila",
        _: "Mostrar %d filas",
      },
      pdf: "PDF",
      print: "Imprimir",
    },
    decimal: ",",
    searchBuilder: {
      add: "Añadir condición",
      button: {
        0: "Constructor de búsqueda",
        _: "Constructor de búsqueda (%d)",
      },
      clearAll: "Borrar todo",
      condition: "Condición",
      conditions: {
        date: {
          after: "Despues",
          before: "Antes",
          between: "Entre",
          empty: "Vacío",
          equals: "Igual a",
          not: "No",
          notBetween: "No entre",
          notEmpty: "No Vacio",
        },
        moment: {
          after: "Despues",
          before: "Antes",
          between: "Entre",
          empty: "Vacío",
          equals: "Igual a",
          not: "No",
          notBetween: "No entre",
          notEmpty: "No vacio",
        },
        number: {
          between: "Entre",
          empty: "Vacio",
          equals: "Igual a",
          gt: "Mayor a",
          gte: "Mayor o igual a",
          lt: "Menor que",
          lte: "Menor o igual que",
          not: "No",
          notBetween: "No entre",
          notEmpty: "No vacío",
        },
        string: {
          contains: "Contiene",
          empty: "Vacío",
          endsWith: "Termina en",
          equals: "Igual a",
          not: "No",
          notEmpty: "No Vacio",
          startsWith: "Empieza con",
        },
      },
      data: "Data",
      deleteTitle: "Eliminar regla de filtrado",
      leftTitle: "Criterios anulados",
      logicAnd: "Y",
      logicOr: "O",
      rightTitle: "Criterios de sangría",
      title: {
        0: "Constructor de búsqueda",
        _: "Constructor de búsqueda (%d)",
      },
      value: "Valor",
    },
    searchPanes: {
      clearMessage: "Borrar todo",
      collapse: {
        0: "Paneles de búsqueda",
        _: "Paneles de búsqueda (%d)",
      },
      count: "{total}",
      countFiltered: "{shown} ({total})",
      emptyPanes: "Sin paneles de búsqueda",
      loadMessage: "Cargando paneles de búsqueda",
      title: "Filtros Activos - %d",
    },
    select: {
      1: "%d fila seleccionada",
      _: "%d filas seleccionadas",
      cells: {
        1: "1 celda seleccionada",
        _: "$d celdas seleccionadas",
      },
      columns: {
        1: "1 columna seleccionada",
        _: "%d columnas seleccionadas",
      },
    },
    thousands: ".",
  },
  ajax: {
    url: "producto/lista",
    type: "POST",
    data: {
      csrf_test_name: $("meta[name='X-CSRF-TOKEN']").attr("content"),
    },
    dataSrc: "data",
    complete: ()=>{$(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })}
  },
  columns: [
    {
      data: "codigo",
    },
    {
      data: "nombre_producto",
    },
    {
      data: "categoria",
    },
    {
      data: "precio_in",
    },
    {
      data: "precio_out",
    },
    {
      data: "stock",
    },
    {
      data: "stock_critico",
    },
    {
      data: "username",
    },
    {
      data: "deleted_at",
    },
    {
      data: "opciones",
    },
  ],
});
