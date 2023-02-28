# Simplejs

Simplejs is a 🔥 blazingly ⚡ fast 🔥 new JavaScript library for creating UIs in the web. It's just for educational purposes and should not be used in production environments.

## Installation

Simplejs is a UI library written for the [Deno](https://github.com/denoland/deno) runtime, and so no packages need to be installed for usage. Just clone the template to get started! This can be done with a tool such as `npx` or manually setting it up.

```console
npx degit lucasftz/simplejs/templates/ts my-app
```

You specify whether or not to use JavaScript or TypeScript by either cloning the `ts` or `js` directory.

## Usage

Your application state is created with a familiar `useSignal` hook. It is important to note that these are reactive signals, and not the same as component owned state.

You can run functions when a signal changes with the `useEffect` hook. Dependency management is automatically tracked, unlike in React, so no dependency array is required.
