import { Link } from 'react-router-dom';
import { useApiAxios } from 'api/base';

function BlogDetail({ postId }) {
  const [{ data: post, loading, error }] = useApiAxios(
    `/blog/api/posts/${postId}/`,
  );

  return (
    <div className="shadow-lg rounded p-8 bg-white">
      {loading && '로딩 중 ...'}
      {error && '에러가 발생했습니다.'}
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
        <Link to="/news/" className="hover:text-red-400">
          목록으로
        </Link>
        <Link to={`/news/${postId}/edit/`} className="hover:text-red-400">
          수정하기
        </Link>
      </div>
    </div>
  );
}

export default BlogDetail;
