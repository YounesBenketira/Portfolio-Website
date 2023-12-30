import { useRef, useEffect } from 'react';
import styles from './ProjectIllustrations.module.css';
import { Parallax } from 'react-scroll-parallax';

interface ProjectIllustrationsProps {
    index: number;
    images: Array<any>;
    setProjectIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ProjectIllustrations = ({ index, images, setProjectIndex }: ProjectIllustrationsProps) => {
    const imagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                if (entries[0].isIntersecting) setProjectIndex(index);
            },
            { threshold: 0.25 }
        );
        if (imagesRef.current) observer.observe(imagesRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={imagesRef} className={styles.globalWrapper}>
            <Parallax speed={10} style={{ translate: -40 }} className={styles.mockupWrapper}>
                <img src={images[0]} alt='mockup' className={styles.mockupImage} />
            </Parallax>
            <Parallax speed={60} style={{ translate: -100 }} className={styles.mockupWrapper}>
                <img src={images[0]} alt='mockup' className={styles.mockupImage} />
            </Parallax>
            <Parallax speed={90} style={{ translate: 20 }} className={styles.mockupWrapper}>
                <img src={images[0]} alt='mockup' className={styles.mockupImage} />
            </Parallax>
            <Parallax speed={40} style={{ translate: -60 }} className={styles.mockupWrapper}>
                <img src={images[0]} alt='mockup' className={styles.mockupImage} />
            </Parallax>
        </div>
    );
};
