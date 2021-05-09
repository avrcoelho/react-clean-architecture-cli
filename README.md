# React Clean Architecture CLI

Create an App React with clean architecture and Typescript.
Jest, styled components and webpack 5 with federation module for microfrontend already configured.

## Install

```shell
npm install -g react-clean-architecture-cli
```

or

```shell
yarn global add react-clean-architecture-cli
```

## Creating an App

```shell
npx react-clean-architecture-cli my-app
```

or

```shell
react-clean-architecture my-app
```

or

```shell
react-clean-architecture
```

and insert app name

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── node_modules
├── __mocks__
│   ├── emptyFileMock.js
│   └── setupTest.js
├── package.json
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── jest.config.js
├── tsconfig.json
├── webpack.config.js
├── public
│   └── index.html
└── src
    ├── @types
    │── domain
    │   ├── models
    │   └── usecases
    ├── infrastructure
    │   ├── http
    │   │   ├── __tests__
    │   │   ├── implementation
    │   │   ├── inMemory
    │   │   ├── models
    │   │   └── index.ts
    │   └── cache
    │       ├── __tests__
    │       ├── dtos
    │       ├── implementation
    │       ├── models
    │       └── index.ts
    ├── presentation
    │   ├── __tests__
    │   ├── assets
    │   ├── components
    │   ├── hooks
    │   ├── pages
    │   ├── App.tsx
    │   └── index.tsx
    ├── shared
    │   └── Either.ts
    └── usecases
```

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start:dev` or `yarn start:dev`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

Runs the test.<br>

### `npm test:cov` or `yarn test:cov`

Runs the test and generate coverage.<br>

### `npm test:watch` or `yarn test:watch`

Runs the test watcher in an interactive mode.<br>

### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder.<br>

Your app is ready to be deployed.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Development by: [andrecoelho.dev](https://andrecoelho.dev) | Software Engineer
