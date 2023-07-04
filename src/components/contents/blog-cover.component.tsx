import { time } from '@/library/helpers/time.helper';

interface IBlogCoverProps {
  cover: string;
  title: string;
  date?: string | null;
  slug?: string;
}

const BlogCover: React.FC<IBlogCoverProps> = ({ cover, title, date, slug }) => {
  return (
    <a href={slug} className="block overflow-hidden">
      <div className="relative w-[300px] h-[350px] sm:h-[450px]">
        <img
          src={cover}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />
      </div>

      <div className="relative pt-3 text-zinc-100">
        <p className="text-zinc-100">{title}</p>

        <p className="mt-1.5 text-sm tracking-wide text-zinc-400">
          {time().from(time(date || time()))}
        </p>
      </div>
    </a>
  );
};

export default BlogCover;
