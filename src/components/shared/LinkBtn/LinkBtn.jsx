// react imports
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const LinkBtn = ({
  text,
  url,
  outlined = false,
  outlinedPrimary = false,
  hashed = false,
  modifyClasses = "",
}) => {
  if (hashed) {
    return (
      <HashLink
        className={`${
          outlined
            ? "bg-transparent border border-white text-white hover:bg-[rgba(255,255,255,0.5)]"
            : outlinedPrimary
            ? "bg-transparent border border-primary text-primary hover:bg-primaryLightest"
            : "bg-primary border border-primary hover:border-primaryLight hover:bg-primaryLight text-white"
        } block transition-all duration-300 rounded-full text-center px-5 py-2 text-lg ${modifyClasses}`}
        to={url}
      >
        {text}
      </HashLink>
    );
  }

  return (
    <Link
      className={`${
        outlined
          ? "bg-transparent border border-white text-white hover:bg-[rgba(255,255,255,0.5)]"
          : outlinedPrimary
          ? "bg-transparent border border-primary text-primary hover:bg-primaryLightest"
          : "bg-primary border border-primary hover:border-primaryLight hover:bg-primaryLight text-white"
      } block transition-all duration-300 rounded-full text-center px-5 py-2 text-lg ${modifyClasses}`}
      to={url}
    >
      {text}
    </Link>
  );
};

LinkBtn.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  outlined: PropTypes.bool,
  outlinedPrimary: PropTypes.bool,
  hashed: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default LinkBtn;
