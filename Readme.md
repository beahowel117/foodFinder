<h1 align="center">food finder</h1>
<p align="center"><i>React Native App that uses the Yelp API to find local restaurants by cuisine and price.</i></p>
</br>

## Technologies

React-Native, Expo-cli

## APIs Used

[Yelp API](https://www.yelp.com/fusion) - a [Yelp API key](https://www.yelp.com/developers/documentation/v3) is required. You will need to sign up for an account

## Setup

This project was bootstrapped with Create React Native.

### `npx expo-cli`

Installs expo-cli for your project (I use npm). If using yarn just omit the --npm

```
npx expo-cli init foodFinder --npm
```

### `React Navigation`
I used version v4 of [react navigation](https://reactnavigation.org/docs/4.x/getting-started), there is a v5 out and documentation on how to convert from v4 to v5 [v5 navigation upgrade](https://reactnavigation.org/docs/upgrading-from-4.x/),  which I may do down the road

```
npm install react-navigation
# or
yarn add react-navigation
```

### Dependencies

```
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

```
npm install react-navigation-stack @react-native-community/masked-view`
# or
yarn add react-navigation-stack @react-native-community/masked-view

npm install react-navigation-tabs`
# or
yarn add react-navigation-tabs
```

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `expo r -c`

Starts the app and clears the cache after set up is complete

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```
#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`
Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

## Updating to New Releases

You should only need to update the global installation of `create-react-native-app` very rarely, ideally never.

Updating the `react-native-scripts` dependency of your app should be as simple as bumping the version number in `package.json` and reinstalling your project's dependencies.

Upgrading to a new version of React Native requires updating the `react-native`, `react`, and `expo` package versions, and setting the correct `sdkVersion` in `app.json`. See the [versioning guide](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md) for up-to-date information about package version compatibility.

_Server Code Here_
[foodFinder](https://github.com/beahowel117/foodFinder)
## Live Demo
 ** will be added a later date


