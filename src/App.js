import "./App.css";
import Home from "./pages/Home";
import CategoryMovies from "./pages/CategoryMovies";
import { routepath } from "./constants/route";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={routepath.home} element={<Home />} />
        <Route path={routepath.categories} element={<CategoryMovies />} />
        <Route path={routepath.invalid} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
