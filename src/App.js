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
import useWindowWidth from 'pages/examples/useWindowWidth';
import PageNewsIndex from 'pages/news/PageNewsIndex';
import PageNewsArticleDetail from 'pages/news/PageNewsArticleDetail';
import PageNewsArticleForm from 'components/news/PageNewsArticleForm';

// import ContextApiSample from 'pages/examples/ContextApiSample';
// import ContextApiSample2 from 'pages/examples/ContextApiSample2';
// import CssModule from 'pages/examples/CssModule';
// import CssInJs from 'pages/examples/CssInJs';
// import Clock from 'pages/examples/Clock';

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/blog/" />} />
          <Route path="/accounts/login/" element={<Login />} />
          <Route path="/accounts/profile/" element={<Profile />} />
          <Route path="/reviews/" element={<ReviewList />} />
          <Route path="reviews/new/" element={<ReviewForm />} />
          <Route path="/examples/components/" element={<Components />} />
          <Route path="/blog/" element={<BlogList />} />
          <Route path="/blog/:postId/edit/" element={<BlogForm />} />
          <Route path="/blog/new/" element={<BlogForm />} />
          <Route path="/blog/:postId/" element={<PageBlogDetail />} />
          <Route path="/news/" element={<PageNewsIndex />} />
          <Route path="/news/new/" element={<PageNewsArticleForm />} />
          <Route path="/news/:articleId" element={<PageNewsArticleDetail />} />
          <Route
            path="/news/:articleId/edit/"
            element={<PageNewsArticleForm />}
          />

          {/* <Route path="/examples/css-module/" element={<CssModule />} />
          <Route path="/examples/css-in-js/" element={<CssInJs />} />
                    <Route path="/examples/context-api/" element={<ContextApiSample />} />
          <Route
            path="/examples/context-api-2/"
            element={<ContextApiSample2 />}
          /> */}
        </Routes>
        <hr />
        윈도우 가로크기 : {windowWidth}px
      </div>
      {/* <Routes>
        <Route path="/examples/clock/" element={<Clock />} />
      </Routes> */}
    </>
  );
}

export default App;
