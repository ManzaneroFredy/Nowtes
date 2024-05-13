# hexagonal-architecture-vue

## Project setup

```
npm install --force
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm build
```

### Lints and fixes files

```
npm lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Ways of working

This section serves as a guide to ensure good code quality and collaboration practices within our development environment.

Before You Start Working
Before diving into any coding tasks, it's essential to ensure that you follow these guidelines:

- **Code Quality Assurance:** We prioritize maintaining high code quality standards throughout the project. Please adhere to best practices and coding conventions outlined in our style guide, Make sure you have enabled the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in your editor.

- **Testing:** Write comprehensive tests for all new features and ensure that existing tests remain passing. Test-driven development (TDD) is encouraged to promote reliability and stability in the codebase.

## Commit Guidelines

When making commits, please follow these guidelines:

- **Format**: Commits follow [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) conventions followed by a Ticket number.
  For example if your ticket is TS123 then your commit would look like:

  ```
  feat: describe your changes (TS123)
  ```

  Allowed prefixes are:

  - `feat`: for a new feature for the user.
  - `fix`: for a bug fix for the user, not a fix to a build script.
  - `chore`: Changes to t auxiliary tools and libraries such as documentation generation
  - `ci`: Changes to CI/CD tools such as jenkins or github actions.
  - `docs`: for changes to the documentation.
  - `style`: for formatting changes, missing semicolons, etc (NOT CSS).
  - `refactor`: for refactoring production code, e.g. renaming a variable.
  - `perf`: for performance improvements.
  - `test`: for adding missing tests, refactoring tests; no production code change.
  - `build`: [RESERVED FOR RELEASES] for deploying new builds.

- **Atomic Commits:** Keep commits focused on a single logical change. Avoid bundling unrelated changes within a single commit.
