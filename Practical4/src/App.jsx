import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Student from "./components/Student"

function App() {
  return (
    <>
      <h1>Home page</h1>
      <Home />
      <Contact />
      <About />
      <Student name="Ayyan" course="TYBSCIT" age="20" />
    </>
  )
}

export default App