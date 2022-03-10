import React from "react";
import BasicInfo from "./component/BasicInfo";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
         {
          name: "Brandon",
          number: "999-282-7659",
          dateOfBirth: "08/08/1990",
        },

        {
          name: "Anecia",
          number: "888-529-3356",
          dateOfBirth: "08/06/1967",
        },

        {
          name: "Bria",
          number: "333-222-9876",
          dateOfBirth: "11/28/1995",
        },
      ]
    };
  }  
  render() {
    return this.state.people.map(function (person, index) {
      return <BasicInfo key={index} person={person} />;
    })
  }
}

export default App;
