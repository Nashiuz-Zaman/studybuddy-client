// react imports
import PropTypes from "prop-types";

//  react icon import
import { FaUserCircle } from "react-icons/fa";

const UsernameWithImage = ({ user, justImage = false }) => {
  let displayName, photoURL;

  if (user) {
    displayName = user.displayName;
    photoURL = user.photoURL;

    if (justImage) {
      return (
        <div className="w-[2.5rem] aspect-square rounded-full overflow-hidden">
          {!photoURL && (
            <FaUserCircle className="w-full h-full object-contain text-white"></FaUserCircle>
          )}
          {photoURL !== null && <img src={photoURL} alt="user image" />}
        </div>
      );
    }

    return (
      <div className="flex items-center gap-4">
        <p className="hidden text-white lg:block">{displayName}</p>
        <div className="w-[2.5rem] aspect-square rounded-full overflow-hidden">
          {!photoURL && (
            <FaUserCircle className="w-full h-full object-contain text-white"></FaUserCircle>
          )}
          {photoURL !== null && <img src={photoURL} alt="user image" />}
        </div>
      </div>
    );
  }
};

UsernameWithImage.propTypes = {
  user: PropTypes.object,
  justImage: PropTypes.bool,
};

export default UsernameWithImage;
