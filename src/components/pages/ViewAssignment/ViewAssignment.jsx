// react state
import { useState, useEffect } from "react";

// react router
import { useLoaderData } from "react-router-dom";

// container
import InnerContainer from "../../containers/InnerContainer/InnerContainer";

// shared components
import SectionHeading from "./../../shared/SectionHeading/SectionHeading";
import ButtonBtn from "../../shared/ButtonBtn/ButtonBtn";
import SubmitAssignmentModal from "../../shared/SubmitAssignmentModal/SubmitAssignmentModal";
import Overlay from "./../../shared/Overlay/Overlay";

const ViewAssignment = () => {
  // submission form open/hide state
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);

  // handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        if (submissionModalOpen) {
          setSubmissionModalOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [submissionModalOpen]);

  // the assignment loaded for this page
  const assignmentViewed = useLoaderData();
  // extract assignment properties
  const { thumbnail, title, description, totalMarks, date, difficulty, email } =
    assignmentViewed;

  // open submission modal method
  const openSubmissionModal = () => {
    setSubmissionModalOpen(true);
  };

  // close submission modal method
  const closeSubmissionModal = () => {
    setSubmissionModalOpen(false);
  };

  return (
    <div className="mb-sectionGapLg">
      <InnerContainer>
        <section>
          <SectionHeading text={title} modifyClasses="mb-10" />

          <div className="grid grid-cols-1 2md:grid-cols-[1fr_1.5fr] gap-8 items-start xl:items-center">
            {/* image */}
            <div className="rounded-default overflow-hidden w-full">
              <img
                className="w-full aspect-[16/11] object-cover"
                src={thumbnail}
                alt={`assignment for ${title}`}
              />
            </div>

            {/* text */}
            <div className="flex flex-col">
              <div className="mb-6">
                <h3 className="font-bold text-2xl mb-4">Description:</h3>
                <p>{description}</p>
              </div>

              <div className="space-y-1 mb-8">
                <p className="text-lg">
                  <span className="font-bold">Total Marks:</span> {totalMarks}
                </p>

                <p className="text-lg">
                  <span className="font-bold">Difficulty:</span>{" "}
                  {difficulty.toUpperCase()}
                </p>

                <p className="text-lg">
                  <span className="font-bold">Due Date:</span> {date}
                </p>

                <p className="text-lg">
                  <span className="font-bold">Created By:</span> {email}
                </p>
              </div>

              <ButtonBtn
                text="Take Assignment"
                modifyClasses="mt-auto w-full 2md:w-max bg-green-600 hover:bg-green-500 border-green-500 hover:border-green-500"
                onClickFunction={openSubmissionModal}
              />
            </div>
          </div>
        </section>

        {/* submission modal form and overlay */}
        <section>
          <Overlay
            open={submissionModalOpen}
            onClickFunction={closeSubmissionModal}
          />
          <SubmitAssignmentModal
            open={submissionModalOpen}
            assignmentTobeSubmitted={assignmentViewed}
            closeFunction={closeSubmissionModal}
          />
        </section>
      </InnerContainer>
    </div>
  );
};

export default ViewAssignment;
