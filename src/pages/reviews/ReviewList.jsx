import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import { useState, useEffect } from 'react';

function PageReviewList() {
  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    // Promise 객체
    Axios.get(url)
      .then(({ data }) => {
        console.group('정상응답');
        console.log(data);
        console.groupEnd();
        setReviewList(data);
      })
      .catch((error) => {
        console.group('에러응답');
        console.log(error);
        console.groupEnd();
      });
  };
  return (
    <div>
      <h2>ReviewList</h2>
      <hr />
      <DebugStates reviewList={reviewList} />
      <pre>{JSON.stringify(reviewList, null, 2)}</pre>
    </div>
  );
}
export default PageReviewList;
