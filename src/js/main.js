;(function(){

  // SHOW MENU SIGN IN
$('.b-sign').on('click', function(){
  $('.sign-form').slideDown('slow');
  $('.b-sign').hide();
  console.log("testing form");
});

})(); //END OF IIFE
