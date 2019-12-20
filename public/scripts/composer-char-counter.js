$(document).ready(function() {

  $(".tweet-input-field").on('input',function(event) {
    const maxCharAllowed = 140;
    let text = $(this).val();
    let tweetLeng = text.length;
    let charLeft = 0;
    if (tweetLeng > maxCharAllowed) {
      $(this).css("color", "red")
      $(".counter").css("color", "red");
      charLeft = maxCharAllowed - tweetLeng;
    } else {
      $(this).css("color", "black");
      $(".counter").css("color", "grey");
      charLeft = maxCharAllowed - tweetLeng;
    }
    $(".counter").html(charLeft);
  });

  //---- SCROLL UP FUNCTION ----------------//
  $(window).scroll(() => {
    let viewingHeight = $(window).scrollTop();
    if (viewingHeight > 240) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
  });
  //---- SCROLL-UP: The Click callback
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});