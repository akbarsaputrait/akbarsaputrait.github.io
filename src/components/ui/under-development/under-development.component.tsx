import { IoWarningOutline } from 'react-icons/io5';
import './under-development.component.scss';

const UnderDevelopment: React.FC = () => {
  return (
    <div className='w-full h-full flex m-auto flex-col text-center items-center'>
      <IoWarningOutline size={100} />
      <p className='text-4xl mt-10'>This page is under development</p>
    </div>
  );
};

export default UnderDevelopment;
