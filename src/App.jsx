import { Route, Routes } from "react-router";
import { Navbar, Posts, Login, Register } from "./components";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Posts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
