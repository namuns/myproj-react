import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div className="collapse navbar-collapse hidden lg:block duration-300 shadow absolute top-100 left-0 mt-full bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none">
      <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
        <li className="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0">
          <MyLink to="/">홈으로</MyLink>
        </li>
        <li className="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0">
          <MyLink to="/accounts/profile/">프로필</MyLink>
        </li>
        <li className="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0">
          <MyLink to="/reviews/">리뷰</MyLink>
        </li>
        {/* <li>
          <MyLink to="/examples/components/">컴포넌트 예시</MyLink>
        </li> */}
        <li className="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0">
          <MyLink to="/blog/">블로그</MyLink>
        </li>
        {/* <li>
          <MyLink to="/examples/clock/">시계</MyLink>
        </li>
        <li>
          <MyLink to="/examples/css-module/">CssModule</MyLink>
        </li>
        <li>
          <MyLink to="/examples/css-in-js/">Cssinjs</MyLink>
        </li> */}
        <div className="flex items-center py-2 -mx-1 md:mx-0">
          <li className="py-2 -mx-1 md:mx-0 block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto">
            <MyLink to="/accounts/login/">로그인</MyLink>
          </li>
        </div>
      </ul>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <Link to={to} className="">
      {children}
    </Link>
  );
}

export default TopNav;
