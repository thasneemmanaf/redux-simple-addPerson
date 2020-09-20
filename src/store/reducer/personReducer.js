const initialState = {
  persons: [],
};
const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.payload.name,
        age: action.payload.age,
      };
      return {
        persons: state.persons.concat(newPerson),
      };
    case "DELETE_PERSON":
      const newPersons = state.persons.filter((person) => {
        return person.id !== action.payload;
      });

      return { persons: newPersons };
    default:
      return state;
  }
};

export default personReducer;
