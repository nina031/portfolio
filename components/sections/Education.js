"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Education() {
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

		const section = document.getElementById("education");
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	const educations = [
		{
			degree: translations.education.degrees.master.degree,
			institution: translations.education.degrees.master.institution,
			period: translations.education.degrees.master.period,
			description: translations.education.degrees.master.description,
			type: "education",
		},
		{
			degree: translations.education.degrees.license3.degree,
			institution: translations.education.degrees.license3.institution,
			period: translations.education.degrees.license3.period,
			description: translations.education.degrees.license3.description,
			type: "education",
		},
		{
			degree: translations.education.degrees.license.degree,
			institution: translations.education.degrees.license.institution,
			period: translations.education.degrees.license.period,
			description: translations.education.degrees.license.description,
			type: "education",
		},
	];

	const certifications = [
		{
			name: translations.education.certifications.ibm.name,
			issuer: translations.education.certifications.ibm.issuer,
			date: translations.education.certifications.ibm.date,
			credentialUrl: "https://coursera.org/verify/professional-cert/HB1I91Y1XJWJ",
			type: "certification",
		},
		{
			name: translations.education.certifications.dataiku_ml.name,
			issuer: translations.education.certifications.dataiku_ml.issuer,
			date: translations.education.certifications.dataiku_ml.date,
			credentialUrl: "https://verify.skilljar.com/c/hiaikwo8p6hi",
			type: "certification",
		},
				{
			name: translations.education.certifications.dataiku_core.name,
			issuer: translations.education.certifications.dataiku_core.issuer,
			date: translations.education.certifications.dataiku_core.date,
			credentialUrl: "verify.skilljar.com/c/fjn9rzyzv2bb",
			type: "certification",
		},
	];

	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariant = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section id="education" className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={
						isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-4 text-slate-800">
						{translations.education.title}
					</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-orange-400 mx-auto rounded-full"></div>
					<p className="mt-4 text-slate-600 max-w-2xl mx-auto">
						{translations.education.subtitle}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Education Section */}
					<div>
						<motion.div
							className="flex items-center gap-2 mb-6"
							initial={{ opacity: 0, x: -20 }}
							animate={
								isVisible
									? { opacity: 1, x: 0 }
									: { opacity: 0, x: -20 }
							}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<GraduationCap size={24} className="text-purple-500" />
							<h3 className="text-2xl font-semibold text-slate-800">
								{translations.education.educationTitle}
							</h3>
						</motion.div>

						<motion.div
							className="space-y-6"
							variants={container}
							initial="hidden"
							animate={isVisible ? "show" : "hidden"}
						>
							{educations.map((edu, index) => (
								<motion.div
									key={index}
									variants={itemVariant}
									whileHover={{ scale: 1.02, y: -5 }}
									transition={{ duration: 0.2 }}
								>
									<Card className="overflow-hidden bg-white border-gray-200 hover:border-purple-500/50 transition-all duration-300 shadow-sm min-h-[280px]">
										<CardContent className="p-6 flex flex-col h-full">
											<h4 className="text-lg font-bold text-slate-800">
												{edu.degree}
											</h4>
											<p className="text-purple-600 mt-1 font-medium">
												{edu.institution}
											</p>
											<div className="flex items-center gap-1 mt-2 text-slate-600">
												<Calendar size={16} />
												<span>{edu.period}</span>
											</div>
											<p className="mt-3 text-slate-600 text-sm">
												{edu.description}
											</p>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Certifications Section */}
					<div>
						<motion.div
							className="flex items-center gap-2 mb-6"
							initial={{ opacity: 0, x: -20 }}
							animate={
								isVisible
									? { opacity: 1, x: 0 }
									: { opacity: 0, x: -20 }
							}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<Award size={24} className="text-purple-500" />
							<h3 className="text-2xl font-semibold text-slate-800">
								{translations.education.certificationTitle}
							</h3>
						</motion.div>

						<motion.div
							className="space-y-6"
							variants={container}
							initial="hidden"
							animate={isVisible ? "show" : "hidden"}
						>
							{certifications.map((cert, index) => (
								<motion.div
									key={index}
									variants={itemVariant}
									whileHover={{ scale: 1.02, y: -5 }}
									transition={{ duration: 0.2 }}
								>
									<Card className="overflow-hidden bg-white border-gray-200 hover:border-purple-500/50 transition-all duration-300 shadow-sm min-h-[280px]">
										<CardContent className="p-6 flex flex-col h-full">
											<h4 className="text-lg font-bold text-slate-800">
												{cert.name}
											</h4>
											<p className="text-purple-600 mt-1 font-medium">
												{cert.issuer}
											</p>
											<div className="flex items-center gap-1 mt-2 text-slate-600">
												<Calendar size={16} />
												<span>{translations.education.obtained} {cert.date}</span>
											</div>
											<a
												href={cert.credentialUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-block mt-3 text-sm text-purple-600 hover:text-purple-700 underline hover:no-underline transition-all"
											>
												{translations.education.viewCertification}
											</a>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
