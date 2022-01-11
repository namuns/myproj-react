import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import { useState, useEffect } from 'react';
import Review from 'components/Review';
import { useNavigate } from 'react-router-dom';
import { API_HOST } from 'Constants';

function PageReviewList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = `${API_HOST}/shop/api/reviews/`;
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

  const deleteReview = (deletingReview) => {
    const { id: deletingReviewId } = deletingReview;
    const url = `${API_HOST}/shop/api/reviews/${deletingReviewId}/`;

    setLoading(true);
    setError(null);

    Axios.delete(url)
      .then(() => {
        //1. 삭제된 항목만 상탯값에서 제거
        setReviewList((prevReviewList) =>
          prevReviewList.filter((review) => review.id !== deletingReviewId),
        );
      })

      //   return prevReviewList.filter(
      //     (review) => review.id !== deletingReviewId),

      //       {
      //         return review.id !== deletingReviewId;
      //       }
      //   );
      // });
      //2. 전체를 새로고침

      .catch((error) => {
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
        className="bg-yellow-300 hover:bg-red-300 mr-1"
      >
        새로고침
      </button>

      <button
        onClick={() => navigate('/reviews/new/')}
        className="bg-blue-400 hover:bg-slate-400"
      >
        새 리뷰
      </button>

      <div className="">
        {reviewList.map((review) => (
          <Review
            key={review.id}
            review={review}
            handleDelete={() => deleteReview(review)}
          />
        ))}
      </div>

      <hr />
      <DebugStates loading={loading} error={error} reviewList={reviewList} />
    </div>
  );
}
export default PageReviewList;
