// react
import PropTypes from "prop-types";

const Feature = ({ feature }) => {
  const { title, imageSource, description } = feature;

  return (
    <div>
      <p className="text-xl text-center font-bold text-primary mb-6">{title}</p>
      <div className="w-[13rem] md:w-[50%] mx-auto mb-6">
        <img className="w-full" src={imageSource} alt={title} />
      </div>
      <p className="text-center !leading-[1.5] text-textMediumLight">
        {description}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.object,
};

export default Feature;
