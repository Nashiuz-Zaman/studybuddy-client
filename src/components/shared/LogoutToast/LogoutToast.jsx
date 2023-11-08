// react icons
import { IoCloseCircle } from "react-icons/io5";
import useLogoutProvider from "../../../hooks/useLogoutProvider";

const LogoutToast = () => {
  const { logoutToastOpen } = useLogoutProvider();

  return (
    <div
      className={`fixed opacity-0 -top-full z-50 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 transition-all duration-200 rounded-default w-max px-8 py-4 shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white ${
        logoutToastOpen ? "top-10 opacity-100" : ""
      }`}
    >
      <IoCloseCircle className="text-red-600 text-5xl" />

      <div className="text-center">
        <p className="text-red-600 font-semibold text-lg md:text-xl">
          Sorry you were logged out
        </p>
        <p className="text-red-600 font-semibold text-lg md:text-xl">
          Please Login again
        </p>
      </div>
    </div>
  );
};

export default LogoutToast;
