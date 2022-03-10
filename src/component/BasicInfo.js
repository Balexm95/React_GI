import React from "react";

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // Very Easy
      <div className="Info">
        <h1> Name: </h1> <p> {this.props.person.name} </p> <h1> Number: </h1>{" "}
        <p> {this.props.person.number} </p> <h1> Date Of Birth: </h1>{" "}
        <p> {this.props.person.dateOfBirth} </p>{" "}
      </div>
    );
  }
}

export default BasicInfo;
