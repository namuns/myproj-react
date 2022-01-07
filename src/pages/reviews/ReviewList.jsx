import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import { useState, useEffect } from 'react';
import Review from 'components/Review';

function PageReviewList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    // Promise 객체
    Axios.get(url)
      .then(({ data }) => {
        setReviewList(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <h2>ReviewList</h2>

      {loading && <div>Loading...</div>}
      {error && <div>통신중 오류 발생!</div>}

      <button
        onClick={() => refetch()}
        className="bg-yellow-300 hover:bg-red-300"
      >
        새로고침
      </button>

      <div className="">
        {reviewList.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>

      <hr />
      <DebugStates loading={loading} error={error} reviewList={reviewList} />
    </div>
  );
}
export default PageReviewList;
