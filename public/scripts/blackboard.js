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
  }

  const createTweetElement = function (data) {
  //   let $tweet = $("<article>").addClass("tweet");

  //   //HEADER SECTION
  //   let $header = $("<header>").addClass("tweet-header");
  //   let $intro = $("<div>").addClass("intro");
  //   let $divNoClass = $("<div>");
  //   let $avatar = $("<img>").attr("src", data[0].user.avatars);
  //   let $firstName = $("<p>").text(data[0].user.name)
  //   $divNoClass.append($avatar).append($firstName);
  //   let $lastName = $("<p>").addClass("last-name").text(data[0].user.handle);
  //   $intro.append($divNoClass).append($lastName);
  //   $header.append($intro)

  //   //TWEET BODY SECTION
  //   let $tweetContent = $("<p>").addClass("content").text(data[0].content.text);
    
  //   //FOOTER SECTION
  //   let $footer = $("<footer>").addClass("tweet-footer");
  //   let $analytics = $("<div>").addClass("analytics");
  //   let $noClassDiv = $("<div>");
  //   let $datePosted = getDate(data[0].created_at);
  //   $noClassDiv.append($datePosted);
  //   let $noClassSpan = $("<span>");
  //   let $icon1 = $("<icon>").text('A');
  //   let $icon2 = $("<icon>").text('B');
  //   let $icon3 = $("<icon>").text('C');
  //   $noClassSpan.append($icon1).append($icon2).append($icon3);
  //   $analytics.append($noClassDiv).append($noClassSpan);
  //   $footer.append($analytics);

  //   $tweet.append($header).append($tweetContent).append($footer);

    let $tweet = `
      <article class="tweet">
        <header class="tweet-header">
          <div class="intro">
            <div>
              <img src="${data.user.avatars}"></img>
              <p>${data.user.name}</p>
            </div>
            <p class="last-name">${data.user.handle}</p>
          </div>
        </header>
        <p class="content">${data.content.text}</p>
        <footer class="tweet-footer">
          <div>
            <p>${getDate(data.created_at)}</p>
          </div>
          <span>
            <icon>A</icon>
            <icon>B</icon>
            <icon>C</icon>
          </span>
        </footer>
      </article>`
    return $tweet;
  }

  const renderTweets = function (tweetArr) {
    let tweetContainer = $(`#main`);
    tweetArr.forEach(tweetObj => {
      const tweet = createTweetElement(tweetObj);
      tweetContainer.append(tweet);
    });
  }
  renderTweets(data);
})