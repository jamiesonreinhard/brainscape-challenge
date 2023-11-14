# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Jamieson Project Notes

I really enjoyed working on this project! Thanks for the opportunity to try it out. I was happy with my submission, especially the performance and UI of my application.

One thing I spent a bit of time on was the drag and drop implementation. I found that using HTML5's native drag/drop functionality worked great on desktop, but when I got to testing mobile I noticed some non-ideal behaviors. The "touch and hold" action opens a menu with options, and sometimes on drop the browser will open the image full screen instead of adding it to the stored images array. These weren't ideal, so I tried a couple of things. First I tried adding touch event handlers and preventing default behavior which didn't work, then I tried implementing drag and drop using the react-dnd package. This implementation yielded similar results. I ran out of time to keep troubleshooting, but it seems react-dnd does have another package called "react-dnd-touch-backend" that may have been useful in dialing it in.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
