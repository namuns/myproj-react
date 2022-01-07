import TopNav from 'components/TopNav';
import Login from 'pages/accounts/Login';
import Components from 'pages/examples/Components';
import Profile from 'pages/accounts/Profile';
import ReviewList from 'pages/reviews/ReviewList';
import { Route, Routes, Navigate } from 'react-router-dom';
import ReviewForm from 'pages/reviews/ReviewForm';

import './App.css';

function App() {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/reviews/" />} />
        <Route path="/accounts/login/" element={<Login />} />
        <Route path="/accounts/profile/" element={<Profile />} />
        <Route path="/reviews/" element={<ReviewList />} />
        <Route path="reviews/new/" element={<ReviewForm />} />
        <Route path="/examples/components/" element={<Components />} />
      </Routes>
    </div>
  );
}

export default App;
