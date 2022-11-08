import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@pages";
import "./App.css";
import DetailProducts from "./pages/detail-product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route exact path="/detail-product/:id" element={<DetailProducts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
