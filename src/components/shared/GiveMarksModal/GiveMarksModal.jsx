// react
import PropTypes from "prop-types";
import { useRef } from "react";

// react icons
import { AiOutlineClose } from "react-icons/ai";

// shared components
import SectionHeading from "../SectionHeading/SectionHeading";
import ButtonBtn from "../ButtonBtn/ButtonBtn";
import Overlay from "../Overlay/Overlay";

// custom hook
import useFetch from "../../../hooks/useFetch";

// data
import { apiBaseURL } from "../../../nativeData/apiBase";

const GiveMarksModal = ({
  open,
  assignmentToBeEvaluated,
  shouldUpdateFunction,
  closeFunction,
}) => {
  // form element css classes
  const labelClasses = "block mb-2 text-sm lg:text-lg";
  const inputClasses =
    "block rounded-default !w-full text-sm lg:text-base p-1 md:p-2 font-inherit bg-gray-300";

  // declare form ref
  const formRef = useRef(null);

  // post method from useFetch
  const { putData } = useFetch();

  const handleGiveMarks = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const obtainedMarks = form.obtainedMarks.value;
    const feedback = form.feedback.value;
    const status = "completed";

    const submittedAssignmentToBeUpdated = {
      ...assignmentToBeEvaluated,
      status: status,
      obtainedMarks,
      feedback,
    };

    const url = `${apiBaseURL}/evaluation`;

    putData(url, submittedAssignmentToBeUpdated).then((data) => {
      if (data.modifiedCount > 0) {
        // clear form and tell submitted assignment page to update its data
        formRef.current.reset();
        shouldUpdateFunction(true);
        closeFunction();
      }
    });
  };

  return (
    <div>
      {/* overlay */}
      <Overlay
        open={open}
        onClickFunction={() => {
          closeFunction();
          formRef.current.reset();
        }}
      />

      {/* modal */}
      <div
        className={`${
          open ? "opacity-100 visible" : "opacity-0 collapse"
        } transition-all duration-200 w-[95%] md:w-[50%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-default z-50`}
      >
        {/* close button */}
        <button
          className="block w-max ml-auto"
          onClick={() => {
            closeFunction();
            formRef.current.reset();
          }}
        >
          <AiOutlineClose className="text-2xl mb-4" />
        </button>

        {/* form heading */}
        <SectionHeading
          text="Give Marks To Assignment"
          modifyClasses="mb-4 md:mb-8"
        />

        <div className="mb-6">
          <p className="break-all">
            <span className="font-bold">Submitted PDF: </span>
            {assignmentToBeEvaluated.pdfLink}
          </p>
          <p>
            <span className="font-bold">Submitted Note: </span>
            {assignmentToBeEvaluated.note}
          </p>
        </div>

        {/* submit form */}
        <form ref={formRef} onSubmit={handleGiveMarks}>
          {/* Marks */}
          <div className="mb-4">
            <label className={labelClasses}>Marks Obtained</label>
            <input
              className={inputClasses}
              type="text"
              name="obtainedMarks"
              required
            />
          </div>

          {/* feedback */}
          <div className="mb-4">
            <label className={labelClasses}>Feedback</label>
            <input
              className={inputClasses}
              type="text"
              name="feedback"
              required
            />
          </div>

          <ButtonBtn text="Submit" modifyClasses="mx-auto" />
        </form>
      </div>
    </div>
  );
};

GiveMarksModal.propTypes = {
  open: PropTypes.bool,
  assignmentToBeEvaluated: PropTypes.object,
  closeFunction: PropTypes.func,
  shouldUpdateFunction: PropTypes.func,
};

export default GiveMarksModal;
