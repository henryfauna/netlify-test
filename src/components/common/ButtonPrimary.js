const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      class="bg-purple-700 hover:bg-purple-500 text-sm text-white font-bold py-2 px-4 rounded-md"
    >
      {text}
    </button>
  );
};

export default Button;
