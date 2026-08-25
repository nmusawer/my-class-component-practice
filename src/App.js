import React, { Component } from 'react';

// Child Component that receives props and manages local state
class ChildComponent extends Component {
  constructor(props) {
    super(props);
    // Initialize local state
    this.state = {
      clicks: 0,
    };
  }

  // Method to handle button click
  handleButtonClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Clicks: {this.state.clicks}</p>
        <button onClick={this.handleButtonClick}>Click Me!</button>
      </div>
    );
  }
}

// Parent Component that passes props to ChildComponent
class ParentComponent extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Parent Component</h1>
        {/* Pass a title prop to the ChildComponent */}
        <ChildComponent title="Hello from Parent!" message="You can manage both state and props!" />
      </div>
    );
  }
}

export default ParentComponent;