// react
import PropTypes from "prop-types";

// shared components
import Feature from "../feature/feature";

const Features = ({ features = null }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
      {features &&
        features.map((feature) => {
          return <Feature key={feature.id} feature={feature} />;
        })}
    </div>
  );
};

Features.propTypes = {
  features: PropTypes.array,
};

export default Features;
