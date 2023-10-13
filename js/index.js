$(document).ready(function(){

  $('#search-bar').keyup(function(){
    var services = $('.servicios');
    var input = $(this).val().toLowerCase();
    var elem_id = '';
    var elem_idStr = '';

    if(input == ''){
      $('.titulo-serv').hide();
      $('.servicios').hide();
      $('.showHide').show();
    }else{  
      for(let i = 0; i < services.length; i++){
          elem_id = $(services[i]).attr('id').toLowerCase();
          elem_idStr = elem_id.substring(3);
          let ulId = '';
          ulId = $('#' + elem_id);
          let titId = '';
          titId = $('#tit-' + elem_idStr);
          
          if (!elem_idStr.includes(input)) {
            titId.hide();
            ulId.hide();
          } else {
            $('.showHide').hide();

            if(ulId.show()){
              titId.show();
            }else{
              $('.servicios').hide();
              titId.hide();
            }
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