import BlogDetail from 'components/blog/BlogDetail';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PageBlogDetail() {
  const [loading, setLoading] = useState(false);
  const { postId } = useParams();
  const [post, setPost] = useState({ title: '', content: '' });

  useEffect(() => {
    setLoading(true);
    const url = `http://localhost:8000/blog/api/posts/${postId}/`;

    Axios.get(url)
      .then(({ data }) => {
        setPost(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [postId]);

  return (
    <div>
      <h2 className="text-red-400 text-lg border-l-4 border-red-500 pl-1 mb-2">
        BlogDetail
      </h2>
      <h3>
        <BlogDetail post={post} loading={loading} />
      </h3>
    </div>
  );
}
export default PageBlogDetail;
