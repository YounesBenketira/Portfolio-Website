import { useRef, useEffect } from 'react';

interface ProjectImagesProps {
    index: number;
    color: string;
    setProjectIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ProjectImages = ({ index, color, setProjectIndex }: ProjectImagesProps) => {
    const imagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(() => setProjectIndex(index), { threshold: 0.6 });
        if (imagesRef.current) observer.observe(imagesRef.current);

        return () => observer.disconnect();
    }, []);

    return <div ref={imagesRef} style={{ backgroundColor: color, height: '100vh', width: '50%' }}></div>;
};
