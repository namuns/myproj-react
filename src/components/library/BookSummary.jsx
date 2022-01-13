import { Link } from 'react-router-dom';

function BookSummary({ book }) {
  return (
    <div>
      <Link to={`/library/${book.id}/`}>
        {book.photo && <img src={book.photo} alt={book.title} />}
      </Link>
      <div>
        <h3>
          <Link to={`/library/${book.id}/`}>{book.title}</Link>
        </h3>
      </div>
    </div>
  );
}
export default BookSummary;
