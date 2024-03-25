import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add_post" element={<PostForm />} />
          <Route path="/home" element={<PostList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
