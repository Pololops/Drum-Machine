import {Navbar} from '../';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <header>
        <h1>Drum Machine</h1>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
