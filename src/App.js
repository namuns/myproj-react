import TopNav from 'components/TopNav';
import Components from 'pages/examples/Components';
import PageLogin from 'pages/accounts/PageLogin';
import PageProfile from 'pages/accounts/PageProfile';
import { Route, Routes, Navigate } from 'react-router-dom';
import ReviewList from 'pages/reviews/ReviewList';
import ReviewForm from 'pages/reviews/ReviewForm';
import './App.css';
import BlogList from 'pages/blog/PageBlogList';
import BlogForm from 'pages/blog/PageBlogForm';
import PageBlogDetail from 'pages/blog/PageBlogDetail';
// import useWindowWidth from 'pages/examples/useWindowWidth';
import PageNewsIndex from 'pages/news/PageNewsIndex';
import PageNewsArticleDetail from 'pages/news/PageNewsArticleDetail';
import PageNewsArticleForm from 'pages/news/PageNewsArticleForm';

import PageLibraryIndex from 'pages/library/PageLibraryIndex';
import PageLibraryBookForm from 'pages/library/PageLibraryBookForm';
import PageLibraryBookDetail from 'pages/library/PageLibraryBookDetail';
import BookForm from 'components/library/BookForm';
import PageSignup from 'pages/accounts/PageSignup';

// import ContextApiSample from 'pages/examples/ContextApiSample';
// import ContextApiSample2 from 'pages/examples/ContextApiSample2';
// import CssModule from 'pages/examples/CssModule';
// import CssInJs from 'pages/examples/CssInJs';
// import Clock from 'pages/examples/Clock';

function App() {
  // const windowWidth = useWindowWidth();
  return (
    <>
      <div className="">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/blog/" />} />
          <Route path="/accounts/login/" element={<PageLogin />} />
          <Route path="/accounts/profile/" element={<PageProfile />} />
          <Route path="/accounts/signup/" element={<PageSignup />} />

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
          <Route path="/library/" element={<PageLibraryIndex />} />
          <Route path="/library/new/" element={<PageLibraryBookForm />} />
          <Route path="/library/:bookId/" element={<PageLibraryBookDetail />} />
          <Route
            path="/library/:bookId/edit/"
            element={<PageLibraryBookForm />}
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
        {/* ????????? ???????????? : {windowWidth}px */}
      </div>
      {/* <Routes>
        <Route path="/examples/clock/" element={<Clock />} />
      </Routes> */}
    </>
  );
}

export default App;
