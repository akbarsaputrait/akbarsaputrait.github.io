import HeaderInfo from '@/components/header-info/header-info.component';
import HeroName from '@/components/hero-name/hero-name.component';
import './home.page.scss';

const Home: React.FC = () => {
  return (
    <>
      <HeaderInfo />
      <HeroName />
    </>
  );
};

export default Home;
