"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
	const [isVisible, setIsVisible] = useState(false);
	const { translations } = useLanguage();
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

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

		const section = document.getElementById("contact");
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
		// Réinitialiser les messages d'erreur lorsque l'utilisateur commence à taper
		if (error) setError("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(""); // Réinitialiser les erreurs précédentes

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formState),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(
					data.message ||
						"Une erreur est survenue lors de l'envoi du message"
				);
			}

			// Message envoyé avec succès
			setIsSubmitting(false);
			setSubmitted(true);
			setFormState({
				name: "",
				email: "",
				subject: "",
				message: "",
			});

			// Reset du message de succès après 5 secondes
			setTimeout(() => {
				setSubmitted(false);
			}, 5000);
		} catch (error) {
			console.error("Erreur lors de l'envoi du message:", error);
			setIsSubmitting(false);
			setError(
				error.message ||
					"Une erreur est survenue lors de l'envoi du message"
			);
		}
	};

	const contactInfo = [
		{
			icon: <Mail size={24} />,
			title: translations.about.email,
			content: translations.about.emailValue,
			link: "mailto:messaoudinina55@gmail.com",
		},
		{
			icon: <Phone size={24} />,
			title: translations.contact.phone,
			content: translations.contact.phoneValue,
			link: "tel:+33766537759",
		},
		{
			icon: <MapPin size={24} />,
			title: translations.contact.address,
			content: translations.contact.addressValue,
			link: "https://maps.google.com/?q=route+de+Saint+Simon,+Toulouse,+France",
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

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section id="contact" className="py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={
						isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-4 text-white">{translations.contact.title}</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-orange-400 mx-auto rounded-full"></div>
					<p className="mt-4 text-gray-300 max-w-2xl mx-auto">
						{translations.contact.subtitle}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<motion.div
						className="lg:col-span-1"
						initial={{ opacity: 0, y: 30 }}
						animate={
							isVisible
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 30 }
						}
						transition={{ duration: 0.7, delay: 0.2 }}
						whileHover={{
							scale: 1.02,
							boxShadow:
								"0 10px 30px -15px var(--color-ring)",
						}}
					>
						<Card className="h-full bg-slate-950/80 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
							<CardHeader>
								<CardTitle className="text-white">{translations.contact.infoTitle}</CardTitle>
								<CardDescription className="text-gray-400">
									{translations.contact.infoSubtitle}
								</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-col gap-4">
								{contactInfo.map((item, index) => (
									<motion.a
										key={index}
										href={item.link}
										target={
											item.title === "Adresse"
												? "_blank"
												: "_self"
										}
										rel="noopener noreferrer"
										initial={{ opacity: 0, x: -20 }}
										animate={
											isVisible
												? { opacity: 1, x: 0 }
												: { opacity: 0, x: -20 }
										}
										transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
										whileHover={{ scale: 1.02, x: 5 }}
										className="flex items-start gap-4 p-4 rounded-lg border border-purple-500/20 hover:border-purple-400/40 hover:bg-slate-900/50 transition-all"
									>
										<div className="text-purple-400 flex-shrink-0">
											{item.icon}
										</div>
										<div>
											<h3 className="font-semibold mb-1 text-white">
												{item.title}
											</h3>
											<p className="text-gray-400 text-sm">
												{item.content}
											</p>
										</div>
									</motion.a>
								))}
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						className="lg:col-span-2"
						initial={{ opacity: 0, y: 30 }}
						animate={
							isVisible
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 30 }
						}
						transition={{ duration: 0.7, delay: 0.4 }}
						whileHover={{
							scale: 1.02,
							boxShadow:
								"0 10px 30px -15px var(--color-ring)",
						}}
					>
						<Card className="h-full flex flex-col bg-slate-950/80 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
							<CardHeader>
								<CardTitle className="text-white">{translations.contact.formTitle}</CardTitle>
								<CardDescription className="text-gray-400">
									{translations.contact.formSubtitle}
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-1">
								{submitted ? (
									<motion.div
										className="bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded-md"
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.3 }}
									>
										{translations.contact.successMessage}
									</motion.div>
								) : (
									<form onSubmit={handleSubmit}>
										{error && (
											<motion.div
												className="flex items-start gap-2 mb-4 p-4 bg-red-500/10 border border-red-500/50 text-red-400 rounded-md"
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
											>
												<AlertTriangle
													size={20}
													className="flex-shrink-0 mt-0.5"
												/>
												<div>
													<p className="font-medium">
														{translations.contact.errorTitle}
													</p>
													<p>{error}</p>
												</div>
											</motion.div>
										)}

										<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
											<div className="space-y-2">
												<label
													htmlFor="name"
													className="block text-sm font-medium text-gray-200"
												>
													{translations.contact.nameLabel}
												</label>
												<Input
													id="name"
													name="name"
													value={formState.name}
													onChange={handleChange}
													required
													placeholder={translations.contact.namePlaceholder}
													className="bg-slate-900/50 border-purple-500/30 text-white placeholder:text-gray-500"
												/>
											</div>

											<div className="space-y-2">
												<label
													htmlFor="email"
													className="block text-sm font-medium text-gray-200"
												>
													{translations.contact.emailLabel}
												</label>
												<Input
													type="email"
													id="email"
													name="email"
													value={formState.email}
													onChange={handleChange}
													required
													placeholder={translations.contact.emailPlaceholder}
													className="bg-slate-900/50 border-purple-500/30 text-white placeholder:text-gray-500"
												/>
											</div>
										</div>

										<div className="mb-4 space-y-2">
											<label
												htmlFor="subject"
												className="block text-sm font-medium text-gray-200"
											>
												{translations.contact.subjectLabel}
											</label>
											<Input
												id="subject"
												name="subject"
												value={formState.subject}
												onChange={handleChange}
												required
												placeholder={translations.contact.subjectPlaceholder}
												className="bg-slate-900/50 border-purple-500/30 text-white placeholder:text-gray-500"
											/>
										</div>

										<div className="mb-6 space-y-2">
											<label
												htmlFor="message"
												className="block text-sm font-medium text-gray-200"
											>
												{translations.contact.messageLabel}
											</label>
											<Textarea
												id="message"
												name="message"
												value={formState.message}
												onChange={handleChange}
												required
												rows={6}
												placeholder={translations.contact.messagePlaceholder}
												className="bg-slate-900/50 border-purple-500/30 text-white placeholder:text-gray-500"
											/>
										</div>

										<motion.div
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
										>
											<Button
												type="submit"
												disabled={isSubmitting}
												className="w-full sm:w-auto bg-gradient-to-r from-purple-500/60 to-orange-400/60 hover:from-purple-600/70 hover:to-orange-500/70 backdrop-blur-sm text-white font-semibold rounded-full shadow-lg border-0"
												size="lg"
											>
												{isSubmitting ? (
													<>
														<div className="h-5 w-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2"></div>
														<span>
															{translations.contact.sendingButton}
														</span>
													</>
												) : (
													<>
														<Send
															size={18}
															className="mr-2"
														/>
														<span>
															{translations.contact.sendButton}
														</span>
													</>
												)}
											</Button>
										</motion.div>
									</form>
								)}
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
