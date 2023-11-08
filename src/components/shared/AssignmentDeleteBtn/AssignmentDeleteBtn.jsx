// react
import PropTypes from "prop-types";

// react icon
import { IoTrashBinSharp } from "react-icons/io5";

const AssignmentDeleteBtn = ({ onClickFunction, modifyClasses = "" }) => {
  return (
    <button
      className={`flex items-center justify-center gap-1 transition-all duration-300 rounded-full px-5 py-2 text-lg bg-red-700 text-white ${modifyClasses}`}
      onClick={onClickFunction}
    >
      <IoTrashBinSharp className="text-2xl" />
      <span>Delete</span>
    </button>
  );
};

AssignmentDeleteBtn.propTypes = {
  onClickFunction: PropTypes.func,
  modifyClasses: PropTypes.string,
};

export default AssignmentDeleteBtn;
