import { useRef, useEffect } from 'react';
import styles from './ProjectImages.module.css';

interface ProjectImagesProps {
    index: number;
    setProjectIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ProjectImages = ({ index, setProjectIndex }: ProjectImagesProps) => {
    const imagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                if (entries[0].isIntersecting) setProjectIndex(index);
            },
            { threshold: 0.6 }
        );
        if (imagesRef.current) observer.observe(imagesRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={imagesRef} className={styles.globalWrapper}>
            <div className={styles.mockupDummy} />

            <div className={styles.mockupDummy} />
        </div>
    );
};
