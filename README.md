# Tweeter Project

Tweeter is a simple, single-page Twitter clone. It post tweets on clicking the button 'TWEET' within the set character count of 140.
The application is responsive and hence works fine on various devices.

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser: "^1.15.2",
- chance     : "^1.0.2",
- express    : "^4.13.4",
- md5        : "^2.1.0",
- moment     : "^2.24.0"
- nodemon    : "^1.9.2"

## Screenshots

## Instructions

- Click the arrow under 'Write new Tweet' to dropdown the input form.
- Tweets must be within 140 characters
- Cannot post empty tweet, error message will be shown.
- Cannot exceed 140 characters or else error will be shown.
- Your latest tweet will be shown without page refresh.
- Hover over your tweet to see social media icons. 