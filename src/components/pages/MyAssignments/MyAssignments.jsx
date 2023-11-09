// react
import { useEffect, useState } from "react";

// shared components
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import MySubmittedAssignmentCard from "../../shared/MySubmittedAssignmentCard/MySubmittedAssignmentCard";

// custom hooks
import useFetch from "../../../hooks/useFetch";
import useAuthProvider from "../../../hooks/useAuthProvider";

// containers
import InnerContainer from "../../containers/InnerContainer/InnerContainer";

// data
import { apiBaseURL } from "../../../nativeData/apiBase";

const MyAssignments = () => {
  // my assignments all that means pending and non-pending
  const [myAssignmentsAll, setMyAssignmentsAll] = useState([]);
  const [loading, setLoading] = useState(true);

  // take the user email
  const { user } = useAuthProvider();
  const email = user.email;

  // take the post method from hook
  const { postData } = useFetch();

  useEffect(() => {
    const url = `${apiBaseURL}/submitted-assignments/self`;

    postData(url, { email }).then((data) => {
      setMyAssignmentsAll(data);
      setLoading(false);
    });
  }, [postData, email]);

  return (
    <div className="mb-sectionGapLg">
      <InnerContainer>
        {/* top part  */}
        <section className="mb-6 md:mb-16">
          {/* heading */}
          <SectionHeading
            text={"Your Assignments"}
            modifyClasses="md:text-3xl lg:text-4xl mb-4 md:mb-6"
          />

          {/* normal description */}
          <p className="text-center text-base sm:text-xl lg:text-2xl">
            In this page you will find all the assingments that you have
            submitted so far (pending/completed).
          </p>
        </section>

        {/* assignments */}
        <section>
          {/* if there are no assignments */}
          {!loading && myAssignmentsAll.length === 0 && (
            <p className="text-center text-primary text-lg md:text-2xl">
              Sorry, you haven't submitted any assignments yet.
            </p>
          )}

          {!loading && myAssignmentsAll.length > 0 && (
            <ul className="flex flex-col w-full md:w-[80%] lg:w-[60%] gap-8 mx-auto">
              {myAssignmentsAll.map((assignment) => {
                return (
                  <li key={assignment._id}>
                    <MySubmittedAssignmentCard
                      submittedAssignment={assignment}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </InnerContainer>
    </div>
  );
};

export default MyAssignments;
