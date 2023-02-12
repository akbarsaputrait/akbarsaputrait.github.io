import Header from '@components/layout/header/header.component';

import './public.layout.scss';

interface IPublicLayoutProps {
  component: React.ReactNode;
}

const PublicLayout: React.FC<IPublicLayoutProps> = ({ component }) => {
  return (
    <>
      <div className='container mx-auto'>
        <Header />
        {component}
      </div>
    </>
  );
};

export default PublicLayout;
