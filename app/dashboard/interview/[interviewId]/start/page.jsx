"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';

const StartInterview = ({params}) => {

    const [interviewData, setInterviewData] = useState();
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [questionsLength, setQuestionsLength] = useState(0);
    useEffect(()=>{
        GetInterviewDetails();
    },[]);

    const GetInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))
console.log('result is:',result)

        const jsonMockResp = JSON.parse(result[0].jsonMockResp)
        console.log('xxxxxxxxxxxxxx',jsonMockResp.questions[0].question);
        console.log(jsonMockResp.questions.length)
        setQuestionsLength(jsonMockResp.questions.length)
        setMockInterviewQuestion(jsonMockResp.questions);
        // console.log('questions are:',mockInterviewQuestion)
        // console.log(result);
        setInterviewData(result[0]);
    }
  return (
    <>
    {/* {console.log('questions are:', mockInterviewQuestion.questions[0])} */}
    <div>
        <div className='gap-4 my-4 grid grid-cols-1 md:grid-cols-2'>
            {/* Questions */}

            <QuestionSection mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            />

            {/* Video Audio Recording */}
            <div>
            <RecordAnswerSection/>
            
            
            </div>
           
            <div className='p-2 space-x-2 w-full flex justify-center items-center'>
            <Button 
            disabled={activeQuestionIndex ==0}
            onClick={()=>{activeQuestionIndex>0?setActiveQuestionIndex(activeQuestionIndex-1):'';}}>Previous</Button>
            <Button disabled={activeQuestionIndex >= questionsLength-1}
            onClick={()=>{activeQuestionIndex<questionsLength?setActiveQuestionIndex(activeQuestionIndex+1):''; console.log(activeQuestionIndex)}}>Next</Button>
            
            </div>
        </div>
    </div>
    </>
  )
}

export default StartInterview