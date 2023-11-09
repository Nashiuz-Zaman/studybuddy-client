// react
import PropTypes from "prop-types";

// react router
import { useNavigate } from "react-router-dom";

// react icons
import { AiOutlineClose } from "react-icons/ai";

// shared components
import SectionHeading from "../SectionHeading/SectionHeading";
import ButtonBtn from "../ButtonBtn/ButtonBtn";

// custom hook
import useAuthProvider from "../../../hooks/useAuthProvider";
import useFetch from "../../../hooks/useFetch";
import { apiBaseURL } from "../../../nativeData/apiBase";

const SubmitAssignmentModal = ({
  open,
  assignmentTobeSubmitted,
  closeFunction,
}) => {
  // form element css classes
  const labelClasses = "block mb-2 text-sm lg:text-lg";
  const inputClasses =
    "block rounded-default !w-full text-sm lg:text-base p-1 md:p-2 font-inherit bg-gray-300";

  // take the user email who is submitting the assignment
  const { user } = useAuthProvider();

  // post method from useFetch
  const { postData } = useFetch();

  // navigate method
  const navigate = useNavigate();

  // take data of assignment that is submitted
  const { _id, title, totalMarks } = assignmentTobeSubmitted;

  // handle submission
  const handleSubmitAssignment = (e) => {
    e.preventDefault();

    // take necessary values for assignment submission
    const userWhoSubmittedEmail = user.email;
    const userWhoSubmittedName = user.displayName;
    const status = "pending";
    const form = e.target;
    const pdfLink = form.pdf.value;
    const note = form.note.value;

    const submittedAssignment = {
      submittedAssignmentId: _id,
      examineeEmail: userWhoSubmittedEmail,
      examineeName: userWhoSubmittedName,
      status,
      pdfLink,
      note,
      title,
      totalMarks,
    };

    const url = `${apiBaseURL}/assignments/${_id}/submit`;

    postData(url, submittedAssignment).then((data) => {
      if (data.insertedId) {
        navigate("/submitted-assignments");
      }
    });
  };

  return (
    <div
      className={`${
        open ? "opacity-100 visible" : "opacity-0 collapse"
      } transition-all duration-200 w-[95%] md:w-[50%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-default z-50`}
    >
      {/* close button */}
      <button className="block w-max ml-auto" onClick={closeFunction}>
        <AiOutlineClose className="text-2xl mb-4" />
      </button>

      {/* form heading */}
      <SectionHeading text="Submit Assignment" modifyClasses="mb-4 md:mb-8" />
      <p className="text-center text-sm md:text-base mb-4 md:mb-6">
        Be careful when entering the PDF file link below. Wrong links will not
        be considered.
      </p>

      {/* submit form */}
      <form onSubmit={handleSubmitAssignment}>
        {/* pdf input */}
        <div className="mb-4">
          <label className={labelClasses}>PDF Link:</label>
          <input className={inputClasses} type="text" name="pdf" required />
        </div>

        {/* quick note */}
        <div className="mb-6">
          <label className={labelClasses}>Note</label>
          <textarea
            name="note"
            className={`${inputClasses} h-10 md:h-20`}
            required
          ></textarea>
        </div>

        <ButtonBtn text="Submit" modifyClasses="mx-auto" />
      </form>
    </div>
  );
};

SubmitAssignmentModal.propTypes = {
  open: PropTypes.bool,
  assignmentTobeSubmitted: PropTypes.object,
  closeFunction: PropTypes.func,
};

export default SubmitAssignmentModal;
