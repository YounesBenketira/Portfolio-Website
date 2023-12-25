import { useState } from 'react';
import styles from './Projects.module.css';

type ProjectData = {
    title: string;
    description: string;
    github: string | null;
    demo: string | null;
};

const PROJECTS: Array<ProjectData> = [
    {
        title: 'Gathera',
        description: 'A social networking app built with React Native Expo, TypeScript, and Node.js',
        github: null,
        demo: 'https://www.gathera.ca', // @TODO: Add app store links when deployed
    },
    {
        title: 'FitN',
        description: "A fitness app built with Google's Flutter framework",
        github: 'https://github.com/YounesBenketira/FitN',
        demo: null,
    },
];

export const Projects = () => {
    const [projectIndex, setProjectIndex] = useState<number>(0);

    return (
        <>
            <div className={styles.globalWrapper}>
                {PROJECTS.map((projectData: ProjectData) => (
                    <div className={styles.projectImages} />
                ))}
            </div>
            <div className={styles.projectInfo}>
                <h3>{PROJECTS[projectIndex].title}</h3>
                <p>{PROJECTS[projectIndex].description}</p>
                {PROJECTS[projectIndex].github && <a href={PROJECTS[projectIndex].github ?? '/'}>GitHub</a>}
                {PROJECTS[projectIndex].demo && <a href={PROJECTS[projectIndex].demo ?? '/'}>Demo</a>}
            </div>
        </>
    );
};
