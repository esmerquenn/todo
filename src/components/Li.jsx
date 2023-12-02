function Li({ index, item, removelement, editelement, edit }) {
  return (
    <>
      <li className="capitalize flex justify-between items-center py-[3px]">
        {item}{" "}
        <button
          className=" rounded-[7px] border-none p-[3px] w-[25px] bg-white shadow-md"
          onClick={() => {
            edit === "add" ? removelement(index) : editelement();
          }}
        >
          {edit === "add" ? "x" : "edit"}
        </button>
      </li>
    </>
  );
}

export default Li;
