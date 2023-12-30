import { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';
import { ProjectImages } from './Components/ProjectImages';

type ProjectData = {
    index: number;
    title: string;
    description: string;
    illustrations: Array<any>;
};

const PROJECTS: Array<ProjectData> = [
    {
        index: 0,
        title: 'Gathera',
        description: 'A social networking app built with React Native Expo, TypeScript, and Node.js',
        illustrations: ['./src/assets/projects/gathera/mockup.png', './src/assets/projects/gathera/mockup.png'],
    },
    {
        index: 1,
        title: 'FitN',
        description: "A fitness app built with Google's Flutter framework",
        illustrations: ['./src/assets/projects/gathera/mockup.png', './src/assets/projects/gathera/mockup.png'],
    },
];

function useIsVisible(ref: React.RefObject<HTMLDivElement>): boolean {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const INTERSECTION_RATIO = 0.4;
        const threshold = (1 / PROJECTS.length) * INTERSECTION_RATIO;
        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.intersectionRatio > threshold), { threshold });

        if (ref && ref.current) observer.observe(ref.current);

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
                    <ProjectImages
                        key={projectData.index}
                        index={projectData.index}
                        images={projectData.illustrations}
                        setProjectIndex={setProjectIndex}
                    />
                ))}
            </section>
            {isVisible && (
                <div className={styles.projectInfo}>
                    <h3>{PROJECTS[projectIndex].title}</h3>
                    <p>{PROJECTS[projectIndex].description}</p>
                </div>
            )}
        </>
    );
};
