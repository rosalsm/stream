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

  $('.sign-form').show().animate({top:'-=250px', opacity:'1'}, 500)//works for left and right but does not for up
  console.log("test 1")
  $('.main-title, .big-s').animate({top:'-=50px'}, 500)
  console.log("test 2")
  //$('.sign-form').show('slide',{direction:'up'}, 100);//.sign-form apprears but .b-sign does not desappear

  $('.b-sign').hide();
  //$('.b-sign').slideUp(); remove the sign in button motion up
  console.log("testing form");
});

$('.container').on("swipe", function(){
  $('.sign-form2').show().animate({top:'-=250px'}, 1000)
  console.log("testing swipe")
  $('.b-sign').hide();

});


})(); //END OF IIFE
