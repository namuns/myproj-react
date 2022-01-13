import BookDetail from 'components/library/BookDetail';
import { useParams } from 'react-router-dom';

function PageLibraryBookDetail() {
  const { bookId } = useParams();
  return (
    <div>
      <BookDetail bookId={bookId} />
    </div>
  );
}
export default PageLibraryBookDetail;
