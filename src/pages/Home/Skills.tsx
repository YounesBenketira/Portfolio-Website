import styles from './Skills.module.css';

type SkillData = {
    category: string;
    skills: Array<string>;
};

const SKILLS: Array<SkillData> = [
    {
        category: 'Front-End',
        skills: ['HTML | CSS | JS', 'React', 'React Native Expo', 'Next.js', 'Vite.js'],
    },
    {
        category: 'Back-End',
        skills: ['Node.js', 'Express.js', 'PHP', 'Java'],
    },
    {
        category: 'Tools',
        skills: ['Postman', 'MongoDB Compass', 'MongoDB Atlas', 'Git', 'AWS'],
    },
];

export const Skills = () => {
    return (
        <div className={styles.globalWrapper}>
            {SKILLS.map((skillData: SkillData) => (
                <div className={styles.skillList}>
                    <h3>{skillData.category}</h3>
                    {skillData.skills.map((s: string) => (
                        <li>{s}</li>
                    ))}
                </div>
            ))}
        </div>
    );
};
