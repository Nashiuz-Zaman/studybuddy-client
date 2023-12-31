// react
import PropTypes from "prop-types";
import { useState } from "react";

// shared component
import ButtonBtn from "../ButtonBtn/ButtonBtn";
import GiveMarksModal from "../GiveMarksModal/GiveMarksModal";

const SubmittedAssignmentCard = ({
  submittedAssignment,
  shouldUpdateFunction,
}) => {
  const { title, examineeName, totalMarks } = submittedAssignment;
  const [giveMarksModalOpen, setGiveMarksModalOpen] = useState(false);

  // declare funcs to open/hide give marks modal
  const openGiveMarksModal = () => {
    setGiveMarksModalOpen(true);
  };

  const closeGiveMarksModal = () => {
    setGiveMarksModalOpen(false);
  };

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

        {/* give marks button */}
        <div>
          <ButtonBtn
            onClickFunction={openGiveMarksModal}
            text="Give Marks"
            modifyClasses="w-full"
          />
        </div>
      </div>

      {/* Give marks modal and its states passed */}
      <GiveMarksModal
        shouldUpdateFunction={shouldUpdateFunction}
        open={giveMarksModalOpen}
        closeFunction={closeGiveMarksModal}
        assignmentToBeEvaluated={submittedAssignment}
      />
    </div>
  );
};

SubmittedAssignmentCard.propTypes = {
  submittedAssignment: PropTypes.object,
  shouldUpdateFunction: PropTypes.func,
};

export default SubmittedAssignmentCard;
