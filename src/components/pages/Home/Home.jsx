// shared components
import Banner from "../../shared/Banner/Banner";
import Features from "../../shared/features/features";

// containers
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";

// data
import features from "./../../../nativeData/features";

const Home = () => {
  return (
    <div>
      {/* top banner section */}
      <section className="mb-sectionGapMd">
        <InnerContainer>
          <Banner
            heading={
              <>
                StudyBuddy: <br />
                <span className="text-primary">Collaborative</span> Learning
                Made Easy
              </>
            }
            imageSource={"https://i.ibb.co/gFPM6xx/home-banner.webp"}
          />
        </InnerContainer>
      </section>

      {/* feature section */}
      <section id="features" className="mb-sectionGapMd">
        <InnerContainer>
          <Features features={features} />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
