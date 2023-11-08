// react router
import { useLoaderData } from "react-router-dom";

// containers
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

// shared components
import UpdateAssignmentForm from "../../shared/UpdateAssignmentForm/UpdateAssignmentForm";
import BackLinkBtn from "../../shared/BackLinkBtn/BackLinkBtn";

const UpdateAssignment = () => {
  const assignmentToUpdate = useLoaderData();
  const { _id, title, description, thumbnail, totalMarks, date, difficulty } =
    assignmentToUpdate;

  return (
    <div className="mb-sectionGapMd">
      <InnerContainer>
        {/* top part */}
        <section>
          {/* section heading and details */}
          <SectionHeading
            text={"Need to fix something in your assignment?"}
            modifyClasses="md:text-3xl lg:text-4xl mb-4 md:mb-6"
          />

          <p className="text-center text-base sm:text-xl lg:text-2xl mb-6 md:mb-10">
            You can update your assignment by clicking "Update Assignment"
            button!
          </p>

          <BackLinkBtn
            url="/assignments"
            text="Back To Assignments"
            modifyClasses="w-max mx-auto mb-10"
            outlinedPrimary={true}
          />
        </section>

        {/* form part */}
        <section>
          <UpdateAssignmentForm assignmentData={assignmentToUpdate} />
        </section>
      </InnerContainer>
    </div>
  );
};

export default UpdateAssignment;
