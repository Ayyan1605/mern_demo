import { Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Users from "./Pages/Users";

const App = () => {
  return (
    <div>
      <h1>React Router Demo</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/users">Users</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;