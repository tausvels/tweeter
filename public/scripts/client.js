/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

  //------------- NEW TWEET TOGGLE -----------------------------//
  $("nav img").on("click", (even) => {
    $(".show-new-tweet-input").slideToggle("slow", (callback) => {
      $(".tweet-input-field").focus();
    })
  })
  //------------- AJAX CALL POSTING ---------------------------//
  $(".new-tweet-form").submit(function(event){
    //GET DATA FROM INPUT
    const tweetData = $(".tweet-input-field").val();
    event.preventDefault();
    if (tweetData.length === 0) {
      const errorMessage = "YOU MUST INPUT SOMETHING!!"
      displayError(errorMessage);
    } else if(tweetData.length > 140) {
      const errorMessage = "YOU EXCEEDED CHARACTER LIMIT!!"
      displayError(errorMessage);
    } else {
      const post_url = $(this).attr("action"); //get form action url. i.e.- the path
      const request_method = $(this).attr("method"); //get form GET/POST method
      const form_data = $(this).serialize(); //Encode form elements for submission
      $.ajax({
        url : post_url,
        type: request_method,
        data : form_data
      }).done(function(){ //
        //$("#server-results").html(response); // <--- The message on the html upon success.
        console.log('Success', form_data);
        $(".tweet-input-field").val('');
        loadTweets();
      });
    }
  });

  //----- FUNCTIONS
  const loadTweets = function () {
    const get_url = `/tweets`;
    const request_method = 'GET';
    $.ajax({
      url: get_url,
      type: request_method
    }).then(function(response_data) {
      renderTweets(response_data);
    })
    .catch((error) => {
      console.log('Oooppss', error);
    })
  };
  /* 
  const getDate = function (utcSeconds) {
    let dateThen = new Date (utcSeconds);
    let year = dateThen.getFullYear();
    let month = dateThen.getMonth();
    let day = dateThen.getDay();
    return (`${month}/${day}/${year}`);
  };
  */
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
  const createTweetElement = function (data) {
    let $tweet = `
      <article class="tweet">
        <header class="tweet-header">
          <div class="intro">
            <div>
              <img src="${data.user.avatars}"></img>
              <p class="first-name">${data.user.name}</p>
            </div>
            <p class="last-name">${data.user.handle}</p>
          </div>
        </header>
        <p class="content">${escape(data.content.text)}</p>
        <footer class="tweet-footer">
            <p>${moment(data.created_at).fromNow()}</p>
          <span>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-heart"></a>
          </span>
        </footer>
      </article>`
    return $tweet;
  }
  const renderTweets = function (tweetArr) {
    let tweetContainer = $(`.display-tweets`);
    tweetContainer.empty();
    tweetArr.forEach(tweetObj => {
      const tweet = createTweetElement(tweetObj); //moment.(tweet.created_at).fromNow()
      tweetContainer.append(tweet);
    });
  }
  const displayError = function (message) {
    $(".error-message").html(message);
    return $(".error-section").slideToggle("slow").delay(1000).slideUp("slow");
  }
  loadTweets();
})