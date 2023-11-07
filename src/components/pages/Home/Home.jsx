// shared components
import Banner from "../../shared/Banner/Banner";
import Features from "../../shared/features/features";
import FrequentQuestions from "../../shared/FrequentQuestions/FrequentQuestions";

// containers
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";

// data
import features from "./../../../nativeData/features";
import frequentQuestions from "../../../nativeData/faqs";

const Home = () => {
  return (
    <div>
      {/* top banner section */}
      <section className="mb-sectionGapSm md:mb-sectionGapMd">
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
      <section id="features" className="mb-sectionGapSm md:mb-sectionGapMd">
        <InnerContainer>
          <Features features={features} />
        </InnerContainer>
      </section>

      {/* faq section */}
      <section id="faqs" className="mb-sectionGapSm md:mb-sectionGapMd">
        <InnerContainer>
          <FrequentQuestions faqInfo={frequentQuestions} />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
