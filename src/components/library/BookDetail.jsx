import { useApiAxios } from 'api/base';
import { Link, useNavigate } from 'react-router-dom';
import LoadingIndicator from 'components/LoadingIndicator';
import { useEffect } from 'react';

function BookDetail({ bookId }) {
  const navigate = useNavigate();

  const [{ data: book, loading, error }, refetch] = useApiAxios(
    { url: `/library/api/books/${bookId}/` },
    { manual: true },
  );

  const [{}, deleteBook] = useApiAxios(
    {
      url: `/library/api/books/${bookId}/`,
      method: 'DELETE',
    },
    { manual: true },
  );

  const handleDelete = () => {
    if (window.confirm('정말 삭제 할까요?')) {
      deleteBook().then(() => {
        navigate('/library/');
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {error &&
        `로딩 중 에러가 발생했습니다. (${error.response.status} ${error.response.statusText})`}
      {book && (
        <>
          <h3 className="text-2xl my-5">{book.title}</h3>

          {/* 
          {book.photo && (
            <img src={book.photo} alt={book.title} width="576" height="1024" />
          )} */}

          <div class="post-media container large">
            <div class="u-placeholder horizontal">
              <img
                class="object-center mx-8"
                src={book.photo}
                alt={book.title}
                width="476"
                height="924"
              />
            </div>
          </div>

          <div>
            {book.content.split(/[\r\n]+/).map((line, index) => (
              <p className="my-3" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr className="my-3" />
      <div className="flex gap-4 mt-3 mb-10">
        <Link to="/library/">목록으로</Link>
        <Link to={`/library/${bookId}/edit/`}>수정하기</Link>
        <button onClick={handleDelete}>삭제하기</button>
      </div>
    </div>
  );
}

export default BookDetail;
