function Post({ post, handleDelete, handleEdit, navigate }) {
  const { title } = post;
  return (
    <div className="bg-blue-50 border border-gray-500 my-1 p-1 cursor-pointer">
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

      <h2
        className="hover:text-gray-400 cursor-pointer"
        onClick={() => {
          navigate(`/blog/${post.id}/`);
        }}
      >
        {title}
      </h2>
    </div>
  );
}
export default Post;
