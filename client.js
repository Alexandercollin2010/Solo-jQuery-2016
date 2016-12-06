$(document).ready(function(){
  var red = 0;
  var yellow = 0;
  var green = 0;
  var blue = 0;

  $('.color-button').on('click', function(){
    var color = $(this).attr('data-color');
    $('.container').append('<div class="color-cube ' + color + '" data-color="' + color + '"></div>');

    if (color === 'red') {
      red++;
      $('#red').html('Total red: '+ red);
    } else if (color === 'yellow') {
      yellow++;
      $('#yellow').html('Total yellow: '+ yellow);
    } else if (color === 'green') {
      green++;
      $('#green').html('Total green: '+ green );
    } else if (color === 'blue') {
      blue++;
      $('#blue').html('Total blue: ' + blue);
    }
  });







});// end document ready
