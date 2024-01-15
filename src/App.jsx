import { Route, Routes } from "react-router";
import { Navbar, Posts, Login, Register, NewPost } from "./routes";
function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Posts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="newpost" element={<NewPost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
