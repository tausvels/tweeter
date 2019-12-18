//import { response } from "express";

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

  
  // AJAX CALL POSTING
  //Preventing default submit behaviour for form and submitting data through AJAX.
  $(".new-tweet-form").submit(function(event){
    //GET DATA FROM INPUT
    const tweetData = $(".tweet-input-field").val();
    event.preventDefault();
    if (tweetData.length === 0) {
      alert ("Please write your TWEET BEFORE SUBMITTING IT");
    } else if(tweetData.length > 140) {
      alert ("YOU EXCEEDED TWEET LETTER COUNT!");
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

  // FUNCTIONS
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
            <p>${moment(data.created_at).fromNow()}</p>
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
    tweetContainer.empty();
    tweetArr.forEach(tweetObj => {
      const tweet = createTweetElement(tweetObj); //moment.(tweet.created_at).fromNow()
      tweetContainer.append(tweet);
    });
  }
  //renderTweets(data); getDate(data.created_at)
})