import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";

import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div>
      <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/Register" className="navbar-brand">
          <b>G</b>ratitude
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">

            
            <Link className="nav-item nav-link d-flex " to="/Register">
              <button className="btn btn-block bg-primary text-white justify-content-end">
              Register
              </button>
            </Link>
            <Link className="nav-item nav-link d-flex" to="/Login">
            <button className="btn btn-block bg-danger text-white justify-content-end">
              Login
              </button>
            </Link>
            
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
