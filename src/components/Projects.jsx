import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineExternalLink, HiOutlineCode, HiOutlineHeart } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

export default function Projects() {
    const [activeProject, setActiveProject] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    
    const projects = [
        {
            id: 1,
            title: 'Portfolio Website',
            tagline: 'My digital home on the web',
            description: 'A creative showcase of my work featuring interactive elements and smooth animations',
            tech: ['React', 'Tailwind CSS', 'Framer Motion'],
            color: '#60a5fa',
            image: 'https://via.placeholder.com/1200x800/1e3a8a/ffffff?text=Portfolio',
            github: '#',
            demo: '#',
            highlights: [
                'Responsive design with dark/light mode',
                'Interactive 3D elements',
                'Performance optimized animations'
            ]
        },
        {
            id: 2,
            title: 'HR Management System',
            tagline: 'Simplifying workplace management',
            description: 'A comprehensive platform that streamlines HR processes and improves employee experience',
            tech: ['MongoDB', 'Express', 'React', 'Node.js', 'MySQL'],
            color: '#34d399',
            image: 'https://via.placeholder.com/1200x800/065f46/ffffff?text=HRMS',
            github: '#',
            demo: '#',
            highlights: [
                'Employee dashboard with real-time updates',
                'Automated reporting system',
                'Advanced data visualization'
            ]
        },
        {
            id: 3,
            title: 'Menu Generator',
            tagline: 'AI-powered menu creation',
            description: 'Smart catering service tool that creates balanced menus based on preferences and dietary needs',
            tech: ['JavaScript', 'Firebase', 'React', 'OpenAI API'],
            color: '#f97316',
            image: 'https://via.placeholder.com/1200x800/7c2d12/ffffff?text=Menu+Gen',
            github: '#',
            demo: '#',
            highlights: [
                'AI recommendation engine',
                'Nutritional analysis',
                'Drag-and-drop interface'
            ]
        },
        {
            id: 4,
            title: 'Weather Dashboard',
            tagline: 'Weather at a glance',
            description: 'Beautiful weather visualization with forecasting, historical data, and location awareness',
            tech: ['React', 'Chart.js', 'Weather API', 'Geolocation'],
            color: '#8b5cf6',
            image: 'https://via.placeholder.com/1200x800/5b21b6/ffffff?text=Weather',
            github: '#',
            demo: '#',
            highlights: [
                'Interactive weather maps',
                'Customizable widgets',
                'Severe weather alerts'
            ]
        },
    ];

    // Auto-cycle through projects
    useEffect(() => {
        if (isHovering) return;
        
        const interval = setInterval(() => {
            setActiveProject((prev) => (prev + 1) % projects.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [isHovering, projects.length]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-blue-500 mix-blend-overlay opacity-10 blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500 mix-blend-overlay opacity-10 blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Section header */}
                <motion.div 
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div 
                        className="inline-block"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                                My Creations
                            </span>
                            <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full transform origin-left scale-x-100"></div>
                        </h2>
                    </motion.div>
                    <p className="text-gray-400 max-w-xl mx-auto mt-4 text-lg">
                        Projects I've built with love, creativity, and a bit of coding magic ✨
                    </p>
                </motion.div>
                
                {/* Featured project showcase */}
                <div className="mb-20">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        {/* Project image */}
                        <motion.div 
                            className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl group"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            onHoverStart={() => setIsHovering(true)}
                            onHoverEnd={() => setIsHovering(false)}
                            key={projects[activeProject].id}
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-transparent opacity-60 z-10"></div>
                            <motion.img
                                src={projects[activeProject].image}
                                alt={projects[activeProject].title}
                                className="w-full h-full object-cover aspect-video transition-transform duration-700"
                                initial={{ scale: 1 }}
                                animate={{ scale: 1.05 }}
                                transition={{ 
                                    duration: 8, 
                                    repeat: Infinity, 
                                    repeatType: "reverse" 
                                }}
                            />
                            
                            {/* Overlay design elements */}
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                <motion.div 
                                    className="bg-gray-900/80 backdrop-blur-md rounded-xl p-6 border border-gray-700/50"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="flex items-center mb-3">
                                        <div 
                                            className="w-3 h-3 rounded-full mr-3"
                                            style={{ backgroundColor: projects[activeProject].color }}
                                        ></div>
                                        <h4 className="text-sm uppercase tracking-wider font-medium text-gray-400">
                                            Featured Project
                                        </h4>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1 text-white">
                                        {projects[activeProject].title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 italic">
                                        {projects[activeProject].tagline}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                        
                        {/* Project details */}
                        <motion.div 
                            className="lg:col-span-5"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            key={`details-${projects[activeProject].id}`}
                        >
                            <motion.div 
                                className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-xl"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.p 
                                    className="text-gray-300 mb-6 text-lg leading-relaxed"
                                    variants={itemVariants}
                                >
                                    {projects[activeProject].description}
                                </motion.p>
                                
                                <motion.div variants={itemVariants} className="mb-6">
                                    <h4 className="text-white font-semibold mb-3 flex items-center">
                                        <HiOutlineHeart className="mr-2 text-pink-500" /> 
                                        Key Features
                                    </h4>
                                    <ul className="space-y-2">
                                        {projects[activeProject].highlights.map((highlight, index) => (
                                            <motion.li 
                                                key={index} 
                                                className="flex items-start"
                                                variants={itemVariants}
                                            >
                                                <span 
                                                    className="inline-block w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0"
                                                    style={{ backgroundColor: projects[activeProject].color }}
                                                ></span>
                                                <span className="text-gray-300">{highlight}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                                
                                <motion.div variants={itemVariants} className="mb-6">
                                    <h4 className="text-white font-semibold mb-3 flex items-center">
                                        <HiOutlineCode className="mr-2 text-blue-400" /> 
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {projects[activeProject].tech.map((tech) => (
                                            <motion.span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-700/60 rounded-full text-sm text-gray-300"
                                                whileHover={{ scale: 1.05, backgroundColor: projects[activeProject].color, color: '#fff' }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    className="flex gap-4"
                                    variants={itemVariants}
                                >
                                    <motion.a
                                        href={projects[activeProject].github}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/60 text-white hover:bg-gray-600 transition-colors duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FiGithub /> 
                                        Code
                                    </motion.a>
                                    
                                    <motion.a
                                        href={projects[activeProject].demo}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg"
                                        style={{ 
                                            background: `linear-gradient(to right, ${projects[activeProject].color}, ${projects[activeProject].color}cc)` 
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <HiOutlineExternalLink /> 
                                        Live Demo
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                
                {/* Project selector */}
                <div className="flex justify-center">
                    <div className="inline-flex bg-gray-800/30 backdrop-blur-sm p-2 rounded-xl gap-2">
                        {projects.map((project, index) => (
                            <motion.button
                                key={project.id}
                                onClick={() => setActiveProject(index)}
                                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                                    activeProject === index 
                                        ? 'text-white' 
                                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeProject === index && (
                                    <motion.div 
                                        className="absolute inset-0 rounded-lg"
                                        style={{ backgroundColor: project.color }}
                                        layoutId="activeProjectIndicator"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{project.title}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}