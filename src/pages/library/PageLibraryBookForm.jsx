import { useNavigate, useParams } from 'react-router-dom';
import BookForm from 'components/library/BookForm';

function PageLibraryBookForm() {
  const navigate = useNavigate();

  const { bookId } = useParams();

  return (
    <BookForm
      articleId={bookId}
      handleDidSave={(savedPost) => navigate(`/library/${savedPost.id}/`)}
    />
  );
}
export default PageLibraryBookForm;
