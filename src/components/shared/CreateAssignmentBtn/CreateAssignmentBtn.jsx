// react
import PropTypes from "prop-types";

// react icon
import { IoAdd } from "react-icons/io5";

const CreateAssignmentBtn = ({
  onClickFunction,
  outlined = false,
  outlinedPrimary = false,
  modifyClasses = "",
}) => {
  return (
    <button
      className={`flex items-center gap-1 ${
        outlined
          ? "bg-transparent border border-white text-white hover:bg-[rgba(255,255,255,0.5)]"
          : outlinedPrimary
          ? "bg-transparent border border-primary text-primary"
          : "bg-primary border border-primary hover:border-primaryLight hover:bg-primaryLight text-white"
      } block transition-all duration-300 rounded-full px-5 py-2 text-lg ${modifyClasses}`}
      onClick={onClickFunction}
    >
      <IoAdd className="text-2xl" />
      <span>Create Assignment</span>
    </button>
  );
};

CreateAssignmentBtn.propTypes = {
  onClickFunction: PropTypes.func,
  outlined: PropTypes.bool,
  outlinedPrimary: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default CreateAssignmentBtn;
