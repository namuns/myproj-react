import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import FieldErrorMessages from 'components/forms/FieldErrorMessages';
import H2 from 'components/H2';
import Input from 'components/forms/Input';
import Loading from 'components/icons/Loading';
import Textarea from 'components/forms/Textarea';
import useFieldValues from 'hooks/useFieldValues';
import useAuth from 'hooks/useAuth';
import { useApiAxios } from 'api/base';
import produce from 'immer';
import { useEffect } from 'react';

const INIT_FIELD_VALUES = { title: '', content: '' };

function ArticleForm({ articleId, handleDidSave }) {
  const [auth] = useAuth();

  // articleId 값이 있을 때에만 조회
  // articleId => manual=false
  // !articleId => manual=true
  const [{ data: article, loading: getLoading, error: getError }] = useApiAxios(
    {
      url: `/news/api/articles/${articleId}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
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
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true },
  );
  const { fieldValues, handleFieldChange, setFieldValues } = useFieldValues(
    article || INIT_FIELD_VALUES,
  );
  useEffect(() => {
    // 서버로 photo=null이 전달 되면 아래 오류가 발생
    //  - fieldValues에서 photo만 제거해주면 됨
    //  - photo=null이라면 빈 문자열로 변경
    // setFieldValues((prevFieldVlaues) => ({
    //   ...prevFieldVlaues,
    //   photo: '',
    // }));
    // 인자 1개를 받는 함수를 리턴 : 원본
    // 함수(원본) => 변경된 사본을 리턴
    // const fn = produce((draft) => {
    //   draft.photo = '';
    // }),
    setFieldValues(
      produce((draft) => {
        draft.photo = '';
      }),
    );
  }, [article]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // fieldValues : 객체 ( 파일을 제외 )
    // 파일을 업로드 하려면, formData(라는 클래스가 있다.) 인스턴스를 써야...
    const formData = new FormData();
    Object.entries(fieldValues).forEach(([name, value]) => {
      if (Array.isArray(value)) {
        const fileList = value;
        // 아랫줄에서 name은 키가 아니라 필드명 -> 파일 여러개 넘겨줌
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

      <FieldErrorMessages errorMessages={saveErrorMessages.non_field_errors} />

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <Input
            type="text"
            name="title"
            value={fieldValues.title}
            placeholder="기사 제목을 입력해주세요."
            onChange={handleFieldChange}
            errorMessages={saveErrorMessages.title}
          />
        </div>

        <div className="my-3">
          <Textarea
            name="content"
            value={fieldValues.content}
            placeholder="기사 내용을 입력해주세요."
            onChange={handleFieldChange}
            errorMessages={saveErrorMessages.content}
          />
        </div>

        <div className="my-3">
          <Input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            value={fieldValues.photo}
            onChange={handleFieldChange}
            errorMessages={saveErrorMessages.photo}
          />
        </div>

        <div className="my-3">
          <Button disabled={saveLoading}>
            {saveLoading && <Loading className="w-10 h-10" />}
            저장하기
          </Button>
          {saveError &&
            saveError.response?.status !== 400 &&
            `저장 중 에러가 발생했습니다. (${saveError.response?.status} ${saveError.response?.statusText})`}
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
