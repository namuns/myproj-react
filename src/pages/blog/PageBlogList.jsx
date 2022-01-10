import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import { useEffect, useState } from 'react';

function BlogList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = 'http://localhost:8000/blog/api/posts/';
    Axios.get(url)
      .then(({ data }) => {
        console.group('정상 응답');
        console.groupEnd();
        setPostList(data);
      })
      .catch((error) => {
        console.group('에러 응답');
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="text-red-400 text-lg border-l-4 border-red-500 pl-1 mb-2">
      <h2>BlogList</h2>

      {loading && <div>로딩..</div>}
      {error && <div>통신 오류!</div>}

      <button
        onClick={() => refetch()}
        className="bg-yellow-400 hover:bg-red-400"
      >
        새로고침
      </button>

      <hr />
      <DebugStates postList={postList} />
    </div>
  );
}
export default BlogList;
