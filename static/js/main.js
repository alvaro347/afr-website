;(function () {


var dropdown = function() {

  $('.has-dropdown').mouseenter(function(){

    var $this = $(this);
    $this
      .find('.dropdown')
      .css('display', 'block')
      .addClass('animated-fast fadeInUpMenu');

  }).mouseleave(function(){
    var $this = $(this);

    $this
      .find('.dropdown')
      .css('display', 'none')
      .removeClass('animated-fast fadeInUpMenu');
  });

};



$(function(){

  dropdown();

});


}());
