// react
import { useEffect } from "react";

// react icons
import { IoCloseCircle } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

// shared components
import Overlay from "../Overlay/Overlay";

// custom hook
import useUpdateDeleteValidityProvider from "../../../hooks/useUpdateDeleteValidityProvider";

const UpdateDeleteDeniedModal = () => {
  // take the states that show/hide modal from this custom hook
  const { updateDeleteInvalid, setUpdateDeleteInvalid } =
    useUpdateDeleteValidityProvider();

  // handle escape key press
  useEffect(() => {
    console.log("render");
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        if (updateDeleteInvalid) {
          setUpdateDeleteInvalid(false);
        }
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [updateDeleteInvalid, setUpdateDeleteInvalid]);

  const closeModal = () => {
    setUpdateDeleteInvalid(false);
  };

  return (
    <div>
      {/* overlay */}
      <Overlay open={updateDeleteInvalid} onClickFunction={closeModal} />

      {/* modal */}
      <div
        className={`${
          updateDeleteInvalid ? "opacity-100 visible" : "opacity-0 collapse"
        } rounded-default bg-white p-4 sm:p-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] shadow-lg duration-200 w-[70%] md:w-[80%] 2md:w-max text-center`}
      >
        {/* close button */}
        <button className="block w-max ml-auto md:mb-4" onClick={closeModal}>
          <AiOutlineClose className="text-xl md:text-3xl" />
        </button>

        {/* danger icon */}
        <IoCloseCircle className="text-red-600 text-3xl md:text-5xl block mx-auto mb-4 md:mb-8" />

        {/* message */}
        <p className="text-red-600 text-base md:text-3xl">
          Cannot Update/Delete Another User's Assignment
        </p>
      </div>
    </div>
  );
};

export default UpdateDeleteDeniedModal;
