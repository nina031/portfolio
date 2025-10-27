"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Calendar, MapPin, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
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

		const section = document.getElementById("projects");
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	const projects = [
		{
			title: translations.projects.pickeat.title,
			description: translations.projects.pickeat.description,
			technologies: [
				"Python",
				"OCR",
				"LLM",
				"PostgreSQL",
				"React",
				"Next.js",
			],
			year: translations.projects.pickeat.year,
			location: translations.projects.pickeat.location,
			link: "https://pick-n-eat.app/",
			githubLink: null,
			isFounder: true,
			image: "/pickeat.png",
			status: "active",
		},
		{
			title: translations.projects.cashsense.title,
			description: translations.projects.cashsense.description,
			technologies: [
				"Python",
				"NLP",
				"Machine Learning",
				"PostgreSQL",
				"React",
				"Next.js",
			],
			year: translations.projects.cashsense.year,
			location: translations.projects.cashsense.location,
			link: "https://cash-sense-frontend.vercel.app/login?callbackUrl=%2Fdashboard",
			githubLink: null,
			isFounder: true,
			image: "/cashSense.png",
			status: "active",
		},
		{
			title: translations.projects.aitrends.title,
			description: translations.projects.aitrends.description,
			technologies: [
			"Python",
			"NLP",
			"Scraping",
			"Machine Learning",
			"Dash",
			"PostgreSQL",
			"Docker",
			"Data Visualization",
			],
			year: translations.projects.aitrends.year,
			location: translations.projects.aitrends.location,
			link: "https://first-app-func-front.vercel.app/",
			githubLink: "https://github.com/nina031",
			image: "/AI-veille-techno.png",
		}
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
		<section id="projects" className="py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={
						isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-4 text-white">{translations.projects.title}</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-orange-400 mx-auto rounded-full"></div>
					<p className="mt-4 text-gray-300 max-w-2xl mx-auto">
						{translations.projects.subtitle}
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={container}
					initial="hidden"
					animate={isVisible ? "show" : "hidden"}
				>
					{projects.map((project, index) => (
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
							<Card className="h-full flex flex-col bg-slate-950/80 backdrop-blur-sm overflow-hidden border-purple-500/30 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 pt-0 pb-6">
								{/* Image container avec bordure inférieure */}
								<div className={`relative w-full aspect-video overflow-hidden border-b border-border ${project.title === "Pick&Eat" ? "bg-white" : ""}`}>
									{project.image ? (
										<Image
											src={project.image}
											alt={`Image du projet ${project.title}`}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											className={`${project.title === "Pick&Eat" ? "object-contain" : "object-cover"} transition-transform duration-500 hover:scale-105`}
											quality={90}
										/>
									) : (
										// Fallback si l'image n'est pas disponible
										<div className="w-full h-full bg-muted flex items-center justify-center">
											<span className="text-muted-foreground">
												Image non disponible
											</span>
										</div>
									)}

									{/* Overlay semi-transparent en bas de l'image pour améliorer la lisibilité */}
									<div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/30 to-transparent"></div>

									{/* Indicateur de statut actif */}
									{project.status === "active" && (
										<div className="absolute top-3 right-3 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg animate-pulse">
											<Activity size={12} />
											<span>{translations.projects.active}</span>
										</div>
									)}
								</div>

								<CardHeader className="pt-5">
									<CardTitle className="flex items-center gap-2 text-lg">
										{project.title}
										{project.isFounder && (
											<span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
												{translations.projects.founder}
											</span>
										)}
									</CardTitle>
									<div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
										<div className="flex items-center gap-1">
											<Calendar size={14} />
											<span>{project.year}</span>
										</div>
										<div className="flex items-center gap-1">
											<MapPin size={14} />
											<span>{project.location}</span>
										</div>
									</div>
								</CardHeader>

								<CardContent className="flex-grow pb-4">
									<p className="text-muted-foreground">
										{project.description}
									</p>

									<div className="mt-4">
										<h4 className="font-semibold mb-2">
											{translations.projects.technologiesUsed}
										</h4>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map(
												(tech, techIndex) => (
													<span
														key={techIndex}
														className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs"
													>
														{tech}
													</span>
												)
											)}
										</div>
									</div>
								</CardContent>

								<CardFooter className="flex justify-between pt-4 border-t border-border">
									{project.link ? (
										<div className="flex items-center gap-2">
											<Button
												asChild
												variant="outline"
												size="sm"
												className="gap-1"
											>
												<Link
													href={project.link}
													target="_blank"
													rel="noopener noreferrer"
												>
													<ExternalLink size={14} />
													<span>{translations.projects.viewProject}</span>
												</Link>
											</Button>

											{project.status === "active" && (
												<div className="flex items-center text-emerald-500">
													<Activity
														size={18}
														className="animate-pulse"
													/>
												</div>
											)}
										</div>
									) : (
										<div></div>
									)}

									{project.githubLink ? (
										project.githubBackendLink ? (
											<div className="flex gap-2">
												<Button
													asChild
													variant="outline"
													size="sm"
													className="gap-1"
												>
													<Link
														href={
															project.githubLink
														}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Github size={14} />
														<span>Frontend</span>
													</Link>
												</Button>
												<Button
													asChild
													variant="outline"
													size="sm"
													className="gap-1"
												>
													<Link
														href={
															project.githubBackendLink
														}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Github size={14} />
														<span>Backend</span>
													</Link>
												</Button>
											</div>
										) : (
											<Button
												asChild
												variant="outline"
												size="sm"
												className="gap-1"
											>
												<Link
													href={project.githubLink}
													target="_blank"
													rel="noopener noreferrer"
												>
													<Github size={14} />
													<span>GitHub</span>
												</Link>
											</Button>
										)
									) : (
										<div></div>
									)}
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
