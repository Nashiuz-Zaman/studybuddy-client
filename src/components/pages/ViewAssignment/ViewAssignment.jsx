// react router
import { useLoaderData } from "react-router-dom";

// container
import InnerContainer from "../../containers/InnerContainer/InnerContainer";

// shared components
import SectionHeading from "./../../shared/SectionHeading/SectionHeading";
import ButtonBtn from "../../shared/ButtonBtn/ButtonBtn";

const ViewAssignment = () => {
  // the assignment loaded for this page
  const assignmentViewed = useLoaderData();
  // extract assignment properties
  const {
    _id,
    thumbnail,
    title,
    description,
    totalMarks,
    date,
    difficulty,
    email,
  } = assignmentViewed;

  return (
    <div className="mb-sectionGapLg">
      <InnerContainer>
        <section>
          <SectionHeading text={title} modifyClasses="mb-10" />

          <div className="grid grid-cols-[1fr_1.5fr] gap-8">
            {/* image */}
            <div className="rounded-default overflow-hidden">
              <img
                className="aspect-[16/10] object-cover"
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

              <div className="space-y-1">
                <p className="text-xl">
                  <span className="font-bold">Total Marks:</span> {totalMarks}
                </p>

                <p className="text-xl">
                  <span className="font-bold">Difficulty:</span>{" "}
                  {difficulty.toUpperCase()}
                </p>

                <p className="text-xl">
                  <span className="font-bold">Due Date:</span> {date}
                </p>

                <p className="text-xl">
                  <span className="font-bold">Created By:</span> {email}
                </p>
              </div>

              <ButtonBtn
                text="Take Assignment"
                modifyClasses="mt-auto bg-green-600"
              />
            </div>
          </div>
        </section>
      </InnerContainer>
    </div>
  );
};

export default ViewAssignment;
