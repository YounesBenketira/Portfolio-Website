import { ProjectDetails } from '../Projects';
import { ProjectIllustrations } from './ProjectIllustrations';
import styles from './ProjectsIllustrationList.module.css';

interface ProjectsIllustrationListProps {
    projects: Array<ProjectDetails>;
    sectionRef: React.RefObject<HTMLDivElement>;
    setProjectIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ProjectsIllustrationList = ({ projects, setProjectIndex, sectionRef }: ProjectsIllustrationListProps) => {
    return (
        <section ref={sectionRef} className={styles.globalWrapper}>
            {projects.map((projectData: ProjectDetails, index: number) => (
                <ProjectIllustrations key={index} index={index} images={projectData.illustrations} setProjectIndex={setProjectIndex} />
            ))}
        </section>
    );
};
