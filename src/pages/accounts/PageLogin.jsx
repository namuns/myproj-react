import { useApiAxios } from 'api/base';
import useFieldValues from 'hooks/useFieldValues';

const INITIAL_FIELD_VALUES = { username: '', password: '' };

function PageLogin() {
  const { fieldValues, handleFieldChange } =
    useFieldValues(INITIAL_FIELD_VALUES);

  const [{ data }, getToken] = useApiAxios(
    {
      url: '/accounts/api/token/',
      method: 'POST',
    },
    { manual: true },
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    getToken({ data: fieldValues }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="bg-gray-300">
      <div className="p-8 lg:w-1/2 mx-auto">
        <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                name="username"
                type="text"
                placeholder="Username"
                value={fieldValues.username}
                onChange={handleFieldChange}
              />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-3 text-gray-400 p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
            </div>

            <div className="relative mt-3">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                name="password"
                type="password"
                placeholder="Password"
                value={fieldValues.password}
                onChange={handleFieldChange}
              />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-3 text-gray-400 p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-center mt-8">
              {' '}
              <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {' '}
                Login{' '}
              </button>{' '}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PageLogin;
