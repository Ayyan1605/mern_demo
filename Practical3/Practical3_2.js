// b. Display dynamic data using JSX

function App() {

const name = "Aman";

const course = "MERN Stack";

return (

<div>

<h2>Student Details</h2>

<p>Name: {name}</p>

<p>Course: {course}</p>

<p>Current Year: {new Date().getFullYear()}</p>

</div>

);

}
export default App;