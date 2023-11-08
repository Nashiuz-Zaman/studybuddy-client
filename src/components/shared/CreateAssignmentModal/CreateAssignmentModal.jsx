// react
import PropTypes from "prop-types";
import { useState } from "react";

// react router dom
import { useNavigate } from "react-router-dom";

// react icons
import { AiOutlineClose } from "react-icons/ai";

// react datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// shared components
import SectionHeading from "../SectionHeading/SectionHeading";
import ButtonBtn from "./../ButtonBtn/ButtonBtn";
import Overlay from "../Overlay/Overlay";

// custom hooks
import useAuthContext from "./../../../hooks/useAuthContext";
import useFetch from "./../../../hooks/useFetch";
import useLogoutProvider from "../../../hooks/useLogoutProvider";
import useAssignmentStatusProvider from "../../../hooks/useAssignmentStatusProvider";

// data
import { apiBaseURL } from "../../../nativeData/apiBase";

const CreateAssignmentModal = ({ open = false, closeFunction = null }) => {
  // form element css classes
  const labelClasses = "block mb-2 text-sm lg:text-lg";
  const inputClasses =
    "block rounded-default !w-full text-sm lg:text-base p-1 md:p-2 font-inherit bg-gray-300";

  // navigate method
  const navigate = useNavigate();

  // open success modal method
  const { setAssignmentCreationSuccessful } = useAssignmentStatusProvider();

  // take the logout toast method from this hook
  const { setLogoutToastOpen } = useLogoutProvider();

  // take the post method from this hook
  const { postData } = useFetch();

  // date state from react date picker
  const [startDate, setStartDate] = useState(new Date());

  // take the user's email from auth
  const { user, logout } = useAuthContext();

  // all form values come from their inputs but date comes from the state
  const handleCreateAssignment = (e) => {
    e.preventDefault();

    // take all the necessary values
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const totalMarks = form.totalMarks.value;
    const thumbnail = form.thumbnail.value;
    const difficulty = form.difficulty.value;
    const date = `${startDate.getDate()}-${
      startDate.getMonth() + 1
    }-${startDate.getFullYear()}`;
    const email = user.email;

    // assignment data summarized
    const assignmentData = {
      title,
      description,
      totalMarks,
      thumbnail,
      difficulty,
      date,
      email,
    };

    // url to send the create (post) request to create assignments
    const url = `${apiBaseURL}/assignments`;

    postData(url, assignmentData)
      .then((data) => {
        // if token doesn't exist or wrong token logout and navigate to homepage
        if (data.noToken === true || data.badToken === true) {
          logout().then(() => {
            // show the logout toast
            setLogoutToastOpen(true);

            const timer = setTimeout(() => {
              // hide the logout toast
              setLogoutToastOpen(false);

              // navigate to login page
              navigate("/login");

              // clear timeout
              clearTimeout(timer);
            }, 2100);

            return;
          });
        }

        console.log(data);

        // if data entry successful
        if (data.insertedId) {
          // step 1 close the creation form modal and reset the form
          form.reset();
          closeFunction();

          // step 2 open the success modal
          setAssignmentCreationSuccessful(true);
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      {/* blur overlay in the page */}
      <Overlay
        open={open}
        onClickFunction={closeFunction}
        modifyClasses="delay-200"
      />

      {/* THE FORM */}
      <div
        className={`${
          open ? "scale-100" : "scale-0"
        } origin-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-white z-40 lg:rounded-default w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] duration-200`}
      >
        {/* close button */}
        <button className="block w-max ml-auto" onClick={closeFunction}>
          <AiOutlineClose className="text-2xl mb-4" />
        </button>

        {/*  heading */}
        <SectionHeading text={"Create Assignment"} modifyClasses=" mb-4" />

        {/* form starts here */}
        <form onSubmit={handleCreateAssignment} className="block space-y-4">
          {/* title */}
          <div>
            <label className={labelClasses}>Title</label>
            <input name="title" className={inputClasses} type="text" required />
          </div>

          {/* description */}
          <div>
            <label className={labelClasses}>Description</label>
            <textarea
              name="description"
              className={`${inputClasses} h-12 md:h-20`}
              required
            ></textarea>
          </div>

          {/* total marks and thumbnail image field */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4">
            {/* total marks */}
            <div>
              <label className={labelClasses}>Total Marks</label>
              <input
                name="totalMarks"
                className={inputClasses}
                type="text"
                required
              />
            </div>

            {/* thumbnail image */}
            <div>
              <label className={labelClasses}>Thumbnail Image URL</label>
              <input
                name="thumbnail"
                className={inputClasses}
                type="text"
                required
              />
            </div>
          </div>

          {/* difficulty and date */}
          <div className="grid grid-cols-1 xsm:grid-cols-2 gap-4 items-stretch mb-10">
            {/* difficulty */}
            <div>
              <label className={labelClasses}>Difficulty</label>
              <select
                className={`block w-full text-sm lg:text-base rounded-default p-[5px] md:p-[8.5px] lg:p-[10px] bg-gray-300`}
                name="difficulty"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            {/* datepicker */}
            <div className="w-full">
              <label className={labelClasses}>Due Date</label>
              <DatePicker
                required={true}
                wrapperClassName="w-full"
                className={inputClasses}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          {/* submit button */}
          <ButtonBtn text="Create Assingment" modifyClasses="mx-auto !mt-10" />
        </form>
      </div>
    </div>
  );
};

CreateAssignmentModal.propTypes = {
  open: PropTypes.bool,
  closeFunction: PropTypes.func,
};

export default CreateAssignmentModal;
