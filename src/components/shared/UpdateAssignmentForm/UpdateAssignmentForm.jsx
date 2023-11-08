// react
import PropTypes from "prop-types";
import { useState } from "react";

// react router
import { useNavigate } from "react-router-dom";

// react datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// shared components
import ButtonBtn from "../ButtonBtn/ButtonBtn";

// custom hook
import useAuthProvider from "../../../hooks/useAuthProvider";
import useFetch from "../../../hooks/useFetch";
import useAssignmentStatusProvider from "../../../hooks/useAssignmentStatusProvider";

// data
import { apiBaseURL } from "../../../nativeData/apiBase";

// component starts
const UpdateAssignmentForm = ({ assignmentData }) => {
  const { _id, title, description, thumbnail, totalMarks, date, difficulty } =
    assignmentData;

  // take the user email
  const { user } = useAuthProvider();

  // take the put method from useFetch
  const { putData } = useFetch();

  // create the navigate function
  const navigate = useNavigate();

  // take the method in order to show/hide the update success modal
  const { setUpdateSuccessful } = useAssignmentStatusProvider();

  // transform the date
  const dateArr = date.split("-").map((date) => parseInt(date));
  const [day, month, year] = dateArr;
  const actualDate = new Date(year, month - 1, day);

  // date state from react date picker
  const [startDate, setStartDate] = useState(actualDate);

  // form element css classes
  const labelClasses = "block mb-2 text-sm lg:text-lg";
  const inputClasses =
    "block rounded-default !w-full text-sm lg:text-base p-1 md:p-2 font-inherit bg-gray-300";

  // update function
  const handleUpdate = (e) => {
    // don't refresh
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

    // url
    const url = `${apiBaseURL}/assignments/${_id}/update`;

    // send the put request
    putData(url, assignmentData)
      .then((data) => {
        if (data.modifiedCount > 0) {
          // if update successful then show the modal
          setUpdateSuccessful(true);

          const timer = setTimeout(() => {
            // close the modal
            setUpdateSuccessful(false);
            navigate("/assignments");
            clearTimeout(timer);
          }, 1500);
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleUpdate}
        className="block space-y-4 sm:w-[70%] lg:w-[60%] mx-auto shadow-[0_0_15px_rgba(0,0,0,0.2)] p-8 rounded-default"
      >
        {/* title */}
        <div>
          <label className={labelClasses}>Title</label>
          <input
            name="title"
            className={inputClasses}
            type="text"
            defaultValue={title}
            required
          />
        </div>

        {/* description */}
        <div>
          <label className={labelClasses}>Description</label>
          <textarea
            name="description"
            className={`${inputClasses} h-12 md:h-20`}
            defaultValue={description}
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
              defaultValue={totalMarks}
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
              defaultValue={thumbnail}
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
              defaultValue={difficulty}
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
              dateFormat="dd-MM-yyyy"
              className={inputClasses}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        {/* submit button */}
        <ButtonBtn text="Update Assignment" modifyClasses="mx-auto !mt-10" />
      </form>
    </div>
  );
};

UpdateAssignmentForm.propTypes = {
  assignmentData: PropTypes.object,
};

export default UpdateAssignmentForm;
