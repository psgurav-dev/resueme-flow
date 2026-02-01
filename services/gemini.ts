import { GoogleGenAI, Type } from "@google/genai";

export interface AiConsensus {
	summary: string;
	pros: string[];
	cons: string[];
	aiRating: number;
}

const getAi = () => new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY || "" });

export const getGeminiAiConsensus = async (
	question: string,
): Promise<AiConsensus> => {
	const ai = getAi();
	const prompt = `Answer the following question: ${question}`;

	try {
		const response = await ai.models.generateContent({
			model: "gemini-3-flash-preview",
			contents: prompt,
			config: {
				responseMimeType: "application/json",
				responseSchema: {
					type: Type.OBJECT,
					properties: {
						summary: { type: Type.STRING },
						pros: { type: Type.ARRAY, items: { type: Type.STRING } },
						cons: { type: Type.ARRAY, items: { type: Type.STRING } },
						aiRating: { type: Type.NUMBER },
					},
					required: ["summary", "pros", "cons", "aiRating"],
				},
			},
		});

		return JSON.parse(response.text || "{}") as AiConsensus;
	} catch (error) {
		console.error("Gemini Error:", error);
		return {
			summary: "AI failed to generate consensus for this title.",
			pros: ["Engaging visuals", "Strong premise"],
			cons: ["Pacing issues"],
			aiRating: 7.5,
		};
	}
};
