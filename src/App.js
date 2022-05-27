import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';
import RepoList from './pages/RepoList';
import UserRepo from './pages/UserRepo';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Detail />} />
        <Route path="/user-repo" element={<UserRepo />} />
        <Route path="/repos" element={<RepoList />} />
      </Routes>
    </Router>
  );
}

export default App;
