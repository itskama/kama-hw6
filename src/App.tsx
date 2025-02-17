// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./components/UserList";
import PostsList from "./components/PostsList";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/posts/:userId" element={<PostsList />} />
      </Routes>
    </Router>
  );
};

export default App;
