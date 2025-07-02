import React from 'react';
import dynamic from 'next/dynamic';
import { FaTimes } from 'react-icons/fa';

// If you want type safety, consider creating a custom .d.ts file for 'react-console-emulator'.
const ReactConsole = dynamic(() => import('react-console-emulator'), { ssr: false }) as unknown as React.ComponentType<Record<string, unknown>>; // TODO: Add proper types for react-console-emulator

const files: { [key: string]: string } = {
  'resume.txt': 'This is a placeholder for the resume. You can add your real resume content here.',
  'about.txt': 'I am a passionate developer specializing in AI/ML and backend engineering. I can adapt to any project very quickly and come up with most efficient ideas and solutions. That combined with my grit and curiosity makes me a good software engineer. Contact me for a quick chat!'
};

const commands = {
  ls: {
    description: 'List files',
    usage: 'ls',
    fn: () => Object.keys(files).join('  ')
  },
  cat: {
    description: 'View file contents',
    usage: 'cat <filename>',
    fn: (file: string) => {
      if (!file) return 'Usage: cat <filename>';
      if (files[file]) return files[file];
      return `cat: ${file}: No such file`;
    }
  },
  whoami: {
    description: 'Show your name',
    usage: 'whoami',
    fn: () => 'Sreeram Melpadi'
  }
};

export default function TerminalEmulator({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed z-[100] top-0 left-0 w-full h-full flex items-center justify-center bg-black/40">
      <div className="relative bg-gray-900 rounded-xl shadow-2xl w-full max-w-2xl mx-4 p-0 overflow-hidden border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-gray-300 hover:text-red-400 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
          aria-label="Close Terminal"
        >
          <FaTimes className="w-5 h-5" />
        </button>
        <div className="pt-10 pb-4 px-4">
          <ReactConsole
            commands={commands}
            welcomeMessage={'Welcome to the my Portfolio Terminal! Type ls, cat, or whoami.'}
            promptLabel={'sreeram@portfolio:~$ '}
            style={{ background: 'transparent', color: '#fff', fontSize: '1rem', minHeight: 300, maxHeight: 300 }}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
} 