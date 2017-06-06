import * as React    from 'react'

interface HelloProps {
  compiler: string;
  framework: string;
}


export default class App extends React.Component<HelloProps, any> {
  constructor(props: HelloProps){
    super(props);
  }
  render() {
    return (
      <div>
      <h2>Hello <span style={{color: "blue"}}>{this.props.compiler}</span> and {this.props.framework}!!</h2>
      <p>You can edit the <code>./src/App.tsx</code> to feel react hot load with typescript.</p>
      </div>
    )
  }
}

