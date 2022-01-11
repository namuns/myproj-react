import { useNavigate } from 'react-router-dom';

function Post({ post, handleDelete, handleEdit }) {
  const navigate = useNavigate();
  const { title } = post;
  return (
    <div className="bg-blue-50 border border-gray-500 my-1 p-1 max-w-md">
      <div className="text-right">
        <span
          onClick={() => handleEdit()}
          className="hover:text-gray-400 cursor-pointer mr-1 text-xs px-3 bg-blue-200 text-blue-800 rounded-full"
        >
          수정
        </span>
        <span
          onClick={() => handleDelete()}
          className="hover:text-gray-400 cursor-pointer text-xs px-3 bg-red-200 text-red-800 rounded-full"
        >
          삭제
        </span>
      </div>

      <h2
        className="hover:text-gray-400 text-red-400 text-lg border-l-4 border-red-500 pl-1 mb-2 cursor-pointer"
        onClick={() => {
          navigate(`/blog/${post.id}`);
        }}
      >
        {title}
      </h2>
    </div>
  );
}
export default Post;
