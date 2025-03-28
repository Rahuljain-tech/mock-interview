// import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   return (
//     <section className="bg-orange-300">
//       <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
//         <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
//           <img
//             alt=""
//             src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//             className="absolute inset-0 h-full w-full object-cover opacity-80"
//           />

//           <div className="hidden lg:relative lg:block lg:p-12">
//             <a className="block text-white" href="#">
//               <span className="sr-only">Home</span>
//               {/* <svg
//             className="h-8 sm:h-10"
//             viewBox="0 0 28 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
//               fill="currentColor"
//             />
//           </svg> */}
//             </a>

//             <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
//                 <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
//                   Welcome to AI Mock Interviews!
//                 </h1>

//                 <p className="mt-4 leading-relaxed text-gray-500">
//                   Get ready to ace your next interview with our interactive
//                   AI-powered mock interviews!
//                 </p>
//               </h1>
//           </div>
//         </section>

//         <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
//           <div className="max-w-xl lg:max-w-3xl">
//             <div className="relative -mt-16 block lg:hidden">
//               <a
//                 className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
//                 href="#"
//               >
//                 <span className="sr-only">Home</span>
//                 {/* <svg
//               className="h-8 sm:h-10"
//               viewBox="0 0 28 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
//                 fill="currentColor"
//               />
//             </svg> */}
//               </a>

//               <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
//                 <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
//                   Welcome to AI Mock Interviews!
//                 </h1>

//                 <p className="mt-4 leading-relaxed text-gray-500">
//                   Get ready to ace your next interview with our interactive
//                   AI-powered mock interviews!
//                 </p>
//               </h1>

//               <p className="mt-4 leading-relaxed text-gray-500"></p>
//             </div>
//              <div className="">
//              <SignIn />
//              </div>
//           </div>
//         </main>
//       </div>
//     </section>
//   );
// }

// import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900">
//       <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
//         {/* Left Section - Hero Image and Headline */}
//         <section className="relative flex items-center justify-center bg-gray-900 lg:col-span-7 lg:h-full xl:col-span-6">
//           <div className="absolute inset-0 overflow-hidden">
//             <img
//               alt="Interview setting with modern office background"
//               src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//               className="h-full w-full object-cover"
//               style={{ 
//                 filter: "brightness(0.6) saturate(1.2)",
//                 transform: "scale(1.05)"
//               }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-black/50" />
//           </div>

//           <div className="relative z-10 px-8 py-12 text-center lg:py-24">
//             <div className="inline-flex items-center justify-center rounded-full bg-blue-600/20 p-2 mb-6">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//               </svg>
//             </div>
            
//             <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
//               AI Mock Interviews
//             </h1>
            
//             <p className="mt-6 max-w-lg mx-auto text-lg text-blue-100">
//               Master your interview skills with our AI-powered platform. Practice realistic scenarios, receive instant feedback, and build confidence for your next opportunity.
//             </p>
            
//             <div className="mt-8 flex flex-wrap justify-center gap-4">
//               <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-100">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 Personalized Feedback
//               </span>
//               <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-100">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 Practice Anytime
//               </span>
//               <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-100">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                 </svg>
//                 Industry-Specific Questions
//               </span>
//             </div>
//           </div>
//         </section>

//         {/* Right Section - Sign In Form */}
//         <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-5 lg:px-16 lg:py-12 xl:col-span-6 bg-gradient-to-br from-orange-200 to-amber-300">
//           <div className="max-w-xl w-full">
//             <div className="text-center lg:text-left mb-8">
//               <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
//                 Get Started Today
//               </h2>
//               <p className="mt-2 text-gray-600">
//                 Sign in to access your personalized interview preparation platform
//               </p>
//             </div>
            
//             <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
//               <SignIn />
//             </div>
            
//             <div className="mt-8 text-center">
//               <p className="text-sm text-gray-700">
//                 By signing in, you'll get access to:
//               </p>
//               <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <li className="flex items-start">
//                   <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                   </svg>
//                   <span className="text-sm text-gray-700 text-left">Customized interview questions</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                   </svg>
//                   <span className="text-sm text-gray-700 text-left">Detailed performance analysis</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                   </svg>
//                   <span className="text-sm text-gray-700 text-left">Interview recordings</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                   </svg>
//                   <span className="text-sm text-gray-700 text-left">AI-generated improvement tips</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </main>
//       </div>
//     </section>
//   );
// }


import { SignIn } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

export default function Page() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex flex-col items-center justify-center relative px-4 py-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          alt="Interview setting with modern office background"
          src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="h-full w-full object-cover"
          style={{ 
            filter: "brightness(0.4) saturate(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-black/70" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center rounded-full bg-blue-600/20 p-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            AI Mock Interviews
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100">
            Master your interview skills with our AI-powered platform. Practice realistic scenarios, receive instant feedback, and build confidence for your next opportunity.
          </p>
        </div>
        
        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Personalized Feedback
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Practice Anytime
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Industry-Specific Questions
          </span>
        </div>
        
        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left Side - Benefits */}
          <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
            <h2 className="text-2xl font-bold mb-6">
              Why Choose Our Platform?
            </h2>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-lg text-blue-200">Realistic Scenarios</h3>
                  <p className="text-blue-100/80">Practice with AI interviewers trained on industry-specific questions</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-lg text-blue-200">Instant Analysis</h3>
                  <p className="text-blue-100/80">Get immediate feedback on your responses, body language, and presentation</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-lg text-blue-200">Improvement Tracking</h3>
                  <p className="text-blue-100/80">Monitor your progress over time with detailed performance metrics</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-300 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-lg text-blue-200">Personalized Coaching</h3>
                  <p className="text-blue-100/80">Receive customized tips to address your specific improvement areas</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8">
              <div className="inline-flex items-center rounded-lg bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Your data is always private and secure
              </div>
            </div>
          </div>
          
          {/* Right Side - Sign In */}
          <div className="w-full md:w-1/2">
            <div className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Get Started Today
                </h2>
                <p className="mt-2 text-gray-600">
                  Sign in to access your personalized interview preparation platform
                </p>
              </div>
              
              <SignIn 
              appearance={{
                baseTheme: shadesOfPurple,
                variables: { colorPrimary: 'green' },
              }}/>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-center text-gray-500">
                  "This tool helped me land my dream job at a top tech company. The mock interviews were incredibly realistic!"
                </p>
                <p className="text-sm font-medium text-center text-gray-700 mt-2">
                  — Sarah J., Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-blue-200/80">
            Join thousands of job seekers who have improved their interview skills with our platform
          </p>
          <div className="flex justify-center mt-4 space-x-6">
            <span className="text-blue-300 font-semibold">24/7 Support</span>
            <span className="text-blue-300 font-semibold">100+ Industries</span>
            <span className="text-blue-300 font-semibold">Secure Platform</span>
          </div>
        </div>
      </div>
    </section>
  );
}