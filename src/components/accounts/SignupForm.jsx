import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import { useApiAxios } from 'api/base';
import useAuth from 'hooks/useAuth';
import useFieldValues from 'hooks/useFieldValues';
import { useNavigate } from 'react-router-dom';

const INITIAL_AUTH = { isLoggedIn: false };
const INITIAL_FIELD_VALUES = { username: '', password: '', password2: '' };

function SignupForm() {
  const navigate = useNavigate();

  const [{ loading, error, errorMessages }, refetch] = useApiAxios(
    {
      url: '/accounts/api/signup/',
      method: 'POST',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } =
    useFieldValues(INITIAL_FIELD_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();

    refetch({ data: fieldValues }).then((saveRequest) => {
      const { username, password, password2 } = saveRequest.data;

      console.log('username :', username);
      console.log('password :', password);
      console.log('password2 :', password2);

      navigate('/');
    });
  };

  return (
    <div>
      <h2>회원가입</h2>

      {error?.response?.status === 401 && (
        <div className="text-red-400">회원가입에 실패했습니다.</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            placeholder="UserName"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <div className="my-3">
          <input
            type="password"
            name="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
            placeholder="Password"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <div>
          <input
            type="password"
            name="password2"
            value={fieldValues.password2}
            onChange={handleFieldChange}
            placeholder="Password"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <div>
          <Button>가입하기</Button>
        </div>
      </form>

      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}

export default SignupForm;
