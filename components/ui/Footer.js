"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const { translations } = useLanguage();

	return (
		<footer className="bg-gradient-to-b from-gray-100 to-slate-50 py-8">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4 text-slate-800">
							Nina Messaoudi
						</h3>
						<p className="text-slate-600 mb-4">
							{translations.footer.description}
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4 text-slate-800">
							{translations.footer.quickLinks}
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#about"
									className="text-slate-600 hover:text-slate-800 transition-colors"
								>
									{translations.footer.about}
								</Link>
							</li>
							<li>
								<Link
									href="#experience"
									className="text-slate-600 hover:text-slate-800 transition-colors"
								>
									{translations.footer.experience}
								</Link>
							</li>
							<li>
								<Link
									href="#projects"
									className="text-slate-600 hover:text-slate-800 transition-colors"
								>
									{translations.footer.projects}
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="text-slate-600 hover:text-slate-800 transition-colors"
								>
									{translations.footer.contact}
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4 text-slate-800">{translations.footer.contactTitle}</h3>
						<ul className="space-y-2">
							<li className="flex items-center gap-2 text-slate-600">
								<Mail size={16} />
								<span>messaoudinina55@gmail.com</span>
							</li>
							<li className="flex items-center gap-2 text-slate-600">
								<Phone size={16} />
								<span>(+33) 7 66 53 77 59</span>
							</li>
							<li className="flex items-center gap-2">
								<Link
									href="https://www.linkedin.com/in/nina-messaoudi-65881017a/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
								>
									<Linkedin size={16} />
									<span>LinkedIn</span>
								</Link>
							</li>
							<li className="flex items-center gap-2">
								<Link
									href="https://github.com/nina031"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
								>
									<Github size={16} />
									<span>GitHub</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-slate-200">
					<p className="text-center text-slate-600">
						© {currentYear} Nina Messaoudi.
					</p>
				</div>
			</div>
		</footer>
	);
}
