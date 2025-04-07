import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Nav from "./components/Nav/Nav";
import DragonBall from './pages/DragonBall';

function App() {
  return (
    <Router>
      <Nav /> {/* Debes crear un menú de navegación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dragon" element={<DragonBall />} />
      </Routes>
    </Router>
  );
}

export default App;