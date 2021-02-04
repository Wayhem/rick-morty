# Gnome App

## Introduction

> Small App implemented to not only test Experimental libraries like Recoil and Suspense React API, while offering a nice user experience.

## Mainly used libraries

| Library | Description |
| --- | --- |
| [Material UI](https://material-ui.com/) | Nicely styled and functional components |
| [Recoil](https://recoiljs.org/) | Graph based state management library (experimental) |
| [Jest](https://jestjs.io/) | For testing purposes |
| [Styled-components](https://styled-components.com/) | Styling with JS |
| [Lodash](https://lodash.com/) | Utilities library |

## Important notes

### Redux vs Recoil

Even thought Redux is a really reliable and as a community, React devs are always trying and developing new state and async data management libraries, for example we have unstated and apollo client for apps connected with graphQL, Recoil is a new experimental library from [facebook](https://github.com/facebookexperimental/Recoil) which was made to not only offer a more reacty way of handling state, but to also offer another paradigm different from single source of truth that Redux is, which is the graph based one.

On production applications and on trade I use Redux and [Redux-saga](https://redux-saga.js.org/) as my bread and butter, and I think it is an extremely good and reliable combination, but for this test I will try using something different.

### Folder Structure

For this project I used a CSS and Component based architecture called [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), even thought it is more of a design and layout oriented architecture, you can see some advantages when making a react application.

### Dependency manager

NPM


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
