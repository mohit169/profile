import React, { useState, useEffect } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, 
  FaPhp, FaPython, FaJava, FaGitAlt, FaDocker, FaFigma
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiFirebase } from 'react-icons/si';

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [animatedItems, setAnimatedItems] = useState([]);
    
    // Tech stack with metadata
    const technologies = {
        frontend: [
            { name: 'HTML', icon: FaHtml5, color: '#E34F26', level: 95, category: 'frontend' },
            { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', level: 90, category: 'frontend' },
            { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 92, category: 'frontend' },
            { name: 'React', icon: FaReact, color: '#61DAFB', level: 88, category: 'frontend' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC', level: 85, category: 'frontend' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 78, category: 'frontend' },
        ],
        backend: [
            { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 82, category: 'backend' },
            { name: 'PHP', icon: FaPhp, color: '#777BB4', level: 75, category: 'backend' },
            { name: 'Python', icon: FaPython, color: '#3776AB', level: 80, category: 'backend' },
            { name: 'Java', icon: FaJava, color: '#007396', level: 70, category: 'backend' },
        ],
        database: [
            { name: 'MySQL', icon: FaDatabase, color: '#4479A1', level: 85, category: 'database' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 78, category: 'database' },
            { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: 80, category: 'database' },
        ],
        tools: [
            { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 90, category: 'tools' },
            { name: 'Docker', icon: FaDocker, color: '#2496ED', level: 65, category: 'tools' },
            { name: 'Figma', icon: FaFigma, color: '#F24E1E', level: 75, category: 'tools' },
        ]
    };
    
    // Categories for filtering
    const categories = [
        { id: 'all', name: 'All Technologies' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'database', name: 'Database' },
        { id: 'tools', name: 'Tools & DevOps' },
    ];
    
    // Flatten technologies for rendering based on active category
    const filteredTechs = Object.values(technologies)
        .flat()
        .filter(tech => activeCategory === 'all' || tech.category === activeCategory);
    
    // Animation effect when switching categories
    useEffect(() => {
        setAnimatedItems([]);
        const timer = setTimeout(() => {
            const newAnimatedItems = [];
            const interval = setInterval(() => {
                if (newAnimatedItems.length < filteredTechs.length) {
                    newAnimatedItems.push(filteredTechs[newAnimatedItems.length].name);
                    setAnimatedItems([...newAnimatedItems]);
                } else {
                    clearInterval(interval);
                }
            }, 80);
            return () => clearInterval(interval);
        }, 100);
        return () => clearTimeout(timer);
    }, [activeCategory]);

    return (
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section header with animated underline */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Technical Expertise</span>
                        <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A showcase of my technical skills and proficiency levels across various technologies
                    </p>
                </div>
                
                {/* Category filter tabs */}
                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                
                {/* Technology cards grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {filteredTechs.map((tech, index) => (
                        <div
                            key={tech.name}
                            className={`group relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col items-center p-6 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 border border-gray-700 hover:border-gray-600 ${
                                animatedItems.includes(tech.name) ? 'animate-fadeIn' : 'opacity-0'
                            }`}
                            style={{ 
                                animationDelay: `${index * 0.1}s`,
                                animationFillMode: 'forwards'
                            }}
                        >
                            {/* Glowing background effect on hover */}
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl" 
                                style={{ background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)` }}
                            ></div>
                            
                            {/* Icon */}
                            <div className="relative mb-4 text-5xl" style={{ color: tech.color }}>
                                <tech.icon />
                                <div className="absolute inset-0 blur-xl opacity-40" style={{ color: tech.color }}><tech.icon /></div>
                            </div>
                            
                            {/* Name */}
                            <h3 className="text-lg font-bold mb-2 text-center text-white">{tech.name}</h3>
                            
                            {/* Skill level bar */}
                            <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                                <div 
                                    className="h-full group-hover:animate-pulse duration-1000"
                                    style={{ 
                                        width: `${tech.level}%`,
                                        background: `linear-gradient(to right, ${tech.color}aa, ${tech.color})` 
                                    }}
                                ></div>
                            </div>
                            
                            {/* Skill level percentage - appears on hover */}
                            <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">{tech.level}%</span>
                        </div>
                    ))}
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
            </div>
            
            {/* CSS animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
}