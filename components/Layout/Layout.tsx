import Navbar from './Navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <header>
        <h1>Mini Games</h1><Navbar />
      </header>
      {children}
    </>
  );
}
