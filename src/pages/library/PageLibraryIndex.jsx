import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import BookList from 'components/library/BookList';

function PageLibraryIndex() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>포스팅 페이지</h2>
      <BookList />

      <Button onClick={() => navigate('/library/new')}>글쓰기</Button>
    </div>
  );
}

export default PageLibraryIndex;
