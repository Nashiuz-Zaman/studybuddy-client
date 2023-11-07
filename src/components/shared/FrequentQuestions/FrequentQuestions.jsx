// react
import PropTypes from "prop-types";

const FrequentQuestions = ({ faqInfo }) => {
  return (
    <div className="py-12 grid grid-cols-1 lg:grid-cols-[1fr_3fr]">
      {/* heading */}
      <div className="flex justify-center items-center lg:border-r border-primary">
        <h3 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:p-8 mb-elementGapMd lg:mb-0">
          Frequently <br className="hidden lg:inline" />
          Asked <br className="hidden lg:inline" />
          Questions
        </h3>
      </div>

      {/* frequently asked questions */}
      <div className="px-8 grid grid-cols-1 text-center md:text-left md:grid-cols-2 gap-8">
        {faqInfo &&
          faqInfo.map((faq) => {
            // destructure the faq object
            const { id, question, answer } = faq;

            return (
              <div key={id}>
                <h4 className="text-xl text-primary font-bold mb-2">
                  {question}
                </h4>
                <p className="!leading-[1.5]">{answer}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

FrequentQuestions.propTypes = {
  faqInfo: PropTypes.array,
};

export default FrequentQuestions;
