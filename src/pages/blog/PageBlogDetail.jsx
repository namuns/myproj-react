import BlogDetail from 'components/blog/BlogDetail';
import { useParams } from 'react-router-dom';

function PageBlogDetail() {
  const { postId } = useParams();

  return (
    <div>
      <h2 className="text-red-400 text-lg border-l-4 border-red-500 pl-1 mb-2">
        <BlogDetail postId={postId} />
      </h2>
    </div>
  );
}
export default PageBlogDetail;
