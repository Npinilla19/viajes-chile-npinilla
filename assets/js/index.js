$(function () {
  $(".boton1").click(function () {
    $(".texto1").hide();
  });

  $(".boton1").dblclick(function () {
    $(".texto1").show();
  });

  $(".boton2").click(function () {
    $(".texto2").hide();
  });

  $(".boton2").dblclick(function () {
    $(".texto2").show();
  });

  $(".boton3").click(function () {
    $(".texto3").hide();
  });

  $(".boton3").dblclick(function () {
    $(".texto3").show();
  });

  $("[data-bs-toggle='tooltip']").tooltip();
});
