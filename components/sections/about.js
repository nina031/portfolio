"use client";

import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function About() {
	const [isVisible, setIsVisible] = useState(false);
	const { translations, isEnglish } = useLanguage();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		const section = document.getElementById("about");
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);




	return (
		<section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={
						isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-4 text-slate-800">{translations.about.title}</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-orange-400 mx-auto rounded-full"></div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Photo */}
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                    <Image
                      src="/photo-me.jpg"
                      alt="Nina Messaoudi"
                      fill
                      priority
                      className="object-cover rounded-full border-4 border-purple-500/30"
                      sizes="(min-width: 640px) 20rem, 16rem"
                    />
                  </div>
                </motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={
							isVisible
								? { opacity: 1, x: 0 }
								: { opacity: 0, x: 50 }
						}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<h3 className="text-2xl font-semibold mb-4 text-slate-800">
							{translations.about.jobTitle}
						</h3>

						<p className="mb-6 text-slate-600 leading-relaxed">
							{translations.about.description}
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									isVisible
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								<h4 className="font-semibold mb-2 text-slate-800">
									{translations.about.location}
								</h4>
								<p className="text-slate-600">
									{translations.about.locationValue}
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									isVisible
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 0.7 }}
							>
								<h4 className="font-semibold mb-2 text-slate-800">{translations.about.email}</h4>
								<p className="text-slate-600">
									{translations.about.emailValue}
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									isVisible
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 0.8 }}
							>
								<h4 className="font-semibold mb-2 text-slate-800">
									{translations.about.phone}
								</h4>
								<p className="text-slate-600">
									{translations.about.phoneValue}
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									isVisible
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 0.9 }}
							>
								<h4 className="font-semibold mb-2 text-slate-800">{translations.about.languages}</h4>
								<p className="text-slate-600">
									{translations.about.languagesValue}
								</p>
							</motion.div>
						</div>

						<motion.div
							className="flex flex-col sm:flex-row gap-4"
							initial={{ opacity: 0, y: 20 }}
							animate={
								isVisible
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 20 }
							}
							transition={{ duration: 0.6, delay: 1 }}
						>
							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									asChild
									size="lg"
                					className="bg-gradient-to-r from-purple-500/100 to-orange-400/100 hover:from-purple-600/70 hover:to-orange-500/70 backdrop-blur-sm text-white font-semibold py-3 px-6 sm:px-8 transition-all duration-300 shadow-lg text-sm sm:text-base w-full sm:w-auto"
								>
									<a
										href={
											isEnglish
												? "https://github.com/nina031/CV/raw/main/resume_cv_onepage_en.pdf"
												: "https://github.com/nina031/CV/raw/main/resume_cv_onepage.pdf"
										}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Download size={18} />
										{translations.about.cvShort}
									</a>
								</Button>
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									asChild
									size="lg"
									className="gap-2 w-full sm:w-auto border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400"
								>
									<a
										href={
											isEnglish
												? "https://github.com/nina031/CV/raw/main/resume_cv_en.pdf"
												: "https://github.com/nina031/CV/raw/main/resume_cv.pdf"
										}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Download size={18} />
										{translations.about.cvDetailed}
									</a>
								</Button>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
