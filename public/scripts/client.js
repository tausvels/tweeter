/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  /*
  // DATA
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
  */
  // AJAX CALL POSTING
  //Preventing default submit behaviour for form and submitting data through AJAX.
  $(".new-tweet-form").submit(function(event){
    //GET DATA FROM INPUT
    const tweetData = $(".tweet-input-field").val();
    if (tweetData.length === 0) {
      event.preventDefault();
      alert ("Please write your TWEET BEFORE SUBMITTING IT");
    } else if(tweetData.length > 140) {
      event.preventDefault();
      alert ("YOU EXCEEDED TWEET LETTER COUNT!");
    } else {
      event.preventDefault(); //prevent default action 
      const post_url = $(this).attr("action"); //get form action url. i.e.- the path
      const request_method = $(this).attr("method"); //get form GET/POST method
      const form_data = $(this).serialize(); //Encode form elements for submission
      $.ajax({
        url : post_url,
        type: request_method,
        data : form_data
      }).done(function(response){ //
        //$("#server-results").html(response); // <--- The message on the html upon success.
        console.log('Success', response);
        $(".tweet-input-field").val('');
      });
    }
    
  });

  // FUNCTIONS
  const loadTweets = function () {
    const get_url = `/tweets`;
    const request_method = 'GET';
    $.ajax({
      url: get_url,
      type: request_method
    }).then(function(response_data) {
      console.log(response_data);
      renderTweets(response_data);
    })
    .catch((error) => {
      console.log('Oooppss', error);
    })
  };
  loadTweets();

  const getDate = function (utcSeconds) {
    let dateThen = new Date (utcSeconds);
    let year = dateThen.getFullYear();
    let month = dateThen.getMonth();
    let day = dateThen.getDay();
    return (`${month}/${day}/${year}`);
  };
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
        <p class="content">${data.content.text}</p>
        <footer class="tweet-footer">
            <p>${getDate(data.created_at)}</p>
          <span>
            <i class="fa-instagram"></icon>
            <i class="fa-instagram"></icon>
            <i class="fa-instagram"></icon>
          </span>
        </footer>
      </article>`
    return $tweet;
  }
  const renderTweets = function (tweetArr) {
    let tweetContainer = $(`.display-tweets`);
    tweetArr.forEach(tweetObj => {
      const tweet = createTweetElement(tweetObj); //moment.(tweet.created_at).fromNow()
      tweetContainer.append(tweet);
    });
  }
  //renderTweets(data);
})