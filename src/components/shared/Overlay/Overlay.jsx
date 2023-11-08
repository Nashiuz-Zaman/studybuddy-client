// react
import PropTypes from "prop-types";

const Overlay = ({ open = false, onClickFunction, modifyClasses = "" }) => {
  return (
    <div
      onClick={onClickFunction}
      className={`${
        open ? "opacity-100 visible" : "opacity-0 collapse"
      } transition-all duration-300 fixed bg-[#00000033] z-30 top-0 left-0 backdrop-blur-md w-screen h-screen ${modifyClasses}`}
    >
      &nbsp;
    </div>
  );
};

Overlay.propTypes = {
  open: PropTypes.bool,
  onClickFunction: PropTypes.func,
  modifyClasses: PropTypes.string,
};

export default Overlay;
