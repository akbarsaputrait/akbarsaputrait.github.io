import Header from '@components/layout/header/header.component';

import Footer from '@/components/layout/footer/footer.component';
import './public.layout.scss';

interface IPublicLayoutProps {
  component: React.ReactNode;
}

const PublicLayout: React.FC<IPublicLayoutProps> = ({ component }) => {
  return (
    <>
      <div className="mx-auto sm:max-w-screen-2xl lg:max-w-[1280px] py-8 sm:py-8">
        <Header />
        {component}
        <Footer />
      </div>
    </>
  );
};

export default PublicLayout;
