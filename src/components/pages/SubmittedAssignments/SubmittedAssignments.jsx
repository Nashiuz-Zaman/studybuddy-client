// react router dom
import { useState, useEffect } from "react";

// containers
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";

// shared components
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

// data
import { apiBaseURL } from "../../../nativeData/apiBase";
import SubmittedAssignmentCard from "../../shared/SubmittedAssignmentCard/SubmittedAssignmentCard";

const SubmittedAssignments = () => {
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  // fetch to load submitted assignments data
  useEffect(() => {
    fetch(`${apiBaseURL}/submitted-assignments/pending`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setShouldUpdate(false);
        setPendingAssignments(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [shouldUpdate]);

  return (
    <div className="mb-sectionGapLg">
      <InnerContainer>
        {/* top part  */}
        <section className="mb-6 md:mb-16">
          {/* heading */}
          <SectionHeading
            text={"Welcome"}
            modifyClasses="md:text-3xl lg:text-4xl mb-4 md:mb-6"
          />

          {/* normal description */}
          <p className="text-center text-base sm:text-xl lg:text-2xl">
            In this page you will find all the pending submitted assignments.
          </p>
        </section>

        {/* submitted assignments */}
        <section>
          {/* show the pending assignments in a list */}
          <ul className="flex flex-col w-full md:w-[80%] lg:w-[60%] gap-8 mx-auto">
            {pendingAssignments &&
              pendingAssignments.map((assignment) => {
                return (
                  <li key={assignment._id}>
                    <SubmittedAssignmentCard
                      shouldUpdateFunction={setShouldUpdate}
                      submittedAssignment={assignment}
                    />
                  </li>
                );
              })}
          </ul>
        </section>
      </InnerContainer>
    </div>
  );
};

export default SubmittedAssignments;
