import { useEffect, useRef, useState } from 'react';
import { ProjectInfo } from './Components/ProjectInfo';
import { ProjectsIllustrationList } from './Components/ProjectsIllustrationList';

export type ProjectDetails = {
    title: string;
    description: string;
    techStack: Array<string>;
    illustrations: [string, string, string] | [string, string, string, string];
    githubUrl?: string;
    websiteUrl?: string;
    googlePlayUrl?: string;
    appStoreUrl?: string;
};

/**
 * Data for each project to be displayed
 * @illustrations 3 or 4 images
 */
const PROJECTS: Array<ProjectDetails> = [
    {
        title: 'Gathera',
        description: 'Social networking app that helps people meet new friends and discover places in their area',
        techStack: ['React Native Expo', 'TypeScript', 'Node.js'],
        illustrations: [
            './src/assets/projects/gathera/placeList.png',
            './src/assets/projects/gathera/trending.png',
            './src/assets/projects/gathera/gatheringList.png',
            './src/assets/projects/gathera/messages.png',
        ],
        websiteUrl: 'https://www.gathera.ca',
    },
    {
        title: 'FitN',
        description: 'Mobile application that allows users to log their workouts and provides them with many health-related tools',
        techStack: ['Flutter', 'Dart'],
        illustrations: [
            './src/assets/projects/fitn/workouts.png',
            './src/assets/projects/fitn/information.png',
            './src/assets/projects/fitn/calendar.png',
        ],
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
