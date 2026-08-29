// e. Create a reusable Student component using props

function Student({ name, rollNo, course }) {
  return (
    <div>
      <h2>Student Information</h2>
      <p>Name: {name}</p>
      <p>Roll No: {rollNo}</p>
      <p>Course: {course}</p>
    </div>
  );
}

function App() {
  return (
    <Student
      name="Aman"
      rollNo="101"
      course="MERN Stack"
    />
  );
}

export default App;