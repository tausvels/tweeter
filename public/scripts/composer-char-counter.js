$(document).ready(function() {

  $(".tweet-input-field").on('input',function(event) {
    const charAllowed = 140;
    let text = $(this).val();
    let tweetLeng = text.length;
    // let maxChar = Number($(`.counter`).text());
    let charLeft = 0;
    if (tweetLeng > charAllowed) {
      $(this).css("color", "red")
      $(".counter").css("color", "red");
      charLeft = charAllowed - tweetLeng;
    } else {
      $(this).css("color", "black");
      $(".counter").css("color", "grey");
      charLeft = charAllowed - tweetLeng;
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
  //---- SCROLL-UP: The Click Function
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });
  
});