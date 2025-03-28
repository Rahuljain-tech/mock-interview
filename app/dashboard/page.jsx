import React from 'react'
import AddNewInterview from './_components/AddNewInterview'

const Dashboard = () => {
  return (
    // <div>
    //     <h2 className='font-bold text-2xl'>Dashboard</h2>
    //     <h2 className='text-gray-500'>Create and Start your AI Mock Interview</h2>

    //     <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
    //         <AddNewInterview/>
    //     </div>
    // </div>

    <div className="mt-10">
          <h3 className="text-xl font-semibold text-black mb-4">Create and Start your AI Mock Interview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* This mimics the AddNewInterview component from your dashboard */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-white cursor-pointer hover:shadow-lg transition-all hover:bg-white/20">
              <div className="flex justify-center items-center h-32 mb-3">
                <div className="h-20 w-20 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-center text-lg"><AddNewInterview/></h3>
            </div>
          </div>
        </div>
  )
}

export default Dashboard