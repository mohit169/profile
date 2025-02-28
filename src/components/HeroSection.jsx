import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import avatar from '../assets/avatar.png';

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        // Trigger animations after component mounts
        setIsVisible(true);
    }, []);

    return (
        <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-950 to-black text-white overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 rounded-full bg-blue-700/10 blur-3xl -top-20 -left-20"></div>
                <div className="absolute w-96 h-96 rounded-full bg-indigo-700/10 blur-3xl -bottom-20 -right-20"></div>
            </div>
            
            {/* Content container with responsive padding */}
            <div className={`relative z-10 flex flex-col items-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {/* Avatar with improved animation */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 blur opacity-70 animate-pulse"></div>
                    <img 
                        src={avatar} 
                        alt="Mohit Bhatt" 
                        className="relative w-32 h-32 rounded-full border-2 border-blue-300 shadow-lg object-cover transition-transform hover:scale-105"
                    />
                </div>
                
                {/* Main heading with animated reveal */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
                    Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Mohit Bhatt</span>
                </h1>
                
                {/* Typed text with improved styling */}
                <div className="h-8 flex items-center justify-center">
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            2000,
                            'React & Node Enthusiast',
                            2000,
                            'UI/UX Designer',
                            2000,
                            'Tech Explorer',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-xl md:text-2xl text-gray-300 font-light"
                    />
                </div>
                
                {/* Call to action buttons */}
                <div className="mt-10 flex space-x-4">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1">
                        View My Work
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-blue-400 hover:bg-blue-900/30 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1">
                        Contact Me
                    </button>
                </div>
                
                {/* Social links */}
                <div className="mt-8 flex space-x-5">
                    {['github', 'linkedin', 'twitter', 'instagram'].map(platform => (
                        <a 
                            key={platform} 
                            href={`#${platform}`}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <span className="sr-only">{platform}</span>
                            <div className="w-6 h-6 bg-current rounded-full"></div>
                        </a>
                    ))}
                </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent animate-pulse"></div>
            </div>
        </section>
    );
}