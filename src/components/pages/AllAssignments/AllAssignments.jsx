// react
import { useState, useEffect } from "react";

// container
import InnerContainer from "../../containers/InnerContainer/InnerContainer";

// shared component
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import AssignmentCard from "../../shared/AssignmentCard/AssignmentCard";

// custom hooks
import useFetch from "../../../hooks/useFetch";

// data
import { apiBaseURL } from "../../../nativeData/apiBase";

const AllAssignments = () => {
  // assignments
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  // state for refetch
  const [shouldUpdate, setShouldUpdate] = useState(false);

  //  assignment difficulty step
  const [difficulty, setDifficulty] = useState("all");
  // take the post method from this hook
  const { postData } = useFetch();

  useEffect(() => {
    setLoading(true);
    const url = `${apiBaseURL}/assignments`;
    // create the filter for the database query here in client side
    const filter = { difficulty };

    // retreive data based on difficulty
    postData(url, filter).then((data) => {
      setShouldUpdate(false);
      setAssignments(data);
      setLoading(false);
    });
  }, [difficulty, postData, shouldUpdate]);

  return (
    <div className="mb-sectionGapLg">
      <InnerContainer>
        <section>
          {/* heading */}
          <SectionHeading
            text={"Welcome"}
            modifyClasses="md:text-3xl lg:text-4xl mb-4 md:mb-6"
          />

          {/* normal description */}
          <p className="text-center text-base sm:text-xl lg:text-2xl mb-6 md:mb-10">
            In this page you will find all available assignments
          </p>
        </section>

        {/* filter */}
        <section className="mb-sectionGapMd">
          <div className="w-max mx-auto">
            <label>Filter: </label>
            <select
              className="p-2 border border-textMediumLight rounded-default"
              name="difficulty"
              onChange={(e) => {
                setDifficulty(e.target.value);
              }}
            >
              <option value="all">All</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </section>

        {/* Assignments */}
        <section>
          {/* if there is no assignment in the array */}
          {!loading && !assignments.length && (
            <p className="text-center text-primary text-lg md:text-2xl">
              Sorry, currently there are no assignments!
            </p>
          )}

          {/* if assignment found */}
          {!loading && assignments.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 xl:grid-cols-4 gap-8">
              {assignments.map((assignment) => {
                return (
                  <li key={assignment._id}>
                    <AssignmentCard
                      assignment={assignment}
                      shouldUpdateFunction={setShouldUpdate}
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

export default AllAssignments;
