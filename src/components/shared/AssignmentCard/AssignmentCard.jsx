// react
import PropTypes from "prop-types";

// shared components
import ButtonBtn from "./../ButtonBtn/ButtonBtn";
import AssignmentDeleteBtn from "../AssignmentDeleteBtn/AssignmentDeleteBtn";
import LinkBtn from "./../LinkBtn/LinkBtn";

const AssignmentCard = ({ assignment }) => {
  const { _id, thumbnail, title, totalMarks, difficulty } = assignment;

  return (
    <div className="flex flex-col bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] p-4 pb-6  rounded-default">
      {/* thumbnail image */}
      <img
        className="block aspect-[16/11] w-full object-cover mb-4"
        src={thumbnail}
        alt={`assignment for ${title}`}
      />

      {/* name of the assignment */}
      <h3 className="mb-4 text-xl font-bold">{title}</h3>

      {/* short details and buttons */}
      <div className="mt-auto">
        <div className="mb-7">
          <p>
            <span className="text-primary font-medium">Marks:</span>{" "}
            {totalMarks}
          </p>
          <p>
            <span className="text-primary font-medium">Difficulty:</span>{" "}
            {difficulty.toUpperCase()}
          </p>
        </div>

        {/* 3 buttons view, update and delete */}
        <div className="flex flex-col items-center gap-3">
          <LinkBtn
            text="View Assignment"
            url={`/assignments/${_id}`}
            modifyClasses="w-full"
          />
          <ButtonBtn
            outlinedPrimary={true}
            modifyClasses="w-full"
            text="Update Assignment"
          />
          <AssignmentDeleteBtn modifyClasses="w-max mx-auto" />
        </div>
      </div>
    </div>
  );
};

AssignmentCard.propTypes = {
  assignment: PropTypes.object,
};

export default AssignmentCard;
