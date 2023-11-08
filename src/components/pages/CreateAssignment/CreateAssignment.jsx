// react
import { useEffect, useState } from "react";

// containers
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";

// shared components
import SectionHeading from "./../../shared/SectionHeading/SectionHeading";
import CreateAssignmentBtn from "../../shared/CreateAssignmentBtn/CreateAssignmentBtn";
import CreateAssignmentModal from "../../shared/CreateAssignmentModal/CreateAssignmentModal";

const CreateAssignment = () => {
  // form open/close state
  const [formOpen, setFormOpen] = useState(false);

  // handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        if (formOpen) {
          setFormOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [formOpen]);

  //  open form
  const openForm = () => {
    setFormOpen(true);
  };

  // close form
  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <div>
      <InnerContainer>
        <section>
          {/* section heading and details */}
          <SectionHeading text={"Welcome"} modifyClasses="text-4xl mb-6" />
          <p className="text-center text-2xl mb-10">
            You can create your assignments here.
          </p>

          {/* button to open modal */}
          <CreateAssignmentBtn
            outlinedPrimary={true}
            modifyClasses="mx-auto"
            onClickFunction={openForm}
          />
        </section>

        <section>
          <CreateAssignmentModal open={formOpen} closeFunction={closeForm} />
        </section>
      </InnerContainer>
    </div>
  );
};

export default CreateAssignment;
