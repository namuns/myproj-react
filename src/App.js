import TopNav from 'components/TopNav';
import Login from 'pages/accounts/Login';
import Components from 'pages/examples/Components';
import Profile from 'pages/accounts/Profile';
import ReviewList from 'pages/reviews/ReviewList';
import { Route, Routes, Navigate } from 'react-router-dom';
import ReviewForm from 'pages/reviews/ReviewForm';

import './App.css';
import BlogList from 'pages/blog/PageBlogList';
import BlogForm from 'pages/blog/PageBlogForm';
import PageBlogDetail from 'pages/blog/PageBlogDetail';
import Clock from 'pages/examples/Clock';

function App() {
  return (
    <>
      <div className="">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/reviews/" />} />
          <Route path="/accounts/login/" element={<Login />} />
          <Route path="/accounts/profile/" element={<Profile />} />
          <Route path="/reviews/" element={<ReviewList />} />
          <Route path="reviews/new/" element={<ReviewForm />} />
          <Route path="/examples/components/" element={<Components />} />
          <Route path="/blog/" element={<BlogList />} />
          <Route path="/blog/:postId/edit" element={<BlogForm />} />
          <Route path="/blog/new" element={<BlogForm />} />
          <Route path="/blog/:postId/" element={<PageBlogDetail />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/examples/clock/" element={<Clock />} />
      </Routes>
    </>
  );
}

export default App;
