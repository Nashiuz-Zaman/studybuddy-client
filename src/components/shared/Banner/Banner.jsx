// react
import PropTypes from "prop-types";

const Banner = ({ heading = "", imageSource = null }) => {
  return (
    <div>
      <h1 className="text-center text-2xl xsm:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-snug">
        {heading}
      </h1>
      <div className="w-[80%] lg:max-w-[50rem] mx-auto">
        <img className="block w-full" src={imageSource} alt="banner" />
      </div>
    </div>
  );
};

Banner.propTypes = {
  heading: PropTypes.string,
  imageSource: PropTypes.string,
};

export default Banner;
