import ArticleDetail from 'components/news/ArticleDetail';
import { useParams } from 'react-router-dom';

function PageNewsArticleDetail() {
  const { articleId } = useParams();
  return (
    <div>
      <ArticleDetail articleId={articleId} />

      <h3>비슷한 기사 목록</h3>

      <h3>당신이 관심 있을 만한 기사</h3>

      <h3>광고</h3>
    </div>
  );
}
export default PageNewsArticleDetail;
