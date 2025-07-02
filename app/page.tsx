'use client';

import HeroSection from './components/HeroSection';
import WorkExperience from './components/WorkExperience';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import FloatingHeader from './components/FloatingHeader';
import WhatIDoSection from './components/WhatIDoSection';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-white text-black">
			<FloatingHeader />
			<HeroSection />
			<WhatIDoSection />
			<ProjectsSection />
			<EducationSection />
			<WorkExperience />
			<SkillsSection />
			<ContactSection />
		</div>
	);
}
