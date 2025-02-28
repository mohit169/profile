import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
    };

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-purple-600 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-10 left-20 w-72 h-72 rounded-full bg-indigo-500 opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            
            {/* Header */}
            <div className="relative container mx-auto px-6 z-10">
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
                        Let's Connect
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-indigo-500 mx-auto my-5 rounded-full"></div>
                    <p className="text-gray-300 text-lg">
                        I'd love to hear from you! Whether you have a question, project idea, or just want to say hello.
                    </p>
                </div>
                
                {/* Form card with glass effect */}
                <div className="max-w-3xl mx-auto relative">
                    {/* Success message overlay */}
                    {showSuccess && (
                        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black bg-opacity-70 backdrop-blur-sm rounded-2xl">
                            <div className="text-center px-8 py-16 animate-fade-in">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-6">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon.</p>
                            </div>
                        </div>
                    )}
                    
                    {/* Form card */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform transition duration-500 hover:shadow-purple-500/20">
                        <div className="grid md:grid-cols-5">
                            {/* Left sidebar with decorative elements */}
                            <div className="md:col-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 py-10 px-8 hidden md:flex md:flex-col justify-between relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                                    <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white/20"></div>
                                    <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border-4 border-white/20"></div>
                                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border-8 border-white/10"></div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-3">Contact Information</h3>
                                    <p className="text-purple-200 mb-6">Fill out the form and I'll get back to you shortly.</p>
                                </div>
                                <div className="space-y-4 relative z-10">
                                    <div className="flex items-center text-white">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-purple-200">Email</p>
                                            <p>mohit@example.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-white">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-purple-200">Phone</p>
                                            <p>+1 (555) 000-0000</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-white">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-purple-200">Location</p>
                                            <p>San Francisco, CA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 flex space-x-4 relative z-10">
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-all">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-all">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-all">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            
                            {/* Form section */}
                            <div className="md:col-span-3 py-12 px-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <div 
                                                className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg opacity-0 transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-100' : ''}`}
                                                style={{ padding: '2px' }}
                                            ></div>
                                            <div className={`relative h-full bg-white/10 backdrop-blur-sm rounded-lg p-px overflow-hidden`}>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('name')}
                                                    onBlur={() => setFocusedField(null)}
                                                    placeholder="Your Name"
                                                    required
                                                    className="w-full h-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none rounded-lg"
                                                />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div 
                                                className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg opacity-0 transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : ''}`}
                                                style={{ padding: '2px' }}
                                            ></div>
                                            <div className={`relative h-full bg-white/10 backdrop-blur-sm rounded-lg p-px overflow-hidden`}>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField(null)}
                                                    placeholder="Your Email"
                                                    required
                                                    className="w-full h-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none rounded-lg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div 
                                            className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg opacity-0 transition-opacity duration-300 ${focusedField === 'subject' ? 'opacity-100' : ''}`}
                                            style={{ padding: '2px' }}
                                        ></div>
                                        <div className={`relative h-full bg-white/10 backdrop-blur-sm rounded-lg p-px overflow-hidden`}>
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('subject')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="Subject"
                                                required
                                                className="w-full h-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none rounded-lg"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div 
                                            className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg opacity-0 transition-opacity duration-300 ${focusedField === 'message' ? 'opacity-100' : ''}`}
                                            style={{ padding: '2px' }}
                                        ></div>
                                        <div className={`relative h-full bg-white/10 backdrop-blur-sm rounded-lg p-px overflow-hidden`}>
                                            <textarea
                                                name="message"
                                                id="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={() => setFocusedField(null)}
                                                rows="5"
                                                placeholder="Your Message"
                                                required
                                                className="w-full h-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none rounded-lg resize-none"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="relative group w-full overflow-hidden h-12 rounded-lg bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-medium flex items-center justify-center"
                                        >
                                            <span className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-20 transition-opacity"></span>
                                            {isSubmitting ? (
                                                <span className="flex items-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                <span className="flex items-center">
                                                    Send Message
                                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                    </svg>
                                                </span>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}