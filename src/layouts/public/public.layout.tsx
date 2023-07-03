import Header from '@components/layout/header/header.component';

import Footer from '@/components/layout/footer/footer.component';
import './public.layout.scss';

interface IPublicLayoutProps {
  component: React.ReactNode;
}

const PublicLayout: React.FC<IPublicLayoutProps> = ({ component }) => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        {component}
        <Footer />
      </div>
    </>
  );
};

export default PublicLayout;
