import "./app.css";
import { Routes, Route } from 'react-router-dom';
import Topbar from "./components/Topbar.js";
import First from "./pages/First";
import Two from "./pages/two";
import Third from "./pages/Third";
import Five from "./pages/Five";
import Six from "./pages/six"

function App() {
  return (
    <div className="frame">
      <Topbar />
      <div className="page">
        <Routes>
          <Route exact path="/" element={<First />} />
          <Route exact path="/Second" element={<Two />} />
          <Route exact path="/Third" element={<Third />} />
          <Route exact path="/Fourth" element={<First />} />
          <Route exact path="/Fifth" element={<Five />} />
          <Route exact path="/Sixth" element={<Six />} />
          <Route element={<First />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
