import React from "react";

const Faq = ({ faqData }) => {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <div>
        {faqData.map((faq, index) => (
          <div key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
