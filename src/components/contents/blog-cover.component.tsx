import { time } from '@/library/helpers/time.helper';
import { NavLink } from 'react-router-dom';

interface IBlogCoverProps {
  cover: string;
  title: string;
  date?: string | null;
  slug: string;
}

const BlogCover: React.FC<IBlogCoverProps> = ({ cover, title, date, slug }) => {
  return (
    <NavLink to={slug} replace={true} className="block overflow-hidden">
      <img
        src={cover}
        alt=""
        className="object-cover w-[300px] h-[350px] sm:h-[450px]"
        loading="lazy"
      />

      <div className="relative pt-3 text-zinc-100">
        <p className="text-zinc-100">{title}</p>

        <p className="mt-1.5 text-sm tracking-wide text-zinc-400">
          {time().from(time(date || time()))}
        </p>
      </div>
    </NavLink>
  );
};

export default BlogCover;
