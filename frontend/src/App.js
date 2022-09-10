import "./app.scss";
import Watch from "./Components/Watch/Watch";
import Home from "./Home/Home.jsx";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route exact path="/movies" element={user ? <Home type="movie" /> : <Register />} />
        <Route exact path="/series" element={user ? <Home type="series" /> : <Register />} />
        <Route exact path="/watch" element={user ? <Watch /> : <Register />} />
        <Route exact path="/register" element={user ? <Home /> : <Register />} />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
