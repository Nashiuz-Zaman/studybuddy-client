// react import
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";

// shared component
import Brandlogo from "../Brandlogo/Brandlogo";
import GoToTopBtn from "../GoToTopBtn/GoToTopBtn";

// container components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";

// custom hook
import useNavData from "../../../hooks/useNavData";

// data
import { socialmediaOptions } from "./../../../nativeData/socialMediaData";

// get the current year
const year = new Date().getFullYear();

const Footer = ({ logo = "" }) => {
  const { navOptionsAlways } = useNavData();

  return (
    <footer className="bg-primary pt-[7rem] pb-14 mt-auto relative">
      <GoToTopBtn modifyClasses="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20" />
      <InnerContainer>
        <Brandlogo logo={logo} modifyClasses="mb-10 mx-auto" />

        {/* footer nav heading */}
        <h3 className="text-white text-center mb-3 font-bold text-2xl">Menu</h3>
        {/* footer navigation */}
        <nav className="mb-14">
          <ul className="flex flex-col items-center xsm:flex-row justify-center gap-2">
            {navOptionsAlways.map((option) => {
              const { id, text, url } = option;
              return (
                <Link
                  className="leading-[normal] px-2 border-x-2 border-transparent hover:border-white text-white font-medium transition-all duration-200"
                  key={id}
                  to={url}
                >
                  {text}
                </Link>
              );
            })}
          </ul>
        </nav>

        {/* social media heading */}
        <h3 className="text-white text-center mb-6 font-bold text-2xl">
          Follow Us
        </h3>
        {/* social media logos */}
        <ul className="flex items-center justify-center gap-8 mb-12">
          {socialmediaOptions.map((option) => {
            const { id, image, url, title } = option;

            return (
              <a className="block w-[2rem] aspect-square" key={id} href={url}>
                <img
                  className="w-full h-full object-contain filter-white"
                  src={image}
                  alt={title}
                />
              </a>
            );
          })}
        </ul>

        <p className="text-white text-center">
          <small>&copy; {year} Brando, by Nashiuz Zaman</small>
        </p>
      </InnerContainer>
    </footer>
  );
};

Footer.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Footer;
