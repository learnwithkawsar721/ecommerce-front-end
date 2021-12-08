import "./App.css";
import Layout from "./components/Layouts/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import Home from "./components/Admin/Home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Layout></Layout>} />
          {/* Auth Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
