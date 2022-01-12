import BlogForm from 'components/blog/BlogForm';
import { useNavigate } from 'react-router-dom';

function PageBlogForm() {
  const navigate = useNavigate();
  return (
    <BlogForm
      postId={null}
      handleSave={(savedPost) => navigate(`/blog/${savedPost.id}/`)}
    />
  );
}
export default PageBlogForm;
