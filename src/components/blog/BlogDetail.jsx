function BlogDetail({ post }) {
  return (
    <div>
      <h2 className="text-lg m-3 bold">{post.title}</h2>
      <h3 className="text-sm m">{post.content}</h3>
    </div>
  );
}

export default BlogDetail;
