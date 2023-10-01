import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadProducts from "./pages/UploadProducts";
import Home from "./pages/Home";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{display: "flex"}}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload-products" element={<UploadProducts />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
