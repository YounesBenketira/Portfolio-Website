import { About } from './pages/Home/About';
import { Contact } from './pages/Home/Contact';
import { Hero } from './pages/Home/Hero';
import { Skills } from './pages/Home/Skills';
import { HomeLayout } from './shared/Layouts/HomeLayout';
import styles from './App.module.css';
import { Projects } from './pages/Home/Projects';

function App() {
    return (
        <HomeLayout>
            <Hero />
            <div className={styles.childrenWrapper}>
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </HomeLayout>
    );
}

export default App;
