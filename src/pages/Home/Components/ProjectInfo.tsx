import { ProjectDetails } from '../Projects';
import styles from './ProjectInfo.module.css';

interface ProjectInfoProps {
    projectDetails: ProjectDetails;
}

export const ProjectInfo = ({ projectDetails }: ProjectInfoProps) => {
    return (
        <div className={styles.globalWrapper}>
            <div className={styles.projectInfoWrapper}>
                <h3 className={styles.name}>{projectDetails.title}</h3>
                <p className={styles.description}>{projectDetails.description}</p>
                <p className={styles.techStack}>{projectDetails.techStack.join(' • ')}</p>
                <div className={styles.linksRow}>
                    {projectDetails.websiteUrl && <a href={projectDetails.websiteUrl}>Website</a>}
                    {projectDetails.githubUrl && <a href={projectDetails.githubUrl}>Github</a>}
                </div>
            </div>
        </div>
    );
};
