import { Helmet } from 'react-helmet';

interface IMeta {
  title: string;
  description?: string;
  image?: string;
}

const MetaTag: React.FC<IMeta> = ({ title, description, image }) => {
  return (
    <Helmet>
      <title>{title} | @akbarsaputrait</title>
      <meta name="keywords" content="Akbar, Anung, Yudha, Saputra, akbarsaputrait, yuppey" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="akbarsaputrait" />

      <meta name="title" content={`${title} | @akbarsaputrait`} />
      <meta name="description" content={`${description} | @akbarsaputrait`} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://akbarsaputrait.github.io" />
      <meta property="og:title" content={`${title} | @akbarsaputrait`} />
      <meta property="og:description" content={`${description} | @akbarsaputrait`} />
      <meta property="og:image" content={image || ''} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://akbarsaputrait.github.io" />
      <meta property="twitter:title" content={`${title} | @akbarsaputrait`} />
      <meta property="twitter:description" content={`${description} | @akbarsaputrait`} />
      <meta property="twitter:image" content={image || ''} />
    </Helmet>
  );
};

export default MetaTag;
