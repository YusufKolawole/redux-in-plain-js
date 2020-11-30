const testState = {
  name: ["kolawole", "olasile"],
  age: 23,
  department: "stats",
};

export default function testingReducer(test = testState, action) {
  switch (action.type) {

    default:
      return test;
  }
}
