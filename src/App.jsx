import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Participants from "./pages/Participants";
import Inscriptions from "./pages/Inscriptions";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/participantes" element={<Participants />} />
          <Route path="/inscripciones" element={<Inscriptions />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;