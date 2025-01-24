
import React from 'react'

const QuestionSection = ({mockInterviewQuestion}) => {
    console.log('questions are:',mockInterviewQuestion)
  return (
    <div className='p-5  border rounded-lg'>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols4 gap-5'>
        {mockInterviewQuestion ? (
    mockInterviewQuestion.map((item,index) => (
        <>
        <h2 className='p-2 bg-secondary self-start rounded-md text-xs md:text-sm text-center cursor-pointer'>Question #{index + 1}
        <hr />{item.question}
        </h2>
        {/* <h2 className='p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer'></h2> */}
        </>
    ))
) : (
    <p>No interview questions available yet.</p>
)}
        </div>
    </div>
  )
}

export default QuestionSection