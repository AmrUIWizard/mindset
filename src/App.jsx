import { Route, Routes } from "react-router";
import { Navbar, Posts, Login, Register, NewPost, PostPage } from "./routes";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Posts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="newpost" element={<NewPost />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
