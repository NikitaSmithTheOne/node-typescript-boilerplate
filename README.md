[![TypeScript version][ts-badge]][typescript-4-1]
[![Node.js version][nodejs-badge]][nodejs]

# node-typescript-boilerplate

👩🏻‍💻 Developer Ready: A comprehensive template. Works out of the box for most [Node.js][nodejs] projects.

🏃🏽 Instant Value: All basic tools included and configured:

- [TypeScript][typescript] [4.1][typescript-4-1]
- [ESLint][eslint] with some initial rules recommendation
- [Jest][jest] for fast unit testing and code coverage
- Type definitions for Node.js and Jest
- [Prettier][prettier] to enforce consistent code style
- NPM [scripts](#available-scripts) for common operations
- Simple example of TypeScript code and unit test
- .editorconfig for consistent file format
- Reproducible environments thanks to [Volta][volta]
- Example configuration for [GitHub Actions][gh-actions] and [Travis CI][travis]

🤲 Free as in speech: available under the APLv2 license.

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

### Clone repository

To clone the repository use the following commands:

```sh
git clone https://github.com/NikitaSmithTheOne/node-typescript-boilerplate
cd node-typescript-boilerplate
npm install
```

## Available Scripts

- `clean` - remove coverage data, Jest cache and transpiled files,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests

## Additional Informations

### Why include Volta

[Volta][volta]’s toolchain always keeps track of where you are, it makes sure the tools you use always respect the settings of the project you’re working on. This means you don’t have to worry about changing the state of your installed software when switching between projects. For example, it's [used by engineers at LinkedIn][volta-tomdale] to standarize tools and have reproducible development environments.

I recommend to [install][volta-getting-started] Volta and use it to manage your project's toolchain.

### Writing tests in JavaScript

Writing unit tests in TypeScript can sometimes be troublesome and confusing. Especially when mocking dependencies and using spies.

This is **optional**, but if you want to learn how to write JavaScript tests for TypeScript modules.

[ts-badge]: https://img.shields.io/badge/TypeScript-4.1-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2014.15-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[typescript]: https://www.typescriptlang.org/
[typescript-4-1]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[volta-tomdale]: https://twitter.com/tomdale/status/1162017336699838467?s=20
[gh-actions]: https://github.com/features/actions
[travis]: https://travis-ci.org
