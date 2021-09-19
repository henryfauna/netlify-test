import ButtonSecondary from "./ButtonSecondary";

const ListItem = ({ text, onDelete }) => {
  return (
    <div class="border-b border-purple-100 py-2 w-full flex flex-row justify-between">
      <div class="text-lg font-medium">{text}</div>
      <ButtonSecondary text="Delete" onClick={() => onDelete()} />
    </div>
  );
};

export default ListItem;
