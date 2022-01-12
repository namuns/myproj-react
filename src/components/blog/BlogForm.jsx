import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import LoadingIndicator from 'components/LoadingIndicator';
import useFieldValues from 'hooks/useFieldValues';

const INIT_FIELD_VALUES = { title: '', content: '' };

function BlogForm({ postId, handleSave }) {
  const [{ loading: saveLoading, error: saveError }, saveRequest] = useApiAxios(
    {
      url: '/news/api/articles/',
      method: 'POST',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } = useFieldValues(INIT_FIELD_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();

    saveRequest({
      data: fieldValues,
    }).then((response) => {
      const savedPost = response.data;
      if (handleSave) handleSave(savedPost);
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
        </div>

        <div>
          내용
          <textarea
            name="content"
            cols="30"
            rows="10"
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="bg-gray-200 border border-gray-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-100 my-3"
          onClick={() => handleSubmit()}
        >
          저장하기
        </button>
      </form>
      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}
export default BlogForm;
