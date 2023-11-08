// react icons
import { IoCheckmarkCircle } from "react-icons/io5";

// shared components
import Overlay from "../Overlay/Overlay";

// custom hook
import useAssignmentStatusProvider from "../../../hooks/useAssignmentStatusProvider";

const DeleteSuccessModal = () => {
  // state
  const { deleteSuccessful, setDeleteSuccessful } =
    useAssignmentStatusProvider();

  // close modal and overlay
  const closeModal = () => {
    setDeleteSuccessful(false);
  };

  return (
    <div>
      <Overlay
        open={deleteSuccessful}
        modifyClasses={`duration-200`}
        onClickFunction={closeModal}
      />

      <div
        className={`${
          deleteSuccessful ? "opacity-100 visible" : "opacity-0 collapse"
        } rounded-default bg-white p-4 sm:p-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] shadow-lg duration-200 w-max`}
      >
        <IoCheckmarkCircle className="text-green-600 text-3xl md:text-5xl block mx-auto mb-4 md:mb-8" />
        <p className="text-green-600 text-base md:text-3xl">
          Deleted Successfully
        </p>
      </div>
    </div>
  );
};

export default DeleteSuccessModal;
