function BlogForm({ fieldValues, handleFieldChange, handleSubmit }) {
  return (
    <div>
      <div>
        제목
        <textarea
          name="title"
          cols="30"
          rows="1"
          value={fieldValues.title}
          onChange={handleFieldChange}
          className="bg-gray-200 border border-gray-400"
        ></textarea>
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
        className="bg-blue-100"
        onClick={() => handleSubmit()}
      >
        저장하기
      </button>
    </div>
  );
}
export default BlogForm;
