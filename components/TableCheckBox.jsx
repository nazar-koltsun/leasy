const TableCheckBox = ({ onChange }) => {
  return (
    <input
      className="flex items-center justify-center appearance-none w-5 h-5 bg-white border border-lightSilver rounded-[4px]"
      type="checkbox"
      onChange={onChange}
    />
  );
};

export default TableCheckBox;