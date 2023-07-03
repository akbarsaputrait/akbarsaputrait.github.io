import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: 'Ie4cn6HTCluxVHAu52151Att',
});

const useGetStories = () => {
  const res = () => {
    Storyblok.get('cdn/stories', {
      version: 'draft',
    }).then((response) => {
      console.log(response.data);
      return response;
    }).catch((error) =>{
      console.log(error)
    })
  };

  res();
}

export { Storyblok, useGetStories };
