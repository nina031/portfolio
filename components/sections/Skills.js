"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Server,
	Database,
	LineChart,
	Layout,
	BarChart3,
	Workflow,
	Settings,
	Code,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Skills() {
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

		const section = document.getElementById("skills");
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	const skillCategories = [
        {
			title: translations.skills.categories.dataScience,
			icon: <LineChart size={24} />,
			skills: [
				"Machine Learning",
				"Deep Learning",
				"NLP",
				"Computer Vision",
                "LLM",
			],
		},
        {
			title: translations.skills.categories.dataEngineering,
			icon: <Workflow size={24} />,
			skills: ["Spark", "Hadoop","GCP", "Talend", "DBT"],
		},
        {
			title: translations.skills.categories.database,
			icon: <Database size={24} />,
			skills: ["PostgreSQL", "MongoDB", "Neo4j", "SQL"],
		},
        {
            title: translations.skills.categories.dataViz,
            icon: <BarChart3 size={24} />,
            skills: ["PowerBI", "QlikSense", "Dash"],
        },
		{
			title: translations.skills.categories.backend,
			icon: <Server size={24} />,
			skills: ["Python", "FastAPI", "Flask"],
		},
		{
			title: translations.skills.categories.web,
			icon: <Layout size={24} />,
			skills: [
				"Next.js",
				"React",
				"Tailwind",
				"HTML/CSS",
			],
		},
		{
			title: translations.skills.categories.mobile,
			icon: <Code size={24} />,
			skills: ["React Native", "Expo", "NativeWind"],
		},
        {
			title: translations.skills.categories.tools,
			icon: <Settings size={24} />,
			skills: ["Git / GitHub", "Méthodes Agile", "Jira"],
		},

	];

	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={
						isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-4 text-slate-800">{translations.skills.title}</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-orange-400 mx-auto rounded-full"></div>
					<p className="mt-4 text-slate-600 max-w-2xl mx-auto">
						{translations.skills.subtitle}
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
					variants={container}
					initial="hidden"
					animate={isVisible ? "show" : "hidden"}
				>
					{skillCategories.map((category, index) => (
						<motion.div
							key={index}
							variants={item}
							whileHover={{
								scale: 1.03,
								boxShadow:
									"0 10px 30px -15px var(--color-ring)",
							}}
							transition={{ duration: 0.2 }}
						>
							<Card className="h-full bg-white border-slate-200 hover:border-purple-400/50 transition-all duration-300 shadow-sm hover:shadow-md">
								<CardHeader className="pb-2">
									<CardTitle className="flex items-center gap-3 text-slate-800">
										<div className="text-purple-500">
											{category.icon}
										</div>
										<span>{category.title}</span>
									</CardTitle>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2">
										{category.skills.map(
											(skill, skillIndex) => (
												<li
													key={skillIndex}
													className="text-slate-600 flex items-center gap-2"
												>
													<span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 inline-block"></span>
													{skill}
												</li>
											)
										)}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
