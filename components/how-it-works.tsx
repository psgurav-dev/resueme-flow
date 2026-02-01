import { useState } from "react";
import { FileUpload } from "./ui/file-upload";
import { parseResume } from "@/services/gemini-ai";
import { PortfolioData } from "@/templates/types";

import { testSampleData } from "@/data/test";
import dynamic from 'next/dynamic';
import ModernCompact from "@/templates/modern-compact";
import ModernTheme from "@/templates/modern-1";
import { HoverBorderGradient, HoverBorderGradientDemo } from "./ui/hover-button";
import { SquareArrowOutUpRight } from "lucide-react";

const PdfViewer = dynamic(() => import('@/components/PdfViewer'), { ssr: false });


const HowItWorks = () => {
	const [files, setFiles] = useState<File[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<PortfolioData | null>(null);
	const [resumeText, setResumeText] = useState<string>("");
	const [filePayload, setFilePayload] = useState<{ data: string; mimeType: string; name: string } | null>(null);


	const generatePortfolio = async (payload: { data: string; mimeType: string; name: string }) => {
		setIsLoading(true);
		if (!payload) {
			console.log(payload)
			setError("Please provide your resume text or upload a file (PDF, Image, Text).");
			return;
		}
		setError(null);
		try {
			const input = payload ? { data: payload.data, mimeType: payload.mimeType } : resumeText;
			const parsedData = await parseResume(input);
			console.log("Parsed Portfolio Data:", parsedData);
			if (parsedData) {
				setIsLoading(false);
			}
			setData(parsedData);
		} catch (err: any) {
			setError(err.message || "Something went wrong while generating your portfolio.");
			setIsLoading(false);
			console.error(err);
		}
	};

	const fileToBase64 = (file: File): Promise<string> => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				const result = reader.result as string;
				const base64 = result.split(",")[1];
				resolve(base64);
			};
			reader.onerror = (error) => reject(error);
		});
	};


	const handleConvertToPortfolio = async () => {
		const file = files[0];
		if (file) {
			setError(null);
			try {
				if (file.type === 'text/plain' || file.name.endsWith('.md')) {
					const reader = new FileReader();
					reader.onload = (event) => {
						const text = event.target?.result as string;
						setResumeText(text);
						setFilePayload(null);
					};
					reader.readAsText(file);
				} else if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
					const base64 = await fileToBase64(file);
					setFilePayload({
						data: base64,
						mimeType: file.type,
						name: file.name
					});
					await generatePortfolio({
						data: base64,
						mimeType: file.type,
						name: file.name
					});
					setResumeText('');
				} else {
					setError("Unsupported file format. Please upload text, PDF, or image files.");
				}
			} catch (err) {
				setError("Error processing file. Please try again.");
			}

		}
	}
	return <div className="font-manrope py-8  max-w-6xl mx-auto pb-4">
		<h4 className="text-4xl font-bold text-gray-300 font-bricolage">How It Works</h4>
		<div className="flex items-center gap-x-2 my-4">
			<hr className="rotate-90 w-4 text-white" />
			<span className="font-bricolage text-sm font-light italic text-white before">Make it feel effortless.</span>
		</div>
		{error && <p className="text-red-500 mb-4">{error}</p>}
		{data ?
			<PortfolioReady file={files[0]} portfolioJSON={data} /> :
			<FileUpload files={files} setFiles={setFiles} handleConvertToPortfolio={handleConvertToPortfolio} isLoading={isLoading} />
		}
		<div className="max-w-150">
			{/* <PdfViewer file={files[0] ?? '/psgurav.pdf'} /> */}
			{/* <ModernCompact data={testSampleData}/> */}
		</div>

	</div>;
}


const PortfolioReady = ({ portfolioJSON, file }: { portfolioJSON: PortfolioData, file: File }) => {
	return (
		<div>
			<h4 className="text-center text-gray-100 font-bricolage py-4 text-shadow-4xs font-bold text-4xl">Your Portfolio is ready</h4>

			<div className="bg-black/40 h-125 overflow-y-auto border border-gray-400 rounded-2xl group hide-scrollbar">
				<ModernTheme data={portfolioJSON} />
			</div>
			{/* <button className="bg-radial-[at_25%_25%] from-white to-zinc-900 to-25% h-10 font-manrope text-white px-12 py-2 text-sm rounded-lg font-bold hover:bg-gray-800 transition-colors text-center cursor-pointer mx-auto my-8">
				Get Your Link
			</button> */}
			<div className="my-4 mx-auto  flex items-center justify-center">
				<HoverBorderGradient
					containerClassName="rounded-full"
					as="button"
					className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
				>
					<SquareArrowOutUpRight />
					<span className="font-manrope">Get Your Link</span>
				</HoverBorderGradient>
			</div>
		</div>
	)
}

export default HowItWorks;