//https://www.w3schools.com/REACT/react_lifecycle.asp
import React from "react";

class FirstChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Deepak"
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    alert("The component named FirstChild is about to be unmounted.");
  }

  render() {
    return (
      <>
        {this.props.children}
        <div>Hello, I am first child</div>
        {this.state.name}
        <div>The color props is: {this.props.busColor}</div>
      </>
    );
  }
}

export default FirstChild;
