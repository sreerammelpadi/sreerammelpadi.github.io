'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'TheraPT: Empathetic Dialogue Generation using Transformer-based Conversational Agent With Reasoning',
		description: 'Developed a mental health-focused conversational agent by fine-tuning GPT-2 on counseling datasets along with BART-based context compression to summarize prior user interactions and enable long-range coherence. Integrated chain-of-thought prompting to induce reasoning. Achieved strong semantic alignment with human responses (BERTScore F1: 0.8948)',
		image: '/therapt.png',
		tags: ['LLMs', 'PyTorch', 'Kaggle', 'React', 'Flask'],
		src: 'https://github.com/sreerammelpadi/TheraPT',
	},
	{
		id: 2,
		title: 'MazeNav: Maze Exploration with Sparse Rewards using N-Step Double Q-Learning',
		description: 'Trained a reinforcement learning agent using N-Step Double Q-Learning in PyTorch to navigate a custom maze environment with sparse rewards, achieving 86% success rate after 1,000 episodes. Implemented environment from scratch (by inheriting OpenAI Gym Environment) and visualized learning progression through animated path traces and Q-value heatmaps.',
		image: '/sarsa_agent.gif',
		tags: ['Reinforcement Learning' ,'PyTorch', 'Python'],
		src: 'https://github.com/sreerammelpadi/maze-nav-reinforcement-learning',
	},
	{
		id: 3,
		title: 'Face Mask Detection, Recognition, and Attendance System',
		description: 'Developed a face mask detection and (face) recognition system using live-feed from Raspberry Pi, marking attendance with mask status in a remote database. Trained a CNN model on GPU with 89% accuracy using TensorFlow/Keras, scraped images with Beautiful Soup, and OpenCV for human detection. Deployed the system on Cloud using AWS EC2, RDS (MySQL) and Flask.',
		image: '/face-mask.png',
		tags: ['CNNs', 'Tensorflow', 'AWS-EC2', 'AWS-RDS', 'MySQL', 'RaspberryPi'],
		src: 'https://github.com/sreerammelpadi',
	},
	{
		id: 4,
		title: 'Live Tweets Emotion Analyzing Dashboard',
		description: 'This is a Web application built using Plotly - Dash and backend with sklearn model. It takes two topics and analyses and compares the emotions of each tweet then displays the Dashboard with various details.',
		image: '/emotion-tweepy.png',
		tags: ['NLTK', 'Tweepy', 'Tensorflow', 'Plotly'],
		src: 'https://github.com/sreerammelpadi/Emotional-Analysis-on-Twitter-data',
	},
	{
		id: 5,
		title: 'Auto-Colorization of B/W Images',
		description: 'Model automatically Colorizes an input Black and White Image or Grayscale image into RGB, based on the training set provided.',
		image: '/bw-to-color.png',
		tags: ['Tensorflow', 'AutoEncoder'],
		src: 'https://github.com/sreerammelpadi/auto-colorizing-bw-images',
	},
	{
		id: 6,
		title: 'Web App to Categorize Fashion Items',
		description: 'A Web app built on a light-weight model trained on Fashion MNIST dataset. The app allows user to upload any image of a fashion product and classifies the product into its category and their rank.',
		image: '/fashion-mnist.gif',
		tags: ['CNNs', 'PyTorch', 'ReactJS', 'Flask', 'Heroku'],
		src: 'https://github.com/sreerammelpadi/fashion-mnist-DL',
	},
];

export default function ProjectsSection() {
	return (
		<section
			id="projects"
			className="relative py-12 md:py-20 px-0 overflow-hidden"
			style={{
				backgroundImage: 'url(/bg-img.png)',
				backgroundRepeat: 'repeat'
			}}
		>
			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-white/60 to-purple-100/80 pointer-events-none z-0" />
			<div className="relative z-10 max-w-5xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800"
				>
					Featured Projects
				</motion.h2>
				<div className="flex flex-col gap-10">
					{projects.map((project) => (
						<div
							key={project.id}
							className="group flex flex-col md:flex-row bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
						>
							{/* Image */}
							<div className="relative w-full md:w-2/5 aspect-video md:aspect-auto h-56 md:h-auto">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
							{/* Text area */}
							<div className="flex-1 flex flex-col justify-center p-6 md:p-8">
								<h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span key={tag} className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
											{tag}
										</span>
									))}
								</div>
								<p className="text-gray-700 mb-4 text-base md:text-sm">{project.description}</p>
								<div>
									<Link
										href={project.src}
										target='_blank'
										className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow transition-all duration-300"
									>
										GitHub
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
