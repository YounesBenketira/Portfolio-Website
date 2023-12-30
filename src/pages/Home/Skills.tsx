import styles from './Skills.module.css';

type SkillData = {
    category: string;
    skills: Array<string>;
};

const SKILLS: Array<SkillData> = [
    {
        category: 'Front-End',
        skills: ['React', 'React Native Expo', 'Next.js', 'Vite.js', 'TypeScript', 'Tailwind'],
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
            <h1 className={styles.backgroundText}>Skills</h1>
            {SKILLS.map((skillData: SkillData) => (
                <div key={skillData.category} className={styles.skillList}>
                    <h3>{skillData.category}</h3>
                    {skillData.skills.map((s: string) => (
                        <li key={s}>{s}</li>
                    ))}
                </div>
            ))}
        </div>
    );
};
