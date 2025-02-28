import HeroSection from './components/HeroSection';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
    return (
        <div className="font-sans">
            <HeroSection />
            <TechStack />
            <Projects />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;
