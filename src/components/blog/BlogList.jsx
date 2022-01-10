function Post({ post, handleDetail, handleDelete, handleEdit }) {
  const { title } = post;
  return (
    <div
      className="bg-blue-50 border border-gray-500 my-1 p-1 cursor-pointer"
      onClick={() => handleDetail()}
    >
      <div>
        <span
          onClick={() => handleEdit()}
          className="hover:text-red-400 cursor-pointer mr-1"
        >
          수정
        </span>
        <span
          onClick={() => handleDelete()}
          className="hover:text-red-400 cursor-pointer"
        >
          삭제
        </span>
      </div>
      {title}
    </div>
  );
}
export default Post;
