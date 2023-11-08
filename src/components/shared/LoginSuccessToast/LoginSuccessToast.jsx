// react
import PropTypes from "prop-types";

// react icons
import { IoCheckmarkCircle } from "react-icons/io5";

const LoginSuccessToast = ({ show = false }) => {
  return (
    <div
      className={`fixed opacity-0 -top-full left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 transition-all duration-150 rounded-default w-max px-8 py-4 shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white ${
        show ? "top-10 opacity-100" : ""
      }`}
    >
      <IoCheckmarkCircle className="text-green-600 text-5xl" />

      <p className="text-green-600 font-semibold text">Login Successful</p>
    </div>
  );
};

LoginSuccessToast.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default LoginSuccessToast;
