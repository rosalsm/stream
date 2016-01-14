;(function(){

  // SHOW MENU SIGN IN
$('.b-sign').on('click', function(){
  //$('.sign-form').slideDown('slow');
  //$('.sign-form').slideToggle();
  //$('.sign-form').animate({
    //opacity: 0.75,
    //bottom: "0",
    //height: "toggle"
  //},1000, function() {
   // Animation complete.
  //});
  //$('.sign-form').slideToggle();

  $('.sign-form').show().animate({top:'-=200px', opacity:'1'}, 1000);//works for left and right but does not for up

  //$('.sign-form').show('slide',{direction:'up'}, 100);//.sign-form apprears but .b-sign does not desappear

  $('.b-sign').hide();
  //$('.b-sign').slideUp(); remove the sign in button motion up
  console.log("testing form");

});

})(); //END OF IIFE
