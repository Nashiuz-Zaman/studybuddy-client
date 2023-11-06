// react imports
import PropTypes from "prop-types";

// react icon
import { FcGoogle } from "react-icons/fc";

const GoogleLoginBtn = ({ onClickFunction, modifyClasses = "" }) => {
  return (
    <button
      onClick={onClickFunction}
      className={`bg-transparent border border-primary text-primary hover:bg-[rgba(255,255,255,0.5)] transition-all duration-300 rounded-default px-5 py-2 text-lg flex items-center gap-2 mt-4 ${modifyClasses}`}
    >
      <span>Sign In With Google </span> <FcGoogle className="text-2xl" />
    </button>
  );
};

GoogleLoginBtn.propTypes = {
  onClickFunction: PropTypes.func,
  modifyClasses: PropTypes.string,
};

export default GoogleLoginBtn;
