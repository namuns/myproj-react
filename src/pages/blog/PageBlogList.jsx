import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import BlogList from 'components/blog/BlogList';

// 뉴스 서비스의 대문 페이지
function PageBlogList() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>포스팅 페이지</h2>
      <BlogList />

      <Button onClick={() => navigate('/blog/new')}>새 포스팅 쓰기</Button>

      <h2>광고</h2>
    </div>
  );
}

export default PageBlogList;
