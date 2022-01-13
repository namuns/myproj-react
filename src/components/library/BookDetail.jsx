import { useApiAxios } from 'api/base';
import { Link } from 'react-router-dom';
import LoadingIndicator from 'components/LoadingIndicator';

function BookDetail({ bookId }) {
  const [{ data: book, loading, error }] = useApiAxios(
    `/library/api/books/${bookId}/`,
  );

  return (
    <div>
      {loading && <LoadingIndicator />}
      {error &&
        `로딩 중 에러가 발생했습니다. (${error.response.status} ${error.response.statusText})`}
      {book && (
        <>
          <h3 className="text-2xl my-5">{book.title}</h3>
          {book.photo && <img src={book.photo} alt={book.title} />}
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
      </div>
    </div>
  );
}

export default BookDetail;
