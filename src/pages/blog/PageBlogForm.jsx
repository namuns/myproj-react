import DebugStates from 'components/DebugStates';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from 'components/blog/BlogForm';
import useFieldValues from 'hooks/useFieldValues';
import { useEffect, useState } from 'react/cjs/react.development';
import { axiosInstance } from 'api/base';

function PageBlogForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { postId } = useParams();
  const { fieldValues, handleFieldChange, setFieldValues, clearFieldValues } =
    useFieldValues({
      title: '',
      content: '',
    });

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      const url = `/blog/api/posts/${postId}/`;
      try {
        const response = await axiosInstance.get(url);
        setFieldValues(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    if (postId) fetchPost();
    else clearFieldValues();
  }, [postId, setFieldValues, clearFieldValues]);

  const savePost = async () => {
    const url = !postId ? `/blog/api/posts/` : `/blog/api/posts/${postId}/`;
    try {
      if (!postId) {
        await axiosInstance.post(url, fieldValues);
      } else {
        await axiosInstance.put(url, fieldValues);
      }
      navigate('/blog/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>
        블로그 포스팅
        {postId ? ' 수정하기' : ' 쓰기'}
      </h2>
      <PostForm
        fieldValues={fieldValues}
        handleFieldChange={handleFieldChange}
        handleSubmit={savePost}
      />
      <DebugStates postId={postId} fieldValues={fieldValues} />
    </div>
  );
}
export default PageBlogForm;
