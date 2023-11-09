// react
import PropTypes from "prop-types";

const MySubmittedAssignmentCard = ({ submittedAssignment }) => {
  const { title, examineeName, totalMarks, status } = submittedAssignment;

  return (
    <div className="p-8 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-default">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        {/* marks */}
        <p>
          <span className="font-bold">Total Marks:</span> {totalMarks}
        </p>

        {/* examinee (submitted by) */}
        <p className="mb-6 sm:mb-0">
          <span className="font-bold">Examinee:</span>{" "}
          {examineeName.toUpperCase()}
        </p>

        {/* status */}
        <p
          className={`text-white ${
            status === "pending" ? "bg-yellow-500" : "bg-green-600"
          } py-2 px-4 rounded-full`}
        >
          <span className="font-bold">Status:</span> {status.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

MySubmittedAssignmentCard.propTypes = {
  submittedAssignment: PropTypes.object,
};

export default MySubmittedAssignmentCard;
