"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Building, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Experience() {
	const [isVisible, setIsVisible] = useState(false);
	const { translations } = useLanguage();

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

		const section = document.getElementById("experience");
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	const experiences = [
		{
			title: translations.experience.positions.entrepreneur.title,
			company: translations.experience.positions.entrepreneur.company,
			location: translations.experience.positions.entrepreneur.location,
			period: translations.experience.positions.entrepreneur.period,
			logo: null,
			description: translations.experience.positions.entrepreneur.description,
			technologies: "LLM, OCR, NLP, Machine Learning, Python, React, React Native, PostgreSQL",
		},
		{
			title: translations.experience.positions.orange.title,
			company: translations.experience.positions.orange.company,
			location: translations.experience.positions.orange.location,
			period: translations.experience.positions.orange.period,
			logo: "/Orange_logo.svg.png",
			description: translations.experience.positions.orange.description,
			technologies: "Spark, Hadoop, PySpark, Scala, SQL, GCP, DBT, Python, LLM",
		},
		{
			title: translations.experience.positions.alliance4u.title,
			company: translations.experience.positions.alliance4u.company,
			location: translations.experience.positions.alliance4u.location,
			period: translations.experience.positions.alliance4u.period,
			logo: "/Alliance4U.png",
			description: translations.experience.positions.alliance4u.description,
			technologies: "Python, Talend, SQL, Power BI, Qlik Sense, Machine Learning, API REST",
		},
	];

	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 30 },
		show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<section id="experience" className="py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={
						isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-4 text-white">
						{translations.experience.title}
					</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-orange-400 mx-auto rounded-full"></div>
					<p className="mt-4 text-gray-300 max-w-2xl mx-auto">
						{translations.experience.subtitle}
					</p>
				</motion.div>

				<motion.div
					className="space-y-8"
					variants={container}
					initial="hidden"
					animate={isVisible ? "show" : "hidden"}
				>
					{experiences.map((experience, index) => (
						<motion.div
							key={index}
							variants={item}
							whileHover={{
								scale: 1.02,
								boxShadow:
									"0 10px 30px -15px var(--color-ring)",
							}}
							transition={{ duration: 0.2 }}
						>
							<Card className="overflow-hidden bg-slate-950/80 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
								<CardContent className="p-0">
									<div className="flex flex-col md:flex-row">
										<div className="md:w-1/3 p-6">
											<h3 className="text-xl font-bold">
												{experience.title}
											</h3>

											<div className="flex items-center gap-2 mt-3 text-primary">
												{experience.logo ? (
													<div className="relative w-6 h-6 flex-shrink-0">
														<Image
															src={experience.logo}
															alt={`Logo ${experience.company}`}
															fill
															sizes="24px"
															className="object-contain"
														/>
													</div>
												) : (
													<Building size={18} />
												)}
												<p className="font-semibold">
													{experience.company}
												</p>
											</div>

											<div className="flex items-center gap-2 mt-2 text-muted-foreground">
												<Calendar size={16} />
												<span>{experience.period}</span>
											</div>

											<div className="flex items-center gap-2 mt-2 text-muted-foreground">
												<MapPin size={16} />
												<span>
													{experience.location}
												</span>
											</div>
										</div>

										<div className="md:w-2/3 p-6 border-t md:border-t-0 md:border-l border-border">
											<ul className="space-y-2 mb-4">
												{experience.description.map(
													(item, itemIndex) => (
														<motion.li
															key={itemIndex}
															className="flex items-start"
															initial={{
																opacity: 0,
																x: 20,
															}}
															animate={
																isVisible
																	? {
																			opacity: 1,
																			x: 0,
																	  }
																	: {
																			opacity: 0,
																			x: 20,
																	  }
															}
															transition={{
																delay:
																	0.1 *
																		itemIndex +
																	0.5,
																duration: 0.4,
															}}
														>
															<span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
															<span className="text-muted-foreground">
																{item}
															</span>
														</motion.li>
													)
												)}
											</ul>

											<div className="mt-4 border-t border-border pt-4">
												<h4 className="font-semibold mb-2">
													{translations.experience.technologiesUsed}
												</h4>
												<div className="flex flex-wrap gap-2">
													{experience.technologies
														.split(", ")
														.map(
															(
																tech,
																techIndex
															) => (
																<motion.span
																	key={
																		techIndex
																	}
																	className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
																	initial={{
																		opacity: 0,
																		scale: 0.9,
																	}}
																	animate={
																		isVisible
																			? {
																					opacity: 1,
																					scale: 1,
																			  }
																			: {
																					opacity: 0,
																					scale: 0.9,
																			  }
																	}
																	transition={{
																		delay:
																			0.05 *
																				techIndex +
																			1,
																		duration: 0.2,
																	}}
																	whileHover={{
																		scale: 1.05,
																	}}
																>
																	{tech}
																</motion.span>
															)
														)}
												</div>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
