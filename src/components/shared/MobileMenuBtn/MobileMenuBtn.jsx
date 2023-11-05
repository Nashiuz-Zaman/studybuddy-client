// react
import PropTypes from "prop-types";

// icon
import { IoMenu } from "react-icons/io5";

const MobileMenuBtn = ({ openNavFunction, modifyClasses = "" }) => {
  return (
    <button
      className={`block w-max lg:hidden ${modifyClasses}`}
      onClick={openNavFunction}
    >
      <IoMenu className="text-3xl text-white"></IoMenu>
    </button>
  );
};

MobileMenuBtn.propTypes = {
  openNavFunction: PropTypes.func,
  modifyClasses: PropTypes.string,
};
export default MobileMenuBtn;
