import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Auth0Provider } from "@auth0/auth0-react";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_REACT_APP_DOMAIN}
      clientId={import.meta.env.VITE_REACT_APP_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div className="grid-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Auth0Provider>
  );
}

export default App;
