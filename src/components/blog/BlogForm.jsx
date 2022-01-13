import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import LoadingIndicator from 'components/LoadingIndicator';
import useFieldValues from 'hooks/useFieldValues';
import { toast } from 'react-toastify';

const INIT_FIELD_VALUES = { title: '', content: '' };

function BlogForm({ postId, handleSave }) {
  const [{ data: post, loading: getLoading, error: getError }] = useApiAxios(
    `/blog/api/posts/${postId}/`,
    { manual: !postId },
  );

  const [
    {
      loading: saveLoading,
      error: saveError,
      errorMessages: saveErrorMessages,
    },
    saveRequest,
  ] = useApiAxios(
    {
      url: !postId ? `/blog/api/posts/` : `/blog/api/posts/${postId}`,
      method: !postId ? 'POST' : 'PUT',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } = useFieldValues(
    post || INIT_FIELD_VALUES,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    saveRequest({
      data: fieldValues,
    }).then((response) => {
      const savedPost = response.data;
      if (handleSave) handleSave(savedPost);
      toast.success('저장 완료!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  return (
    <div>
      <div>
        {saveLoading && <LoadingIndicator>저장 중 ...</LoadingIndicator>}
        {saveError &&
          `저장 중 에러가 발생했습니다. (${saveError.response.status} ${saveError.response.statusText})`}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-gray-200 border border-gray-400">
          <input
            name="title"
            value={fieldValues.title}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.title?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div>
          내용
          <textarea
            name="content"
            cols="30"
            rows="10"
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          ></textarea>
          {saveErrorMessages.content?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <button
          type="submit"
          className="bg-blue-100 my-3"
          onClick={(e) => handleSubmit(e)}
        >
          저장하기
        </button>
      </form>
      <DebugStates
        saveErrorMessages={saveErrorMessages}
        fieldValues={fieldValues}
      />
    </div>
  );
}
export default BlogForm;
