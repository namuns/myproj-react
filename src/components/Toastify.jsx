import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function Toast() {
  const notify = () => toast('성공적으로 삭제 되었습니다 !');

  return (
    <div>
      <ToastContainer
        render={toast}
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={notify}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Toast;
