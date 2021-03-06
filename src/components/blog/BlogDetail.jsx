import { Link } from 'react-router-dom';
import { useApiAxios } from 'api/base';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function BlogDetail({ postId }) {
  const navigate = useNavigate();

  const [{ data: post, loading, error }, refetch] = useApiAxios(
    `/blog/api/posts/${postId}/`,
  );

  const [{ loading: deleteLoading, error: deleteError }, deletePost] =
    useApiAxios(
      {
        url: `/blog/api/posts/${postId}/`,
        method: 'DELETE',
      },
      { manual: true },
    );

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm('삭제하시겠습니까?')) {
      deletePost().then(() => {
        navigate('/blog/');
        toast.success('삭제 완료!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="shadow-lg rounded p-8 bg-white">
      {loading && <LoadingIndicator />}
      {deleteLoading && <LoadingIndicator>삭제 중 ...</LoadingIndicator>}
      {error &&
        `로딩 중 에러가 발생했습니다. (${error.response.status} ${error.response.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러가 발생했습니다. (${deleteError.response.status} ${deleteError.response.statusText})`}

      {post && (
        <>
          <h2 className="text-lg m-3 bold font-light text-gray-700 leading-relaxed">
            {post.title}
          </h2>
          <div>
            <h3 className="text-sm m">
              {post.content.split(/[\r\n]+/).map((line, index) => (
                <p className="my-3" key={index}>
                  {line}
                </p>
              ))}
              <img src={'https://placeimg.com/640/480/tech'} />
            </h3>
          </div>
        </>
      )}
      <hr className="my-3" />
      <div className="flex gap-4 mt-3 mb-10">
        <Link to="/blog/" className="hover:text-red-400">
          목록으로
        </Link>
        <Link to={`/blog/${postId}/edit/`} className="hover:text-red-400">
          수정하기
          <button
            disabled={deleteLoading}
            onClick={handleDelete}
            className=" hover:text-red-400 px-3 cursor-pointer"
          >
            삭제하기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogDetail;
