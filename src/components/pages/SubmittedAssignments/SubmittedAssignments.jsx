// react router dom
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

// containers
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";

// shared components
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

// data
import { apiBaseURL } from "../../../nativeData/apiBase";
import SubmittedAssignmentCard from "../../shared/SubmittedAssignmentCard/SubmittedAssignmentCard";

const SubmittedAssignments = () => {
  // const submittedAssignments = useLoaderData();
  // console.log(submittedAssignments);
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  useEffect(() => {
    fetch(`${apiBaseURL}/submitted-assignments`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setShouldUpdate(false);
        setPendingAssignments(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [shouldUpdate]);

  console.log(pendingAssignments);

  return (
    <div className="mb-sectionGapLg">
      <InnerContainer>
        {/* top part  */}
        <section>
          {/* heading */}
          <SectionHeading
            text={"Welcome"}
            modifyClasses="md:text-3xl lg:text-4xl mb-4 md:mb-6"
          />

          {/* normal description */}
          <p className="text-center text-base sm:text-xl lg:text-2xl mb-6 md:mb-10">
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
                    <SubmittedAssignmentCard submittedAssignment={assignment} />
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
