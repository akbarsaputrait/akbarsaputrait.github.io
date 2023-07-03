import Quote from '@/components/contents/quote.component';
import HeaderInfo from '@/components/ui/header-info/header-info.component';
import HeroName from '@/components/ui/hero-name/hero-name.component';

import Projects from '@/components/contents/projects.component';
import './home.page.scss';

const Home: React.FC = () => {
  return (
    <>
      <HeaderInfo />
      <HeroName />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 my-16 items-center">
        <div></div>

        <Quote />
      </div>

      <div className="my-16">
        <div className="flex items-center gap-3 mb-8">
          <p className="text-2xl uppercase font-bold font-serif mb-2 tracking-wide">Projects</p>
          <div className="w-full h-[1px] bg-white flex-1"></div>
        </div>

        <Projects />
      </div>

      {/* <AboutMe /> */}
    </>
  );
};

export default Home;
