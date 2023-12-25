import { Navbar } from '../Components/Navbar';

interface HomeLayoutProps {
    children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};
