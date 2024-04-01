import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
function App() {
  return (
    <div className="grid-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
