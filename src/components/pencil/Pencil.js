import PencilIcon from "../../assets/icons/PencilIcon.js";

export default function Pencil({ setOpen }) {
  return (
    <button
      className="bg-black h-20 w-20 rounded-full cursor-pointer shadow-md black flex items-center justify-center fixed bottom-14 right-14"
      onClick={setOpen}
    >
      <PencilIcon />
    </button>
  );
}
