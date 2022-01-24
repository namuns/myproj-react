import { useAuth } from 'contexts/AuthContext';
import { Link, NavLink } from 'react-router-dom';

function TopNav() {
  const [auth, , , logout] = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="my-3">
      <ul className="flex place-content-between gap-4">
        <li className="px-4 py-3 font-semibold">
          <NavLink to="/">남문수의 블로그</NavLink>
        </li>
        <div className="flex">
          <MyLink to="/blog/">블로그</MyLink>
          <MyLink to="/news/">뉴스</MyLink>
          <MyLink to="/library/">도서관</MyLink>
          {!auth.isLoggedIn && (
            <>
              <MyLink to="/accounts/login/">로그인</MyLink>
              <MyLink to="/accounts/signup/">회원가입</MyLink>
            </>
          )}

          {auth.isLoggedIn && (
            <>
              <MyLink to="/accounts/profile/">프로필</MyLink>
              <button onClick={handleLogout} className={baseClassName}>
                로그아웃
              </button>
            </>
          )}
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
