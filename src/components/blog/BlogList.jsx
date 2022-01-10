function Post({ post }) {
  const { title } = post;
  return (
    <div className="bg-blue-50 border border-gray-500 my-1 p-1">{title}</div>
  );
}
export default Post;
