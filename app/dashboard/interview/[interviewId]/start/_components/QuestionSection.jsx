"use client";
import React, { useState } from "react";

const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  console.log("questions are:", mockInterviewQuestion);
  return (
    <div className="p-5  border rounded-lg">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols4 gap-5">
        {mockInterviewQuestion ? (
          <>
            <span>
              {mockInterviewQuestion.map((question, index) => (
                <div>
                  <h2
                    className={`p-2 my-2 bg-secondary self-start rounded-full text-xs md:text-sm text-center cursor-pointer
        ${activeQuestionIndex == index && "bg-black text-white"}`}
                  >
                    Question #{index + 1}
                    {/* <hr />{item.question} */}
                  </h2>
                  {/* <h2 className='p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer'></h2> */}
                </div>
              ))}
            </span>

            <span className="my-5 text-md md:text-lg">
              {mockInterviewQuestion[activeQuestionIndex]?.question}
            </span>
          </>
        ) : (
          <p>No interview questions available yet.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionSection;
