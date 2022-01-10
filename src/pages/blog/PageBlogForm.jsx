import DebugStates from 'components/DebugStates';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from 'components/blog/BlogForm';
import useFieldValues from 'hooks/useFieldValues';
import Axios from 'axios';

function PageBlogForm() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { fieldValues, handleFieldChange } = useFieldValues({
    title: '',
    content: '',
  });

  const savePost = async () => {
    const url = !postId
      ? 'http://localhost:8000/blog/api/posts/'
      : `http://localhost:8000/blog/api/posts/${postId}/`;
    try {
      await Axios.post(url, fieldValues);
      navigate('/blog/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>
        PageBlogForm
        {postId ? '수정' : '생성'}
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
