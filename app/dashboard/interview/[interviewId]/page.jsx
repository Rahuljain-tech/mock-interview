"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { Close } from '@radix-ui/react-dialog'
import { eq } from 'drizzle-orm'
import { Lightbulb, LightbulbIcon, WebcamIcon, X as XIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

const Interview = ({params}) => {

    const [interviewData,setInterviewData]= useState();
    const [webCamEnabled, setWebCamEnabled] = useState(false);
    useEffect(()=>{
        console.log(params.interviewId)
        GetInterviewDetails();

    },[])

    const GetInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))

        console.log(result);
        setInterviewData(result[0]);
    }
  return (
    <div className='my-10 flex justify-center flex-col items-center'>
        <h2 className='font-bold text-2xl'>Let's Get Started</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='flex flex-col my-5 gap-5 '>
               <div className='flex flex-col p-5 rounded-lg border gap-5'>
               <h2 className='text-lg'><strong>Job Role/Job Position: {interviewData?.jobPosition}</strong></h2>
                <h2 className='text-lg'><strong>Job Description/Tech Stack: {interviewData?.jobDesc}</strong></h2>
                <h2 className='text-lg'><strong>Years Of Experience: {interviewData?.jobExperience}</strong></h2>

               </div>
                {/* {interviewData.jobPosition} */}
                <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                    <h2 className='flex gap-2 items-center text-yellow-100'><LightbulbIcon/><strong>Information</strong></h2>
                </div>
              </div>

              <div>
            {webCamEnabled ? 
              <div className="relative">
                <Webcam
                    onUserMedia={() => setWebCamEnabled(true)}
                    onUserMediaError={() => setWebCamEnabled(false)} 
                    mirrored={true}
                    style={{
                        height: 300,
                        width: 300
                    }}
                />
                <button 
                  onClick={() => setWebCamEnabled(false)}
                  className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white transition-colors"
                >
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            :
            <>
                <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border'/>
                <Button variant='ghost' onClick={() => setWebCamEnabled(true)}>Enable Web Camera</Button>
            </>
            }
            
              </div>
        </div>
        <div className='flex justify-end items-end'>
            <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
            <Button>Start Interview</Button>
            </Link>
        </div>
              
    </div>
  )
}

export default Interview