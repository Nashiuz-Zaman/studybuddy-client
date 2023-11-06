// react imports
import PropTypes from "prop-types";

//  react icon import
import { FaUserCircle } from "react-icons/fa";

const UserProfile = ({ authUser }) => {
  // declare photo variables
  let photoURL;

  if (authUser) {
    // assign photo variables
    photoURL = authUser.photoURL;

    return (
      <div className="w-[2.5rem] border border-[#ddd] aspect-square rounded-full overflow-hidden">
        {!photoURL && (
          <FaUserCircle className="w-full h-full object-contain text-white"></FaUserCircle>
        )}
        {photoURL !== null && <img src={photoURL} alt="user image" />}
      </div>
    );
  }
};

UserProfile.propTypes = {
  authUser: PropTypes.object,
  justImage: PropTypes.bool,
};

export default UserProfile;
