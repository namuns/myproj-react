import { Link, NavLink } from 'react-router-dom';

function TopNav() {
  return (
    <div className="my-3">
      <ul className="flex place-content-between gap-4">
        <li className="px-4 py-3 font-semibold">
          <MyLink to="/">남문수 블로그</MyLink>
        </li>
        <div className="flex">
          <MyLink to="/blog/">블로그</MyLink>
          <MyLink to="/news/">뉴스룸</MyLink>
          <MyLink to="/accounts/login/">로그인</MyLink>
          <MyLink to="/accounts/profile/">프로필</MyLink>
        </div>
        {/* <li>
          <MyLink to="/examples/context-api/">Context API</MyLink>
        </li>
        <li>
          <MyLink to="/examples/context-api-2/">Context API #2</MyLink>
        </li> */}
        {/* <li>
          <MyLink to="/examples/clock/">시계</MyLink>
        </li>
        <li>
          <MyLink to="/examples/css-module/">CssModule</MyLink>
        </li>
        <li>
          <MyLink to="/examples/css-in-js/">Cssinjs</MyLink>
        </li> */}
      </ul>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        baseClassName + ' ' + (isActive ? 'border-b-4 border-red-400' : '')
      }
    >
      {children}
    </NavLink>
  );
}

const baseClassName =
  'px-4 pt-3 pb-2 font-semibold hover:bg-red-200 hover:text-red-500 hover:text-white';

export default TopNav;
