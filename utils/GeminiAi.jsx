// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");
  
//   const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-pro-002",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };



  
//     export const chatSession = model.startChat({
//       generationConfig,
//    // safetySettings: Adjust safety settings
//    // See https://ai.google.dev/gemini-api/docs/safety-settings
      
//     });
  
// //     const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// //     console.log(result.response.text());
 
  
// //   run();
  

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Create a function to handle chat interactions
export async function createChatSession() {
  const chatSession = model.startChat({
    generationConfig,
  });
  return chatSession;
}

// Example usage function
export async function sendMessage(message) {
  try {
    const chat = await createChatSession();
    console.log('dddddddddddd')
    const result = await chat.sendMessage(message);
    console.log('rrrrrrreeeee',result)
    return result.response.text();
  } catch (error) {
    console.error("Error in Gemini chat:", error);
    throw error;
  }
}