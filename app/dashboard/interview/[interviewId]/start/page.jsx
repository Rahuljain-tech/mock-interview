"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection';

const StartInterview = ({params}) => {

    const [interviewData, setInterviewData] = useState();
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
    useEffect(()=>{
        GetInterviewDetails();
    },[]);

    const GetInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))
console.log('result is:',result)

        const jsonMockResp = JSON.parse(result[0].jsonMockResp)
        console.log('xxxxxxxxxxxxxx',jsonMockResp.questions[0].question);
        setMockInterviewQuestion(jsonMockResp.questions);
        // console.log('questions are:',mockInterviewQuestion)
        // console.log(result);
        setInterviewData(result[0]);
    }
  return (
    <>
    {/* {console.log('questions are:', mockInterviewQuestion.questions[0])} */}
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* Questions */}

            <QuestionSection mockInterviewQuestion={mockInterviewQuestion}/>

            {/* Video Audio Recording */}
        </div>
    </div>
    </>
  )
}

export default StartInterview