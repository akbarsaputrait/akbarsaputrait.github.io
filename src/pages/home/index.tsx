import Quote from '@/components/contents/quote.component';
import HeaderInfo from '@/components/ui/header-info/header-info.component';
import HeroName from '@/components/ui/hero-name/hero-name.component';

import BonBonLogo from '/bonbon.svg';
import KeeppackLogo from '/keeppack.png';
import KelolaBayarLogo from '/kelola-bayar.svg';
import KelolaGudangLogo from '/kelola-gudang.svg';
import RostyLogo from '/rosty.png';

import CardProject from '@/components/ui/card-project/card-project.component';
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <CardProject
            title="KeepPack"
            industry="PT. Gudang Anak Bangsa, Jakarta"
            logo={KeeppackLogo}
            imageClass="w-16"
            description={
              <>
                {`I'm`} working remotely on a first version Client and Staff Portal app of Order
                Fulfillment Services using <strong>Nuxt.js</strong> and <strong>ElementUl</strong>.
              </>
            }
          />
          <CardProject
            title="BonBon"
            industry="BonBon Technologies"
            logo={BonBonLogo}
            description={
              <>
                Bonbon POS is the most advanced, feature-rich POS system on the market. I was
                working remotely as Front-end Web Developer at BonBon Back-Office Portal using
                <strong> Angular 10</strong> and <strong>Angular Bootstrap</strong>.
              </>
            }
          />
          <CardProject
            title="Rosty"
            industry="Rosty.com.au Pty Ltd"
            logo={RostyLogo}
            imageClass="w-28"
            description={
              <>
                Rosty is a Workforce Management platform where the marketplace meet automation. I
                was working remotely as Front-end Web Developer for Rosty Web App and Admin Portal
                using <strong>Angular 11</strong>, <strong>Angular Material</strong> and{' '}
                <strong>TailwindCSS</strong>.
              </>
            }
          />
          <CardProject
            title="Kelola Gudang"
            industry="Kelola Tech"
            logo={KelolaGudangLogo}
            imageClass="w-32"
            description={
              <>
                Kelola Gudang is a second version Warehouse Management System of KeepPack. I was
                working as a Front-end Web Developer using <strong>Angular 11</strong>,{' '}
                <strong>Angular Material</strong> and <strong>TailwindCSS</strong>. I also implement
                a<strong> websocket</strong> using Centrifuge Self-hosted.
              </>
            }
          />
          <CardProject
            title="Kelola Bayar"
            industry="Kelola Tech"
            logo={KelolaBayarLogo}
            imageClass="w-28"
            description={
              <>
                Kelola Bayar is a payment gateway for Kelola App. I was create a library (like
                midtrans snap.js) for Kelola Bayar called <i>Quix.js</i> using{' '}
                <strong>React.js</strong> for the widget and <strong>Vite + Typescript</strong> for
                the library.
              </>
            }
          />
        </div>
      </div>

      {/* <AboutMe /> */}
    </>
  );
};

export default Home;
