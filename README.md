# Game App (Task)

Node.js (version 14.18 or higher recommended): https://nodejs.org/en/about/previous-releases

## Installation

1. Clone this repository or download the ZIP archive
2. Open a terminal in the project directory.
3. Install dependencies

if you are using NPM package manager
```sh
npm install
```

or for **yarn**
```sh
yarn
```

## Start Development Server
if you are using NPM package manager
```sh
npm run dev
```
or for **yarn**
```sh
yarn dev
```

This launches the application in your default browser, usually at http://localhost:5173/. Hot Module Replacement (HMR) is enabled for a smooth development experience.

## Building for Production
1. Create a production build
   if you are using NPM package manager
```sh
npm run build
```
or for **yarn**
```sh
yarn build
```

## Core Dependencies
1. @vuelidate/core: core package of Vuelidate, a validation library for Vue.js
2. @vuelidate/validators: extension package for Vuelidate that provides commonly used validators
3. vue-router:  official routing library for Vue.js applications
4. vuetify: popular Material Design component framework for Vue.js
