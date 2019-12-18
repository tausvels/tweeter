/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

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
  ]

  // FUNCTIONS
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
      const tweet = createTweetElement(tweetObj);
      tweetContainer.append(tweet);
    });
  }
  renderTweets(data);
})