//https://www.w3schools.com/REACT/react_lifecycle.asp
import React from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";

class Parent extends React.Component {
  constructor(props) {
    //1-1
    super(props);
    this.state = {
      first: "one",
      second: "two",
      busColor: "red",
      carColor: "blue",
      showFirstChild: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    //1-2, 2-1
    console.log(props);
    console.log(state);
    return null;
  }

  componentDidMount() {
    //1-4
    this.setState({ first: "Two" });
  }

  updateColor = () => {
    this.setState({
      busColor: "yellow",
      carColor: "green"
    });
  };

  removeFirstChild = () => {
    this.setState({
      showFirstChild: false
    });
  };

  render() {
    //1-3
    return (
      <div>
        {this.state.showFirstChild === true ? (
          <div>
            <FirstChild busColor={this.state.busColor}>
              <div>First Child</div>
              {this.state.first}
            </FirstChild>
            <br />
            <button onClick={this.removeFirstChild}>Remove FirstChild</button>
            <br />
            <br />
            <br />
          </div>
        ) : (
          ""
        )}
        <SecondChild carColor={this.state.carColor}>
          <div>Second Child</div>
        </SecondChild>
        <br />
        <br />
        <button onClick={this.updateColor}>
          Update Color props from Parent
        </button>
      </div>
    );
  }
}

export default Parent;
