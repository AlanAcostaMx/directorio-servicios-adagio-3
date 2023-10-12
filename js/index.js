$(document).ready(function(){

  $('#search-bar').keyup(function(){
    var services = $('.servicios');
    var input = $(this).val().toLowerCase();
    var elem_id = '';
    var elem_idStr = '';

    if(input == ''){
      // console.log("Input vacio! Mostrando botones...");
      $('.titulo-serv').hide();
      $('.servicios').hide();
      $('.showHide').show();
    }else{
      // Este ciclo recorre todas las ULs con la clase "servicios", las ULs son las que tienen los datos de contacto de cada servicio  
      for(let i = 0; i < services.length; i++){
          elem_id = $(services[i]).attr('id').toLowerCase(); // ul-albanileria
          elem_idStr = elem_id.substring(3); // albanileria
          let ulId = '';
          ulId = $('#' + elem_id);
          let titId = '';
          titId = $('#tit-' + elem_idStr);
          
          if (!elem_idStr.includes(input)) {
            // Mostrar todos los botones y ocultar todas las ULs
            titId.hide();
            ulId.hide();
          } else {
            // Mostrar ul y ocultar el resto de BTNs y ULs
            $('.showHide').hide();

            if(ulId.show()){
              // console.log("Elemento anteriormente mostrado! " + elem_idStr);
              titId.show();
            }else{
              $('.servicios').hide();
              titId.hide();
            }
            // titId.show();
            ulId.show();
          }
      }
    }
  });

  $(".showHide").click(function(){
    let a = $(this).attr('id');
    let result = 'ul-' + a.substring(4);
    let ulId = $('#' + result);
    ulId.toggle("slow", "swing");

    if($(this).hasClass('btn-info')){
      $(this).removeClass('btn-info');
      $(this).addClass('btn-success');
    }else{
      $(this).removeClass('btn-success');
      $(this).addClass('btn-info');
    }
  });
  
});