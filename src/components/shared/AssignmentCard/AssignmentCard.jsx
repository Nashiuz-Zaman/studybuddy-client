// react
import PropTypes from "prop-types";

// react router
import { useNavigate } from "react-router-dom";

// shared components
import ButtonBtn from "./../ButtonBtn/ButtonBtn";
import AssignmentDeleteBtn from "../AssignmentDeleteBtn/AssignmentDeleteBtn";
import LinkBtn from "./../LinkBtn/LinkBtn";

// custom hook
import useAuthProvider from "./../../../hooks/useAuthProvider";
import useFetch from "./../../../hooks/useFetch";
import useLogoutProvider from "./../../../hooks/useLogoutProvider";
import useUpdateDeleteValidityProvider from "../../../hooks/useUpdateDeleteValidityProvider";
import useAssignmentStatusProvider from "../../../hooks/useAssignmentStatusProvider";

// data
import { apiBaseURL } from "../../../nativeData/apiBase";

const AssignmentCard = ({ assignment, shouldUpdateFunction }) => {
  // extract assignment properties
  const { _id, thumbnail, title, totalMarks, difficulty, email } = assignment;

  //  logout toast state method which makes the toast show/hide
  const { setLogoutToastOpen } = useLogoutProvider();

  // take the user checking method from this hook
  const { checkIfUserIsLoggedIn, logout } = useAuthProvider();

  // take the method that can enable state to show wrong update/delete modal, where the user is requesting to update/delete other people's assignments
  const { setUpdateDeleteInvalid } = useUpdateDeleteValidityProvider();

  // method for show/hide delete success modal
  const { setDeleteSuccessful } = useAssignmentStatusProvider();

  //  post method from useFetch hook
  const { postData, deleteData } = useFetch();

  // create the navigate method
  const navigate = useNavigate();

  // check if user has the permission to update assignment
  const checkIfCanUpdate = () => {
    // step 1 find out user auth status
    const userLoggedIn = checkIfUserIsLoggedIn();

    // step 2 if no user in auth redirect to login page
    if (!userLoggedIn) {
      navigate("/login");
      return;
    }

    // api end point to send this check request to
    const url = `${apiBaseURL}/assignments/can-update`;

    // also pass in the assignment email (to check if the user has permission to update current assignment in the server side)
    postData(url, { email }).then((data) => {
      // if token doesn't exist or wrong token logout and navigate to homepage
      if (data.noToken === true || data.badToken === true) {
        logout().then(() => {
          // show the logout toast
          setLogoutToastOpen(true);

          const timer = setTimeout(() => {
            // hide the logout toast
            setLogoutToastOpen(false);

            // navigate to login page
            navigate("/login");

            // clear timeout
            clearTimeout(timer);
          }, 2100);

          return;
        });
      }

      // if wrong user is detected which means the user is trying to update other's assignment
      if (data.wrongUser === true) {
        setUpdateDeleteInvalid(true);
        return;
      }

      // if server gives permission take the user to the update assignment page
      if (data.canProceed === true) {
        navigate(`/assignments/${_id}/update`);
      }
    });
  };

  // check if user has the permission to delete assignment
  const checkIfCanDelete = () => {
    // step 1 find out user auth status
    const userLoggedIn = checkIfUserIsLoggedIn();

    // step 2 if no user in auth redirect to login page
    if (!userLoggedIn) {
      navigate("/login");
      return;
    }

    // api end point to send this check request to
    const url = `${apiBaseURL}/assignments/can-delete`;

    // also pass in the assignment email (to check if the user has permission to update current assignment in the server side)
    postData(url, { email }).then((data) => {
      // if token doesn't exist or wrong token logout and navigate to homepage
      if (data.noToken === true || data.badToken === true) {
        logout().then(() => {
          // show the logout toast
          setLogoutToastOpen(true);

          const timer = setTimeout(() => {
            // hide the logout toast
            setLogoutToastOpen(false);

            // navigate to login page
            navigate("/login");

            // clear timeout
            clearTimeout(timer);
          }, 2100);

          return;
        });
      }

      // if wrong user is detected which means the user is trying to delete other's assignment
      if (data.wrongUser === true) {
        setUpdateDeleteInvalid(true);
        return;
      }

      // if server gives permission delete the assignment
      if (data.canProceed === true) {
        // send delete request to delete the assignment
        const url = `${apiBaseURL}/assignments/${_id}/delete`;

        deleteData(url)
          .then((data) => {
            if (data.deletedCount > 0) {
              // if delete successful then show delete successful modal
              setDeleteSuccessful(true);

              const timer = setTimeout(() => {
                setDeleteSuccessful(false);
                shouldUpdateFunction(true);
                clearTimeout(timer);
              }, 1500);
            }
          })
          .catch((err) => {
            console.error(err.message);
          });
      }
    });
  };

  return (
    <div className="bg-white h-full flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.2)] p-4 pb-6 rounded-default">
      {/* thumbnail image */}
      <img
        className="block aspect-[16/11] w-full object-cover mb-4"
        src={thumbnail}
        alt={`assignment for ${title}`}
      />

      {/* name of the assignment */}
      <h3 className="mb-4 text-xl font-bold">{title}</h3>

      {/* short details and buttons */}
      <div className="mt-auto">
        <div className="mb-7">
          <p>
            <span className="text-primary font-medium">Marks:</span>{" "}
            {totalMarks}
          </p>
          <p>
            <span className="text-primary font-medium">Difficulty:</span>{" "}
            {difficulty.toUpperCase()}
          </p>
        </div>

        {/* 3 buttons view, update and delete */}
        <div className="flex flex-col items-center gap-3">
          <LinkBtn
            text="View Assignment"
            url={`/assignments/${_id}`}
            modifyClasses="w-full"
          />
          {/* update btn */}
          <ButtonBtn
            outlinedPrimary={true}
            modifyClasses="w-full"
            text="Update Assignment"
            onClickFunction={checkIfCanUpdate}
          />

          {/* delete btn */}
          <AssignmentDeleteBtn
            onClickFunction={checkIfCanDelete}
            modifyClasses="w-max mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

AssignmentCard.propTypes = {
  assignment: PropTypes.object,
  shouldUpdateFunction: PropTypes.func,
};

export default AssignmentCard;
