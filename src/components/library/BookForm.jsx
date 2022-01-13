import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import LoadingIndicator from 'components/LoadingIndicator';
import { useApiAxios } from 'api/base';
import useFieldValues from 'hooks/useFieldValues';
import { useEffect } from 'react';
import produce from 'immer';

const INIT_FIELD_VALUES = { title: '', author: '', content: '' };

function BookForm({ bookId, handleDidSave }) {
  const [{ data: book, loading: getLoading, error: getError }] = useApiAxios(
    `/library/api/books/${bookId}/`,
    { manual: !bookId },
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
      url: !bookId
        ? '/library/api/books/'
        : `/library/api/books/${bookId}/edit`,
      method: !bookId ? 'POST' : 'PUT',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange, setFieldValues } = useFieldValues(
    book || INIT_FIELD_VALUES,
  );

  useEffect(() => {
    setFieldValues((prevFieldValues) => {
      const newFieldValues = produce(prevFieldValues, (draft) => {
        draft.photo = '';
      });
      return newFieldValues;
    });
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(fieldValues).forEach(([name, value]) => {
      if (Array.isArray(value)) {
        const fileList = value;
        fileList.forEach((file) => formData.append(name, file));
      } else {
        formData.append(name, value);
      }
    });

    saveRequest({
      data: formData,
    }).then((response) => {
      const savedPost = response.data;
      if (handleDidSave) handleDidSave(savedPost);
    });
  };

  return (
    <div>
      {saveLoading && <LoadingIndicator>저장 중..</LoadingIndicator>}
      {saveError &&
        `저장 중 에러가 발생했습니다. ${saveError.response.status} ${saveError.response.statusText}`}

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            name="title"
            value={fieldValues.title}
            onChange={handleFieldChange}
            type="text"
          />
          {saveErrorMessages.title?.map((message) => (
            <p>{message}</p>
          ))}
        </div>

        <div className="my-3">
          <input
            name="author"
            value={fieldValues.author}
            onChange={handleFieldChange}
            type="text"
          />
          {saveErrorMessages.author?.map((message) => (
            <p>{message}</p>
          ))}
        </div>

        <div className="my-3">
          <textarea
            name="content"
            value={fieldValues.content}
            onChange={handleFieldChange}
          />
          {saveErrorMessages.content?.map((message) => (
            <p>{message}</p>
          ))}
        </div>

        <div className="my-3">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handleFieldChange}
          />
          {saveErrorMessages.photo?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div className="my-3">
          <Button>저장하기</Button>
        </div>
      </form>
      <DebugStates
        book={book}
        getLoading={getLoading}
        getError={getError}
        saveErrorMessages={saveErrorMessages}
        fieldValues={fieldValues}
      />
    </div>
  );
}

export default BookForm;
