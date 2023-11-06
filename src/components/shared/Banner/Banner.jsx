// react
import PropTypes from "prop-types";

// shared component
import LinkBtn from "./../LinkBtn/LinkBtn";

const Banner = ({ heading = "", imageSource = null }) => {
  return (
    <div>
      <h1 className="text-center text-2xl xsm:text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold tracking-tight !leading-snug">
        {heading}
      </h1>
      <div className="w-[80%] lg:max-w-[50rem] mx-auto mb-10">
        <img className="block w-full" src={imageSource} alt="banner" />
      </div>
      <LinkBtn
        hashed={true}
        url={"#features"}
        text={"Explore"}
        modifyClasses="w-[70%] sm:w-[40%] md:w-[20%] text-center rounded-full mx-auto"
      />
    </div>
  );
};

Banner.propTypes = {
  heading: PropTypes.node,
  imageSource: PropTypes.string,
};

export default Banner;
