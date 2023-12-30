import { useRef, useEffect } from 'react';
import styles from './ProjectIllustrations.module.css';
import { Parallax } from 'react-scroll-parallax';

interface ProjectIllustrationsProps {
    index: number;
    images: Array<any>;
    setProjectIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ILLUSTRATION_STYLES: {
    speed: number;
    style: {
        translate: number;
    };
}[] = [
    {
        speed: 10,
        style: {
            translate: -40,
        },
    },
    {
        speed: 60,
        style: {
            translate: -100,
        },
    },
    {
        speed: 90,
        style: {
            translate: 20,
        },
    },
    {
        speed: 40,
        style: {
            translate: -60,
        },
    },
];

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
            {images.map((image: string, index: number) => (
                <Parallax
                    key={index}
                    speed={ILLUSTRATION_STYLES[index].speed}
                    style={ILLUSTRATION_STYLES[index].style}
                    className={styles.mockupWrapper}
                >
                    <img src={image} alt='mockup' className={styles.mockupImage} />
                </Parallax>
            ))}
        </div>
    );
};
