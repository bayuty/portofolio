import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_OWNER, EXPERIENCE, PROJECTS, SKILLS, BIO, EDUCATION } from '../constants';

const apiKey = process.env.API_KEY || '';

// Construct a system prompt based on the portfolio data
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PORTFOLIO_OWNER}'s portfolio website. 
Your role is to answer questions about ${PORTFOLIO_OWNER}'s skills, experience, projects, and background professionally and concisely.

Here is the context about ${PORTFOLIO_OWNER}:
Bio: ${BIO}
Skills: ${SKILLS.map(s => s.name).join(', ')}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.duration})`).join('; ')}
Projects: ${PROJECTS.map(p => p.title).join(', ')}
Education: ${EDUCATION.map(e => `${e.degree} from ${e.school}`).join('; ')}

Tone: Professional, enthusiastic, and helpful. 
Keep answers brief (under 100 words) unless asked for details.
If asked about something not in the data, politely say you don't have that information but suggest contacting ${PORTFOLIO_OWNER} directly.
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient && apiKey) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  const client = getClient();
  
  if (!client) {
    return "I'm sorry, I'm currently offline (API Key missing). Please contact the developer directly.";
  }

  try {
    const model = client.models;
    // Using a flash model for quick responses suitable for a chat widget
    const response = await model.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while thinking. Please try again later.";
  }
};