import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import H2 from 'components/H2';
import LoadingIndicator from 'components/LoadingIndicator';
import { useApiAxios } from 'api/base';
import useFieldValues from 'hooks/useFieldValues';
import { useEffect } from 'react';
import produce from 'immer';

const INIT_FIELD_VALUES = { title: '', content: '' };
// articlId==undefined : 생성
// articleId!==undefined : 수정

function ArticleForm({ articleId, handleDidSave }) {
  // articleId 값이 있을 때에만 조회
  // articleId 있을 때 메뉴얼을 거짓으로 둬야 자동으로 조회
  // 없을 때는 메뉴를 참으로
  const [{ data: article, loading: getLoading, error: getError }] = useApiAxios(
    `/news/api/articles/${articleId}/`,
    { manual: !articleId },
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
      url: !articleId
        ? '/news/api/articles/'
        : `/news/api/articles/${articleId}/`,
      method: !articleId ? 'POST' : 'PUT',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange, setFieldValues } = useFieldValues(
    article || INIT_FIELD_VALUES,
  );

  useEffect(() => {
    // 서버로 photonull이 전달이 되면, 아래 오류가 발생
    //fieldValues에서 photo만 제거해주면 주거나,
    //   - 대응 : fieldValues에서 photo만 제거해주거나, photo=null이라면 빈 문자열로 변경
    // setFieldValues((prevFieldValues) => ({ ...prevFieldValues, photo: '' }));
    // }, [article]);

    setFieldValues((prevFieldValues) => {
      const newFieldValues = produce(prevFieldValues, (draft) => {
        draft.photo = '';
      });
      return newFieldValues;
    });
  }, [article]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // fieldValues : 객체 ( 파일을 제외하고는)
    // 파일을 업로드 하려면, formData 인스턴스를 써야한다.
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
      <H2>Article Form</H2>

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
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.title?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div className="my-3">
          <textarea
            name="content"
            value={fieldValues.photo}
            onChange={handleFieldChange}
            className="p-1 bg-gray-100 w-full h-80 outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.content?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div className="my-3">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            //value="" 는 지정하지 않는다
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
        article={article}
        getLoading={getLoading}
        getError={getError}
        saveErrorMessages={saveErrorMessages}
        fieldValues={fieldValues}
      />
    </div>
  );
}

export default ArticleForm;
