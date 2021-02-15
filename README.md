# The Fibonacci API and webapp

## The API

### How to use it

To query the API, send a get request to: https://us-central1-get-n-element-fibonacci.cloudfunctions.net/fibonacci?N=${n} where n is the element of the Fibonacci sequence you wish to query. For example, to query the 20th element of the Fibonacci sequence, send a request to https://us-central1-get-n-element-fibonacci.cloudfunctions.net/fibonacci?N=20.
The response from the API is in the form of a JSON containing a "result" key that contains the desired response.

### The Fibonacci algorithm

The [algorithm](https://github.com/thibaudszy/fibonacci-backend) that returns the nth element of the Fibonacci sequence is a recursive algorithm with memoisation. Memoisation greatly improves the performance of the algorithm by reducing greatly the amount of times the Fibonacci function has to call itself.

### Deployment

The Fibonacci API is deployed as a Google Cloud function as it is a simple function that does not need a full fledged server to be configured for it to run.

## The Frontend

The frontent is a single page web app that queries the API and stores the results in the local storage. This allows to reduce the load on the API by preventing users from querying the API for the same value several times. Having the values in the local storage also enables persistency between sessions.

### Query history visualisation

The bottom part of the page is dedicated to showing the previously queried values. Everytime a new value is queried, it will be displayed at the bottom of the page, with a width proportional to its value compared to the sum of all the previously queried values. This allows the user to visualise how fast the numbers rise in the Fibonacci sequence.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
