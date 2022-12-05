import Navbar from "./component/Navbar";
import PDP from "./pages/PDP";
import PLP from "./pages/PLP";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PLP />} />
          <Route path="/pdp" element={<PDP />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
