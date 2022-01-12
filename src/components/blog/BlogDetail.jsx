function BlogDetail({ post }) {
  return (
    <div className="shadow-lg rounded p-8 bg-white">
      <h2 className="text-lg m-3 bold font-light text-gray-700 leading-relaxed">
        {post.title}
      </h2>
      <h3 className="text-sm m">{post.content}</h3>

      <img src={'https://placeimg.com/640/480/tech'} />
    </div>
  );
}

export default BlogDetail;
