## Get started

```
// Install deps
yarn install
```

Install dependencies

```
// Build Dll bundle
yarn build_dll
```

Build the dll bundle files, if you changed the vendor libs, you chould run `yarn build_dll` again, and sync the new filename with `DllReferencePlugin` in `webpack.config.js` file.

```
yarn watch
```

The watch command will:

Monitor the `webpack.config.js` with `nodemon`, if it has any modifications, restart the `webpack-dev-server`.
 