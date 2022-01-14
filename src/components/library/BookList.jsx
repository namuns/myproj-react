import { useApiAxios } from 'api/base';
// import DebugStates from 'components/DebugStates';
import BookSummary from './BookSummary';

function BookList() {
  const [{ data: bookList, loading, error }] =
    useApiAxios(`/library/api/books/`);

  return (
    <div className="my-5 ">
      {loading && '로딩 중...'}
      {error && '로딩 중 에러가 발생!'}
      {bookList && (
        <div className="flex space-x-1">
          {bookList.map((book) => (
            <div
              key={book.id}
              className="w-1 md:w-2/3 lg:w-4/5 px-4 transition-transform hover:-translate-y-5 duration-100 "
            >
              <BookSummary book={book} />
            </div>
          ))}
        </div>
      )}
      {/* <DebugStates bookList={bookList} loading={loading} error={error} /> */}
    </div>
  );
}

export default BookList;
