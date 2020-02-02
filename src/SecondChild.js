//https://www.w3schools.com/REACT/react_lifecycle.asp
import React from "react";

class SecondChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mohan"
    };

    this.updateName = this.updateName.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the state name was " + prevState.name;
    document.getElementById("div3").innerHTML =
      "Before the update, the props color was " + prevProps.carColor;

    return null;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated state name is " + this.state.name;
    document.getElementById("div4").innerHTML =
      "The updated props color is " + this.props.carColor;
  }

  updateName = () => {
    this.setState({
      name: "JaiShankar"
    });
  };

  render() {
    return (
      <>
        {this.props.children}
        <div>Hello, I am second child</div>
        <div id="div1" />
        <div id="div2" />
        <br />
        Current State name is: {this.state.name}
        <br />
        <br />
        <button onClick={this.updateName}>Update name to Jaishankar</button>
        <br /> <br />
        <div>The color props is: {this.props.carColor}</div>
        <div id="div3" />
        <div id="div4" />
      </>
    );
  }
}

export default SecondChild;
