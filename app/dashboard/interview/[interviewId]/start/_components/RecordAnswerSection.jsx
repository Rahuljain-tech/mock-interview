'use client';
import  Webcam  from 'react-webcam'
import React, { useEffect, useState } from 'react'
import useSpeechToText from 'react-hook-speech-to-text';

import { Button } from '@/components/ui/button'
import { WebcamIcon, XIcon } from 'lucide-react';

const RecordAnswerSection = () => {
  const [userAnswer, setUserAnswer] = useState('');
     const [webCamEnabled, setWebCamEnabled] = useState(false);
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });
      console.log(isRecording)
      const click=()=>{
        console.log(isRecording)
      }

      useEffect(()=>{
        results.map((result)=>(
          setUserAnswer(prevAns => prevAns + result.transcript)
        ))
      },[results])

      const SaveUserAnswer=()=>{
        if (error) {
          console.error("Speech to Text Error:", error);
          alert("An error occurred. Please check the console for details.");
          return;
        }
    
        if (isRecording) {
          stopSpeechToText();
        } else {
          startSpeechToText();
        }
        console.log("Recording toggled. Current state:", isRecording);
      }
  return (
    <div className='space-2 gap-2'>
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
            
                <WebcamIcon className='h-80 w-full p-20 bg-secondary rounded-lg border'/>
              
            }

        {/* <Button variant='outline'>Record Answer</Button> */}
        
      {/* <h1>Recording: {isRecording.toString()}</h1> */}
      <div className='m-2 space-x-2'>
      <Button variant='ghost' onClick={() => setWebCamEnabled(true)}>Enable Web Camera</Button>
            
            {/* <Button className="hover:bg-gray-500" onClick={()=>{isRecording ? stopSpeechToText() : startSpeechToText();
              click()
            }}>
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </Button> */}

<Button
  className="hover:bg-gray-500"
  onClick={SaveUserAnswer}
>
  {isRecording ? 'Stop Recording' : 'Start Recording'}
</Button>

      </div>
      <ul>
        {results.map((result) => (
          <li key={result.timestamp}>{result.transcript}</li>
        ))}
        {interimResult && <li>{interimResult}</li>}
      </ul>
      
    </div>
  )
}

export default RecordAnswerSection