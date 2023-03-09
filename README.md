# pinia-VueJS Basic Tasks APP

This application was developed as part of the study of the Pinia library for VueJS.

For its execution it is necessary to have NodeJS and NPM installed.

## Installation

Clone the repository and run the command below to install the dependencies.

```sh
npm install
```
### Basic Server Development
This application uses [json-server](https://www.npmjs.com/package/json-server).

This will expose a terminal http://localhost:3000/tasks data from the db.json file.

```sh
npm run backend
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.
But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```