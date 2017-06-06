import * as React from "react"
import * as ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { BrowserRouter, Route, Link } from "react-router-dom"
import { message, notification, Icon } from 'antd'

import App from "./App";

const rootEl = document.getElementById("app");

ReactDOM.render(
  <AppContainer>
    <App compiler="TypeScript" framework="React" />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require<RequireImport>("./App").default
    ReactDOM.render(
      <AppContainer>
        <NextApp compiler="TypeScript" framework="React" />
      </AppContainer>,
      rootEl
    )
  })
}

// function render(Component: React.Component<AppProps, undefined>) {
//   ReactDOM.render(
//     <AppContainer>
//       <Component compiler="TypeScript" framework="React" />,
//     </AppContainer>,
//     document.getElementById("example")
//   )
// }

// type AppComponent = new(...args: any[]) => React.Component<HelloProps, any>

// const render = (component: AppComponent) => {
//   const AppInit = React.createElement(component, {
//     compiler: "TypeScript",
//     framework: "React"
//   })
//   ReactDOM.render(
//     <AppContainer>
//       <AppInit />
//     </AppContainer>,
//     document.getElementById("example")
//   )
// }

// render(App)
// if (module.hot) {
//   module.hot.accept("./App", () => { render(App) })
// }



