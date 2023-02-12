import HeaderInfo from '@/components/header-info/header-info.component';
import HeroName from '@/components/hero-name/hero-name.component';
import './home.page.scss';

const Home: React.FC = () => {
  return (
    <>
      <HeaderInfo />
      <HeroName />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>01</div>

        <div>09</div>
      </div>
    </>
  );
};

export default Home;
