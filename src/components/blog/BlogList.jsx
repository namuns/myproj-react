import { useApiAxios } from 'api/base';
// import DebugStates from 'components/DebugStates';
import BlogSummary from './BlogSummary';
import { useEffect } from 'react';

function BlogList() {
  const [{ data: postList, loading, error }, refetch] =
    useApiAxios('/blog/api/posts/');

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div class="flex flex-wrap no-underline hover:no-underline">
      <h3 class="w-full font-bold text-xl text-gray-900 px-6">포스트 목록</h3>
      {loading && '로딩 중 ...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      <h1>{postList && postList.map((post) => <BlogSummary post={post} />)}</h1>

      {/* <DebugStates postList={postList} loading={loading} error={error} /> */}
    </div>
  );
}
export default BlogList;
