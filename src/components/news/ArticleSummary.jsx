import { Link } from 'react-router-dom';

function ArticleSummary({ article }) {
  return (
    <div>
      {article.photo && (
        <img
          src={article.photo}
          alt={article.title}
          className="w-10 h-10 mr-1 rounded inline"
        />
      )}
      <Link to={`/news/${article.id}/`}>{article.title}</Link>
    </div>
  );
}
export default ArticleSummary;
