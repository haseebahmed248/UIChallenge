import './App.css';
import Home from './Pages/Dashboard/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;