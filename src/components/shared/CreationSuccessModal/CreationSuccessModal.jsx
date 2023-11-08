// react icons
import { IoCheckmarkCircle } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

// shared components
import Overlay from "../Overlay/Overlay";

// custom hook
import useAssignmentStatusProvider from "../../../hooks/useAssignmentStatusProvider";

const CreationSuccessModal = () => {
  // state
  const { assignmentCreationSuccessful, setAssignmentCreationSuccessful } =
    useAssignmentStatusProvider();

  // close modal and overlay
  const closeModal = () => {
    setAssignmentCreationSuccessful(false);
  };

  return (
    <div>
      <Overlay
        open={assignmentCreationSuccessful}
        modifyClasses={`duration-200 ${
          assignmentCreationSuccessful ? "delay-500" : "delay-0"
        }`}
        onClickFunction={closeModal}
      />
      <div
        className={`${
          assignmentCreationSuccessful
            ? "opacity-100 visible delay-500"
            : "opacity-0 collapse delay-0"
        } rounded-default bg-primaryLight p-4 sm:p-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] shadow-lg duration-200 w-max`}
      >
        <button
          className="block w-max ml-auto mb-2 md:mb-4"
          onClick={closeModal}
        >
          <AiOutlineClose className="text-white text-xl  md:text-3xl" />
        </button>
        <IoCheckmarkCircle className="text-white text-3xl md:text-5xl block mx-auto mb-4 md:mb-8" />
        <p className="text-white text-base md:text-3xl">
          Assignment Created Successfully
        </p>
      </div>
    </div>
  );
};

export default CreationSuccessModal;
