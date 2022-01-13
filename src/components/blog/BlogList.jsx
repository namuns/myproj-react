import { useApiAxios } from 'api/base';
// import DebugStates from 'components/DebugStates';
import BlogSummary from './BlogSummary';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

function BlogList() {
  const [{ data: postList, loading, error }, refetch] =
    useApiAxios('/blog/api/posts/');

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h3>포스트 목록</h3>
      {loading && '로딩 중 ...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {postList && postList.map((post) => <BlogSummary post={post} />)}
      {/* <DebugStates postList={postList} loading={loading} error={error} /> */}
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}
export default BlogList;
