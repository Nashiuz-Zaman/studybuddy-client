import Banner from "../../shared/Banner/Banner";

const Home = () => {
  return (
    <div>
      {/* top banner section */}
      <section className="mb-sectionGapSm">
        <Banner
          heading={
            <>
              StudyBuddy: <br />
              <span className="text-primary">Collaborative</span> Learning Made
              Easy
            </>
          }
          imageSource={"https://i.ibb.co/122TwPm/home-banner.webp"}
        />
      </section>
    </div>
  );
};

export default Home;
