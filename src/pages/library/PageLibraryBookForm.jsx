import { useNavigate, useParams } from 'react-router-dom';
import BookForm from 'components/library/BookForm';

function PageLibraryBookForm() {
  const navigate = useNavigate();

  const { bookId } = useParams();

  return (
    // <div>bookId: {bookId}</div>
    <BookForm
      bookId={bookId}
      handleDidSave={(savedPost) => navigate(`/library/${savedPost.id}/`)}
    />
  );
}
export default PageLibraryBookForm;
