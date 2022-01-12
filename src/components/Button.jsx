// https://v1.tailwindcss.com/components/buttons

// simple, fill, outline, bordered, disabled, 3d, elevated, icons

const COLORS = {
  class:
    'inline-flex items-center px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md mx-2',
  primary: 'bg-blue-500 hover:bg-blue-700 text-white',
  success: 'bg-green-500 hover:bg-green-700 text-white',
  // TODO: 다양한 스타일 추가
};

function Button({ type, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${COLORS[type]} font-bold py-2 px-4 rounded`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'class',
};

export default Button;
