import { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';
import { ProjectImages } from './Components/ProjectImages';

type ProjectData = {
    index: number;
    title: string;
    description: string;
    github: string | null;
    demo: string | null;
    color: string;
};

const PROJECTS: Array<ProjectData> = [
    {
        index: 0,
        title: 'Gathera',
        description: 'A social networking app built with React Native Expo, TypeScript, and Node.js',
        github: null,
        demo: 'https://www.gathera.ca', // @TODO: Add app store links when deployed
        color: 'blue',
    },
    {
        index: 1,
        title: 'FitN',
        description: "A fitness app built with Google's Flutter framework",
        github: 'https://github.com/YounesBenketira/FitN',
        demo: null,
        color: 'yellow',
    },
    {
        index: 2,
        title: '2',
        description: "A fitness app built with Google's Flutter framework",
        github: 'https://github.com/YounesBenketira/FitN',
        demo: null,
        color: 'pink',
    },
    {
        index: 3,
        title: '3',
        description: "A fitness app built with Google's Flutter framework",
        github: 'https://github.com/YounesBenketira/FitN',
        demo: null,
        color: 'green',
    },
    {
        index: 4,
        title: '4',
        description: "A fitness app built with Google's Flutter framework",
        github: 'https://github.com/YounesBenketira/FitN',
        demo: null,
        color: 'red',
    },
    {
        index: 5,
        title: '5',
        description: "A fitness app built with Google's Flutter framework",
        github: 'https://github.com/YounesBenketira/FitN',
        demo: null,
        color: 'blue',
    },
];

export function useIsVisible(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const threshold = (1 / PROJECTS.length) * 0.25;
        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.intersectionRatio > threshold), { threshold });

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}

export const Projects = () => {
    const [projectIndex, setProjectIndex] = useState<number>(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(sectionRef);

    return (
        <>
            <section ref={sectionRef} className={styles.globalWrapper}>
                {PROJECTS.map((projectData: ProjectData) => (
                    <ProjectImages key={projectData.index} index={projectData.index} color={projectData.color} setProjectIndex={setProjectIndex} />
                ))}
            </section>
            {isVisible && (
                <div className={styles.projectInfo}>
                    <h3>{PROJECTS[projectIndex].title}</h3>
                    <p>{PROJECTS[projectIndex].description}</p>
                    {PROJECTS[projectIndex].github && <a href={PROJECTS[projectIndex].github ?? '/'}>GitHub</a>}
                    {PROJECTS[projectIndex].demo && <a href={PROJECTS[projectIndex].demo ?? '/'}>Demo</a>}
                </div>
            )}
        </>
    );
};
