import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.AddPerson} />
        {this.props.prsns.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.deletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prsns: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddPerson: (name, age) =>
      dispatch({ type: "ADD_PERSON", payload: { name: name, age: age } }),
    deletePerson: (id) => dispatch({ type: "DELETE_PERSON", payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
