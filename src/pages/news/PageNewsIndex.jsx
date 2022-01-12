import ArticleList from 'components/news/ArticleList';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

// 뉴스 서비스의 대문 페이지
function PageNewsIndex() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>뉴스 페이지</h2>
      <ArticleList />

      <Button onClick={() => navigate('/news/new')}>새 포스팅 쓰기</Button>

      <h2>뉴스 추천</h2>

      <h2>광고</h2>
    </div>
  );
}

export default PageNewsIndex;
