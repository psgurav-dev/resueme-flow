import { useRef, useState } from "react";
import {  FileCodeCorner, } from "lucide-react";
import { motion } from "motion/react";



const TARGET_TEXT = "Convert To Portfolio";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

export const EncryptButton = ({handleConvertToPortfolio,isLoading}:{ handleConvertToPortfolio: () => void, isLoading?: boolean}) => {
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const [text, setText] = useState(TARGET_TEXT);

	const scramble = () => {
		let pos = 0;

		intervalRef.current = setInterval(() => {
			const scrambled = TARGET_TEXT.split("")
				.map((char, index) => {
					if (pos / CYCLES_PER_LETTER > index) {
						return char;
					}

					const randomCharIndex = Math.floor(Math.random() * CHARS.length);
					const randomChar = CHARS[randomCharIndex];

					return randomChar;
				})
				.join("");

			setText(scrambled);
			pos++;

			if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
				stopScramble();
			}
		}, SHUFFLE_TIME);
	};

	const stopScramble = () => {
		clearInterval(intervalRef.current || undefined);

		setText(TARGET_TEXT);
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		handleConvertToPortfolio();
		
	}
	return (
		<motion.button
			whileHover={{
				scale: 1.025,
			}}
			whileTap={{
				scale: 0.975,
			}}
			onMouseEnter={scramble}
			onMouseLeave={stopScramble}
			onClick={handleClick}
			disabled={isLoading}
			className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-transparent px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-gray-200 cursor-pointer"
		>
			<div className="relative z-10 flex items-center gap-2">
			<FileCodeCorner />
				<span className="font-bricolage font-light">{text}</span>
			</div>
			<motion.span
				initial={{
					y: "100%",
				}}
				animate={{
					y: "-100%",
				}}
				transition={{
					repeat: Infinity,
					repeatType: "mirror",
					duration: 1,
					ease: "linear",
				}}
				className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-[#1C465D] from-40% via-primary to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
			/>
		</motion.button>
	);
};

