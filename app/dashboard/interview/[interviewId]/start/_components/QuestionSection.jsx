"use client";
import { Volume2 } from "lucide-react";
import React, { useState } from "react";

const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex,setActiveQuestionIndex }) => {
  console.log("questions are:", mockInterviewQuestion)
  const textToSpeech=(text)=>{
    if('speechSynthesis' in window){
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech)
    }
    else{
      alert('Sorry, your browser does not support text to speech ')
    }
  }
  return (
    <div className="p-5  border rounded-lg">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols4 gap-5">
        {mockInterviewQuestion ? (
          <>
            <span>
              {mockInterviewQuestion.map((question, index) => (
                <button onClick={() => setActiveQuestionIndex(index)}>
                  <h2
                    className={`p-2 my-2  self-start rounded-full text-xs md:text-sm text-center cursor-pointer
        ${activeQuestionIndex == index ? "bg-black text-white" :'bg-secondary '}`}
                  >
                    Question #{index + 1}
                    {/* <hr />{item.question} */}
                  </h2>
                  {/* <h2 className='p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer'></h2> */}
                </button>
              ))}
            </span>

            <span className="my-5 text-md md:text-lg">
              {mockInterviewQuestion[activeQuestionIndex]?.question}
            </span>
            <Volume2 className="cursor-pointer" onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}/>
          </>
        ) : (
          <p>No interview questions available yet.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionSection;
