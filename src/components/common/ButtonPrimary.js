const Button = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-700 text-base font-medium text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
    >
      {text}
    </button>
  );
};

export default Button;
