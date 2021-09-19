import Button from "./ButtonDanger";

const ListItem = ({ text, onDelete }) => {
  return (
    <div class="border-b border-purple-100 p-2 w-full flex flex-row justify-between">
      <div class="text-lg font-medium">{text}</div>
      <Button text="delete" onClick={() => onDelete()} />
    </div>
  );
};

export default ListItem;
