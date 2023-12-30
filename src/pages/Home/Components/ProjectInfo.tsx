import { useState, useEffect } from 'react';
import { ProjectDetails } from '../Projects';
import styles from './ProjectInfo.module.css';

interface ProjectInfoProps {
    projectDetails: ProjectDetails;
}

export const ProjectInfo = ({ projectDetails }: ProjectInfoProps) => {
    const [key, setKey] = useState<number>(0);

    useEffect(() => {
        setKey(key + 1);
    }, [projectDetails]);

    return (
        <div key={key} className={styles.globalWrapper}>
            <div className={styles.projectInfoWrapper}>
                <h3 className={styles.name}>{projectDetails.title}</h3>
                <p className={styles.techStack}>{projectDetails.techStack.join(' ● ')}</p>
                <p className={styles.description}>{projectDetails.description}</p>
                <div className={styles.linksRow}>
                    {projectDetails.websiteUrl && <a href={projectDetails.websiteUrl}>Website</a>}
                    {projectDetails.githubUrl && <a href={projectDetails.githubUrl}>Github</a>}
                </div>
            </div>
        </div>
    );
};
