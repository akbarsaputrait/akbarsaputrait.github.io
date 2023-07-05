/* eslint-disable camelcase */
import BlogCover from '@/components/contents/blog-cover.component';
import MetaTag from '@/components/providers/meta.component';
import { ISbStoryData, getStoryblokApi } from '@storyblok/react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const Blog: React.FC = () => {
  const [data, setData] = useState<ISbStoryData[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: 'published',
        starts_with: 'blog/',
        sort_by: 'created_at:desc',
      });
      setData(data.stories);
      setLoading(false);
    };

    fetch();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  if (data) {
    return (
      <>
        <MetaTag title={'Blog'} description={'List Articles'} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <BlogCover
              key={item.id}
              cover={item.content.cover.filename}
              title={item.name}
              date={item.first_published_at}
              slug={`./${item.slug}`}
            />
          ))}
        </div>
        <Outlet />
      </>
    );
  }

  return null;
};

export default Blog;
