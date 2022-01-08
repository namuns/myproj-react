import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DebugStates from 'components/DebugStates';

function ReviewForm() {
  const [fieldValues, setFieldValues] = useState({ content: '', score: 0 });
  const [loading, setLoading] = useState(false);
  const [reviewList, setReviewList] = useState([]);

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const addReview = (e) => {
    setLoading(true);
    setError(null);

    e.preventDefault();
    const url = `http://127.0.0.1:8000/shop/api/reviews/`;

    Axios.post(url, fieldValues)
      .then(() => {
        navigate('/reviews/');
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setFieldValues({});
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value,
    }));
  };

  const editReview = (editingReview) => {
    console.log('editReview :', editingReview);

    const { id: editingReviewId } = editingReview;
    const url = `http://127.0.0.1:8000/shop/api/reviews/${editingReviewId}/`;
    Axios.patch(url)
      .then(({ data }) => {
        setReviewList(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    setFieldValues(editingReview);
    setLoading(true);
  };

  return (
    <div>
      <h2>Review Form</h2>

      {loading && <div>Loading...</div>}
      {error && <div>통신중 오류 발생!</div>}

      <div className="mb-4">
        <div className="rounded border-2 border-gray-300 p-3 my-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            평점
          </label>

          <select
            onChange={handleChange}
            name="score"
            className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            리뷰
          </label>
          <textarea
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            name="content"
          />

          <button
            className="shadow border bg-blue-100 hover:bg-blue-300 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
            onClick={addReview}
          >
            저장하기
          </button>
          <hr />
          <DebugStates
            loading={loading}
            error={error}
            reviewList={reviewList}
          />
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
