import './hero-name.component.scss';

import NameLight from '/name-light.svg';
import ProfilePhoto from '/profile.jpeg';

const HeroName: React.FC = () => {
  return (
    <div className='hero-name-container mt-6'>
      <img src={NameLight} alt='' className='hero-name-item' />

      <div
        className='hero-profile'
        style={{
          backgroundImage: `url(${ProfilePhoto})`,
        }}
      ></div>
    </div>
  );
};

export default HeroName;
