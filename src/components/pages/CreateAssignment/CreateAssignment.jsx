// containers
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";

// shared components
import SectionHeading from "./../../shared/SectionHeading/SectionHeading";
import CreateAssignmentBtn from "../../shared/CreateAssignmentBtn/CreateAssignmentBtn";

const CreateAssignment = () => {
  return (
    <div>
      <InnerContainer>
        <section>
          <SectionHeading text={"Welcome"} modifyClasses="text-4xl mb-6" />
          <p className="text-center text-2xl mb-10">
            You can create your assignments here.
          </p>

          <CreateAssignmentBtn outlinedPrimary={true} modifyClasses="mx-auto" />
        </section>
      </InnerContainer>
    </div>
  );
};

export default CreateAssignment;
