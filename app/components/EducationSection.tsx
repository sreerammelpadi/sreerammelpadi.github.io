'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const educationData = [
	{
		id: 1,
		university: 'University at Buffalo (SUNY)',
		degree: 'MS in Computer Science',
		gpa: 'GPA: 4.0 / 4.0',
		courses: ['Analysis of Algorithms', 'Machine Learning', 'Data Structures', 'Database Systems', 'Computer Vision'],
		logo: '/201-Interlocking-UB-RGB-Blue.png',
		location: 'Buffalo, NY',
		dates: 'Aug 2024 - Dec 2025'
	},
	{
		id: 2,
		university: 'The National Institute of Engineering',
		degree: 'BE in Computer Science',
		gpa: 'GPA: 8.73 / 10.0',
		courses: ['Operating Systems', 'Object Oriented Programming', 'Compiler Design', 'Software Engineering', 'Web Development'],
		logo: '/nie-logo.png',
		location: 'Mysuru, KA, India',
		dates: '2017 - 2021'
	}
];

export default function EducationSection() {
	return (
		<section
			id="education"
			className="relative py-12 md:py-20 px-4 overflow-hidden"
			style={{ backgroundImage: 'url(/bg-img.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
		>
			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-purple-100/80 to-white/90 pointer-events-none z-0" />
			<div className="relative z-10 max-w-4xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-gray-800"
				>
					Education
				</motion.h2>

				<div className="relative pl-4 md:pl-0 border-l-2 border-blue-300">
					{educationData.map((edu, index) => (
						<motion.div
							key={edu.id}
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="relative mb-12 pl-8"
						>
							<div className="absolute -left-[11px] top-1 w-5 h-5 bg-white border-4 border-blue-500 rounded-full"></div>
							
							<div className="flex items-start">
								<div className="relative w-16 h-16 mr-4 rounded-md overflow-hidden shadow-md border border-gray-200 hidden md:block bg-white p-2">
									<Image
										src={edu.logo}
										alt={`${edu.university} logo`}
										fill
										className="object-contain"
									/>
								</div>
								<div className="flex-1">
									<div className="flex items-baseline flex-wrap mb-1">
										<h3 className="text-xl font-bold text-gray-800 mr-2">{edu.university}</h3>
										<div className="flex items-center text-gray-500 text-sm">
											<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
											<span>{edu.location}</span>
										</div>
									</div>
									<div className="flex items-center text-gray-500 text-sm">
										<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
										<span>{edu.dates}</span>
									</div>
									<p className="text-blue-600 font-semibold mt-2">{edu.degree}</p>
									<p className="text-gray-500 text-sm mb-4">{edu.gpa}</p>
									
									<h4 className="font-semibold text-gray-700 mb-2 mt-3">Relevant Courses</h4>
									<div className="flex flex-wrap gap-2">
										{edu.courses.map(course => (
											<span key={course} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
												{course}
											</span>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
} 