// react imports
import PropTypes from "prop-types";

const SectionHeading = ({ text, modifyClasses = "" }) => {
  return (
    <h2
      className={`text-xl lg:text-3xl text-primary text-center font-bold ${modifyClasses}`}
    >
      {text}
    </h2>
  );
};

SectionHeading.propTypes = {
  text: PropTypes.any.isRequired,
  modifyClasses: PropTypes.string,
};

export default SectionHeading;
