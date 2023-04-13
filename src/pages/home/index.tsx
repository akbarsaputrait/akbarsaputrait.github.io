import HeaderInfo from '@/components/ui/header-info/header-info.component';
import HeroName from '@/components/ui/hero-name/hero-name.component';
import './home.page.scss';

const Home: React.FC = () => {
  return (
    <>
      <HeaderInfo />
      <HeroName />

      <div className='flex flex-col my-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32'>
          <div></div>
          <div className='w-full h-full m-auto text-right'>
            <p className='text-4xl font-serif'>
              {'"A website without visitors is like a ship lost in the horizon."'}
            </p>
            <p className='mt-3 opacity-50'>- Dr. Christopher Dayagdag</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col mb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32'>
          <div className='w-full h-full m-auto'>
            <div className='flex items-center gap-3'>
              <p className='text-2xl uppercase font-bold font-serif mb-2 tracking-wide'>About me</p>
              <div className='w-full h-[1px] bg-white flex-1'></div>
            </div>
            <p className='text-justify leading-relaxed'>
              {
                "Hi, I'm Yudha. I'm a frontend web developer who loves to create beautiful and functional websites. When I'm not coding, I enjoy playing video games and like to explore new technologies also read about programming best practices."
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
