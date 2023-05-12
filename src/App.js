import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";

function App() {
  return (
    <Router>
      <header>
        <nav>
          <h1>Job-A-Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App
