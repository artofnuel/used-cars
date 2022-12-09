import Navbar from "./component/Navbar";
import PDP from "./pages/PDP";
import PLP from "./pages/PLP";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { data } from "./component/Cardata";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<PLP />} />
          <Route path="/cars/:carId" exact element={<PDP />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
