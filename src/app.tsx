import "./css/app.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./modules/home/app/ui/home";
import Login from "./modules/login/app/ui/login";
import Register from "./modules/register/app/ui/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
