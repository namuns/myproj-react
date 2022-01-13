import BlogForm from 'components/blog/BlogForm';
import { useNavigate, useParams } from 'react-router-dom';

function PageBlogForm() {
  const navigate = useNavigate();

  const { postId } = useParams();

  return (
    <BlogForm
      postId={postId}
      handleSave={(savedPost) => navigate(`/blog/${savedPost.id}/`)}
    />
  );
}
export default PageBlogForm;
