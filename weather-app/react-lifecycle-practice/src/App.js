import React from 'react';

class LifecycleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      message: "Hello, World!"
    };
    console.log("Constructor: The component is being created.");
  }

  componentDidMount() {
    console.log("ComponentDidMount: The component has been added to the page.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate: The component was updated.");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount: The component is about to be removed from the page.");
  }
1
  render() {
    console.log("Render: The component is being displayed.");
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
    };
  }

  toggleComponent = () => {
    this.setState({ showComponent: !this.state.showComponent });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleComponent}>
          {this.state.showComponent ? "Hide" : "Show"} Component
        </button>
        {this.state.showComponent && <LifecycleExample />}
      </div>
    );
  }
}

export default App;