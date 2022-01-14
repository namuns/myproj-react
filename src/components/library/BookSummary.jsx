import { Link } from 'react-router-dom';
import Rating from 'components/Rating';

function BookSummary({ book }) {
  return (
    <div className="w-full md:flex p-6 flex flex-col flex-grow flex-shrink mx-0">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <Link
          to={`/library/${book.id}/`}
          className="flex flex-wrap no-underline hover:no-underline prose-xl"
        >
          {book.photo && <img src={book.photo} alt={book.title} />}
          <h1 className="w-full text-gray-600 text-xs md:text-sm px-6">
            카테고리
          </h1>
          <div>
            <h3 className="w-full font-bold text-xl text-gray-900 px-6">
              <Link to={`/library/${book.id}/`}>{book.title}</Link>
            </h3>
            <h2 className="text-gray-800 font-serif text-base px-6 mb-5">
              <Rating score={book.score} />
            </h2>
          </div>
        </Link>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
          <div className="flex items-center justify-between">
            <img
              className="w-8 h-8 rounded-full mr-4 avatar"
              data-tippy-content="author"
              src="http://i.pravatar.cc/300"
              alt="author"
              tabIndex="0"
            />
            <h3 className="text-gray-600 text-xs md:text-sm">1 MIN READ</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookSummary;
