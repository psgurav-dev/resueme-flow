
const Footer = () => {
	return (
		<footer
			className="text-sm bg-black/40 text-gray-100"
		>
			<div className="max-w-7xl mx-auto px-6 py-12">
				<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
					<div className="flex-1">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="text-white"
								>
									<path
										d="M12 2L15.5 8.5L22 12L15.5 15.5L12 22L8.5 15.5L2 12L8.5 8.5L12 2Z"
										fill="currentColor"
										opacity="0.95"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-lg font-semibold">ResumeFlow</h3>
								<p className="text-gray-200 text-sm">Clean resume templates and AI-assisted tools</p>
							</div>
						</div>

						<p className="mt-6 text-gray-300 max-w-md">Templates, parsing, and export tools to help you present your best self.</p>
					</div>

					<div className="flex-1 flex gap-8 justify-between">
						<div>
							<h4 className="text-gray-200 font-medium mb-3">Product</h4>
							<ul className="space-y-2 text-gray-300">
								<li>
									<a href="#" className="hover:text-white">Templates</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">PDF Export</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">AI Parser</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-gray-200 font-medium mb-3">Company</h4>
							<ul className="space-y-2 text-gray-300">
								<li>
									<a href="#" className="hover:text-white">About</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">Blog</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">Contact</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="w-full md:w-72">
						<h4 className="text-gray-200 font-medium mb-3">Stay updated</h4>
						<form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
							<input
								type="email"
								aria-label="Email address"
								placeholder="you@company.com"
								className="flex-1 rounded-md px-3 py-2 bg-white/5 border border-white/10 placeholder-gray-400 focus:outline-none"
							/>
							<button
								type="submit"
								style={{ backgroundColor: 'var(--color-secondary)' }}
								className="text-white px-4 py-2 rounded-md"
							>
								Subscribe
							</button>
						</form>

						<div className="mt-4 flex gap-3">
							<a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M22 5.92c-.64.28-1.34.46-2.07.55.75-.45 1.33-1.17 1.6-2.02-.7.42-1.47.72-2.29.88C18.3 4.22 17.12 3.5 15.78 3.5c-2.4 0-4.35 1.94-4.35 4.33 0 .34.04.67.11.99C7.7 8.65 4.1 6.79 1.67 3.87c-.37.63-.58 1.36-.58 2.15 0 1.47.75 2.77 1.9 3.53-.6-.02-1.17-.19-1.66-.46v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.15-1.13.15-.28 0-.56-.03-.83-.08.56 1.74 2.18 3.01 4.1 3.05-1.5 1.17-3.4 1.86-5.46 1.86-.36 0-.72-.02-1.07-.06 1.98 1.28 4.33 2.03 6.85 2.03 8.22 0 12.72-6.83 12.72-12.75v-.58C21 7.4 21.6 6.71 22 5.92z" fill="currentColor" />
								</svg>
							</a>

							<a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM.35 8.5h4.3V24H.35V8.5zM8.98 8.5h4.12v2.12h.06c.57-1.08 1.97-2.22 4.06-2.22 4.34 0 5.14 2.86 5.14 6.58V24h-4.3v-7.44c0-1.77-.03-4.04-2.46-4.04-2.47 0-2.85 1.93-2.85 3.92V24h-4.3V8.5z" fill="currentColor" />
								</svg>
							</a>

							<a href="#" aria-label="GitHub" className="text-gray-300 hover:text-white">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.67 3.02 8.63 7.2 10.03.53.1.72-.23.72-.51v-1.8c-2.93.64-3.55-1.26-3.55-1.26-.48-1.22-1.17-1.54-1.17-1.54-.96-.66.07-.65.07-.65 1.06.08 1.62 1.09 1.62 1.09.94 1.6 2.47 1.14 3.07.87.1-.68.37-1.14.67-1.4-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.41-2.1 1.09-2.84-.11-.27-.47-1.36.1-2.84 0 0 .89-.29 2.92 1.09a10.1 10.1 0 012.66-.36c.9 0 1.8.12 2.66.36 2.02-1.38 2.9-1.09 2.9-1.09.58 1.48.22 2.57.11 2.84.68.74 1.08 1.69 1.08 2.84 0 4.04-2.48 4.92-4.84 5.18.38.33.72.98.72 1.99v2.95c0 .28.19.62.73.51 4.18-1.4 7.2-5.36 7.2-10.03C23.1 5.33 18.27.5 12 .5z" fill="currentColor" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				<div className="mt-8 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400">
					<p>© {new Date().getFullYear()} ResumeFlow. All rights reserved.</p>
					<div className="flex gap-4 mt-4 md:mt-0">
						<a href="#" className="hover:text-white">Terms</a>
						<a href="#" className="hover:text-white">Privacy</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer