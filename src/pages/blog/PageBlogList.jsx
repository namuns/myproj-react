import DebugStates from 'components/DebugStates';
import { useEffect, useState } from 'react';
import Post from 'components/blog/BlogList';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from 'api/base';

function BlogList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = `/blog/api/posts/`;
    axiosInstance
      .get(url)
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

  const deletePost = (deletingPost) => {
    const { id: deletingPostId } = deletingPost;
    const url = `/blog/api/posts/${deletingPostId}/`;

    setLoading(true);
    setError(null);

    axiosInstance
      .delete(url)
      .then(() => {
        setPostList((prevPostList) =>
          prevPostList.filter((post) => post.id !== deletingPostId),
        );
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-md m-auto">
      <h2>BlogList</h2>
      {loading && <div>로딩..</div>}
      {error && <div>통신 오류!</div>}
      <button
        onClick={() => refetch()}
        className="text-purple-700 py-2 px-1 rounded-lg bg-purple-100 hover:bg-purple-200 font-medium transition-colors"
      >
        새로고침
      </button>
      <button
        onClick={() => navigate('/blog/new')}
        className="text-white py-2 px-1 uppercase rounded bg-green-400 hover:bg-green-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
      >
        새 포스팅
      </button>
      <div className="bg-red-200 max-w-md m-auto">
        {postList.map((post) => (
          <Post
            key={post.id}
            handleEdit={() => navigate(`/blog/${post.id}/edit/`)}
            handleDelete={() => deletePost(post)}
            post={post}
          />
        ))}
      </div>
      <hr />
      <DebugStates postList={postList} />
    </div>
  );
}
export default BlogList;
