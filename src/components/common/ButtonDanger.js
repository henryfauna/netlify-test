const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      class="hover:text-white hover:bg-purple-700 text-sm text-purple-700 font-bold py-1 px-4 rounded-full"
    >
      {text}
    </button>
  );
};

export default Button;
