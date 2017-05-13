import * as React    from 'react'
import * as ReactDOM from 'react-dom'


export interface HelloProps {
  compiler: string;
  framework: string;
}


class App extends React.Component<HelloProps, any> {
  constructor(props: HelloProps){
    super(props);
  }
  render() {
    return (
      <div>
      <h2>Hello {this.props.compiler} and {this.props.framework}!</h2>
      <p>You can edit the <code>./src/App.tsx</code> to feel react hot load with typescript.</p>
      </div>
    )
  }
}

export default App
