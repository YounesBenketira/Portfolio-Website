import { useEffect, useRef, useState } from 'react';
import { ProjectInfo } from './Components/ProjectInfo';
import { ProjectsIllustrationList } from './Components/ProjectsIllustrationList';

export type ProjectDetails = {
    index: number;
    title: string;
    description: string;
    techStack: Array<string>;
    illustrations: Array<any>;
    githubUrl?: string;
    websiteUrl?: string;
};

const PROJECTS: Array<ProjectDetails> = [
    {
        index: 0,
        title: 'Gathera',
        description: 'Social networking app that helps people meet new friends and discover places in their area',
        techStack: ['React Native Expo', 'TypeScript', 'Node.js'],
        illustrations: ['./src/assets/projects/gathera/mockup.png', './src/assets/projects/gathera/mockup.png'],
        websiteUrl: 'https://www.gathera.ca',
    },
    {
        index: 1,
        title: 'FitN',
        description: "A fitness app built with Google's Flutter framework",
        techStack: ['Flutter', 'Dart'],
        illustrations: ['./src/assets/projects/gathera/mockup.png', './src/assets/projects/gathera/mockup.png'],
        githubUrl: 'https://github.com/YounesBenketira/FitN',
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
            <ProjectsIllustrationList projects={PROJECTS} sectionRef={sectionRef} setProjectIndex={setProjectIndex} />
            {isVisible && <ProjectInfo projectDetails={PROJECTS[projectIndex]} />}
        </>
    );
};
