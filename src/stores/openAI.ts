import { defineStore } from "pinia";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const useOpenAIStore = defineStore("openAI", () => {
  const CHAT = async () => {
    console.log("chat with openAI");

    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });

    console.log("response", response);
  };

  return {
    CHAT,
  };
});
