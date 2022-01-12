import { useNavigate } from 'react-router-dom';
import ArticleForm from './ArticleForm';

function PageNewsArticleForm() {
  const navigate = useNavigate();

  return (
    <ArticleForm
      articleId={null}
      handleDidSave={(savedPost) => navigate(`/news/${savedPost.id}`)}
    />
  );
}

export default PageNewsArticleForm;
