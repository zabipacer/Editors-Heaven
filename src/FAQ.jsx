import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question: "What is included in the Video Editing Bundle?",
    answer:
      "The bundle includes over 70 GB of assets, such as 8,000+ transitions, 2,000+ FX presets, 10,000+ fonts, 3,000+ sound effects, Adobe software, and a comprehensive video editing course.",
  },
  {
    question: "How much does the bundle cost?",
    answer: "The bundle costs 599RS.",
  },
  {
    question: "Is this a one-time payment?",
    answer: "Yes, this is a one-time payment.",
  },
  {
    question: "Do I need any prior experience in video editing?",
    answer:
      "No prior experience is required. The included course will guide you through the basics.",
  },
  {
    question: "What software is included in the bundle?",
    answer: "The bundle includes [list of software included].",
  },
  {
    question: "Can I use these assets for commercial projects?",
    answer:
      "Yes, you can use the assets for both personal and commercial projects.",
  },
  {
    question: "How do I access the assets after purchase?",
    answer: "You will receive a link to download all the assets via email.",
  },
  {
    question: "Are there any bonuses included?",
    answer: "Yes, [list of bonuses included].",
  },
  {
    question: "What if I have trouble accessing the assets?",
    answer: "Please contact our customer support for assistance.",
  },
  {
    question: "Can I share the assets with others?",
    answer:
      "No, the assets are for personal use only and cannot be shared.",
  },
  {
    question: "How can I contact your customer support?",
    answer:
      "You can contact us via email at [your email address] or through our website chat.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if the same item is clicked
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">FAQ</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <FiChevronUp className="text-xl text-blue-600" />
              ) : (
                <FiChevronDown className="text-xl text-blue-600" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
