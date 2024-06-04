import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/App.css';
import { Header } from '@/components/Header.tsx';
import { About } from '@/components/About.tsx';
import { Service } from '@/components/Service.tsx';
import { Skill } from '@/components/Skill.tsx';
import { Experience } from '@/components/Experience.tsx';
import { Contact } from '@/components/Contact.tsx';
import { Footer } from '@/components/Footer.tsx';
import { HireBanner } from '@/components/HireBanner';
HireBanner

function App() {
    document.title = 'Portfolio'

    return (
        <>
            <ToastContainer />
            <Header />
            <About />
            <Experience />
            <Service />
            <Skill />
            <HireBanner />
            <Contact />
            <Footer />
        </>
    )
}

export default App;