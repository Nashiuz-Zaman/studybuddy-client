// react imports
import PropTypes from "prop-types";

// react icons
import { IoChevronBack } from "react-icons/io5";

// react router imports
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const BackLinkBtn = ({
  text,
  url,
  outlined = false,
  outlinedPrimary = false,
  hashed = false,
  modifyClasses = "",
}) => {
  const outlinedClasses =
    "bg-transparent border border-white text-white hover:bg-[rgba(255,255,255,0.5)]";

  const oulinedPrimaryClasses =
    "bg-transparent border border-primary text-primary hover:bg-primaryLightest hover:border-primaryLightest";

  const primaryClasses =
    "bg-primary border border-primary hover:border-primaryLight hover:bg-primaryLight text-white";

  const allClasses =
    "flex items-center gap-1 transition-all duration-300 rounded-full text-center px-5 py-2 text-lg";

  const chevronClasses = "text-2xl";

  if (hashed) {
    return (
      <HashLink
        className={`${
          outlined
            ? outlinedClasses
            : outlinedPrimary
            ? oulinedPrimaryClasses
            : primaryClasses
        } ${allClasses} ${modifyClasses}`}
        to={url}
      >
        <IoChevronBack className={chevronClasses} /> <span>{text}</span>
      </HashLink>
    );
  }

  return (
    <Link
      className={`${
        outlined
          ? outlinedClasses
          : outlinedPrimary
          ? oulinedPrimaryClasses
          : primaryClasses
      } ${allClasses} ${modifyClasses}`}
      to={url}
    >
      <IoChevronBack className={chevronClasses} /> <span>{text}</span>
    </Link>
  );
};

BackLinkBtn.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  outlined: PropTypes.bool,
  outlinedPrimary: PropTypes.bool,
  hashed: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default BackLinkBtn;
